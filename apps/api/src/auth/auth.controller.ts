import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt.strategy.guard';
import { CurrentUser } from './current-user.decorator';
import type { JwtUser } from './jwt.strategy';

@Controller('auth')
export class AuthController {
  @Get('me')
  @UseGuards(JwtAuthGuard)
  getProfile(@CurrentUser() user: JwtUser) {
    return user; // send user info to frontend
  }
}