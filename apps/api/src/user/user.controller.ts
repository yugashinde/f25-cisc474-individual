import {
  Controller,
  Get,
  Param,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import type { JwtUser } from 'src/auth/jwt.strategy';
import type { UserOut } from '@repo/api/user';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async me(@CurrentUser() auth: JwtUser): Promise<UserOut> {
    if (!auth || !auth.userId) {
      throw new UnauthorizedException();
    }
    return this.userService.findOrCreateUser(auth);
  }

  @Get()
  async findAll(): Promise<UserOut[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserOut | null> {
    return this.userService.findOne(id);
  }

  @Get('by-email/:email')
  async findByEmail(@Param('email') email: string): Promise<UserOut | null> {
    return this.userService.findByEmail(email);
  }
}
