import {
  Controller,
  Param,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import type { JwtUser } from 'src/auth/jwt.strategy';
import type { UserOut } from '@repo/api/user';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('me')
  async me(@CurrentUser() auth: JwtUser): Promise<UserOut> {
    if (!auth || !auth.userId) {
      throw new UnauthorizedException();
    }
    return this.userService.findOrCreateUser(auth);
  }

  @Post()
  async findAll(): Promise<UserOut[]> {
    return this.userService.findAll();
  }

  @Post(':id')
  async findOne(@Param('id') id: string): Promise<UserOut | null> {
    return this.userService.findOne(id);
  }

  @Post('by-email/:email')
  async findByEmail(@Param('email') email: string): Promise<UserOut | null> {
    return this.userService.findByEmail(email);
  }
}
