import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from './current-user.decorator';
import type { JwtUser } from './jwt.strategy';

@UseGuards(AuthGuard('jwt'))
@Controller('auth')
export class AuthController {
  @Get('me')
  getProfile(@CurrentUser() user: JwtUser) {
    return user; // send user info to frontend
  }
}