import { Controller, Post, Body, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register')
  async register(@Body() userDto: any): Promise<any> {
    try {
      const user = await this.usersService.create(userDto);
      return { registration: user.registration, role: user.role };
    } catch (error) {
      return { error: error.message };
    }
  }
}
