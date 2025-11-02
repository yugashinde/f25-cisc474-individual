import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import type { JwtUser } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserBySub(sub: string) {
    const [provider, providerId] = sub.split('|');
    const auth = await this.prisma.authentication.findFirst({
      where: { provider, providerId },
      include: { user: true },
    });

    if (!auth) {
      const user = await this.prisma.user.create({
        data: {
          authentications: { create: { provider, providerId } },
        },
      });
      return user;
    }

    return auth.user;
  }


  async getCurrentUser(jwtUser: JwtUser) {
    const user = await this.prisma.user.findUnique({
      where: { id: jwtUser.userId },
      select: { id: true, email: true, name: true },
    });
    return user;
  }
}