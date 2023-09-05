
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body() body) {
    return await this.authService.login(body.registration, body.password)
  }

  @Post('validate')
  async validateToken(@Body('token') token: string) {
    return this.authService.validateToken(token);
  }

} 
