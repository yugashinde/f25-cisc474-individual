import {
  Controller,
  Param,
  Get,
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
  @Get('me')
  async me(@CurrentUser() auth: JwtUser ) {
    console.log(auth);
    if (!auth?.userId) {
      throw new UnauthorizedException();
    }
    const user = await this.userService.findOne(auth.userId);
    if (!user) {
      throw new Error('User not found');
    }
    // Return only what your client needs (include the DB id!)
    const {id,email,name,role} = user;
    return {id,email,name,role}; 
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