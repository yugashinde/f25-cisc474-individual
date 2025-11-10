import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { JwtUser } from '../auth/jwt.strategy';
import type { UserOut } from '@repo/api/user';
import type { User } from '@repo/database';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  private toUserOut(user: User): UserOut {
    return {
      id: user.id,
      name: user.name ?? '',
      email: user.email ?? '',
      role: user.role,
    };
  }

  async findOrCreateUser(jwtUser: JwtUser): Promise<UserOut> {
    const { sub } = jwtUser;
    const [provider, providerId] = sub.split('|');

    let auth = await this.prisma.authentication.findFirstOrThrow({
      where: { provider, providerId },
      include: { user: true },
    });

    if (!auth) {
      const user = await this.prisma.user.create({
        data: {
          authentications: {
            create: { provider, providerId },
          },
        },
      });
      return this.toUserOut(user);
    }

    return this.toUserOut(auth.user);
  }

  async findAll(): Promise<UserOut[]> {
    const users = await this.prisma.user.findMany();
    return users.map((u) => this.toUserOut(u));
  }

  async findOne(id: string): Promise<UserOut | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? this.toUserOut(user) : null;
  }

  async findByEmail(email: string): Promise<UserOut | null> {
    const user = await this.prisma.user.findFirstOrThrow({ where: { email } });
    return user ? this.toUserOut(user) : null;
  }

  async update(id: string, data: Partial<User>): Promise<UserOut> {
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    return this.toUserOut(user);
  }

  async create(data: Partial<User>): Promise<UserOut> {
    const user = await this.prisma.user.create({ data });
    return this.toUserOut(user);
  }

  async remove(id: string): Promise<UserOut> {
    const user = await this.prisma.user.delete({ where: { id } });
    return this.toUserOut(user);
  }
}
