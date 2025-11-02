import {
  Controller,
  Get,
  UnauthorizedException,
  UseGuards,
  Param,
  Post,
  Body,
  Patch
} from '@nestjs/common';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import type { JwtUser } from 'src/auth/jwt.strategy';
import { AuthGuard } from '@nestjs/passport';
import { UserCreateIn, UserUpdateIn, UserOut} from '@repo/api'


@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async me(@CurrentUser() auth: JwtUser) {
    console.log(auth);
    if (!auth || !auth.userId) {

      throw new UnauthorizedException();
    }
    const user = await this.userService.findOne(auth.userId);
    if (!user) {
      throw new Error('User not found');
    }
    // Return only what your client needs (include the DB id!)
    return UserOut.parse({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return users.map((user) =>
      UserOut.parse({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      }),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return UserOut.parse({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }

  @Get('by-email/:email')
  async findByEmail(@Param('email') email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return UserOut.parse({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }

  @Post()
  async create(@Body() data: UserCreateIn) {
    const user = await this.userService.create(data);
    return UserCreateIn.parse({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }

  // ✏️ Update user by ID
  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UserUpdateIn) {
    const user = await this.userService.update(id, data);
    return UserUpdateIn.parse({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }
}