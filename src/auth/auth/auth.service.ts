import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../domain/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private userService: UsersService) { }

  async login(registration: string, password: string) {
    const matchUser = await this.validateCredentials(registration, password);

    return {
      token: this.jwtService.sign({
        sub: matchUser.id,
        username: matchUser.registration,
        role: matchUser.role,
      }), role: matchUser.role, userId: matchUser.id
    }
  }

  async validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      const user = await this.userService.findByRegistration(payload.username);

      if (!user) throw new Error('User not found');

      return {
        id: user.id,
        username: user.registration,
        role: user.role
      };
    } catch (error) {
      throw new UnauthorizedException()
    }
  }

  async validateCredentials(registration: string, password: string) {
    try {
      const user = await this.userService.findByRegistration(registration)
      if (user.registration === registration && bcrypt.compareSync(password, user.password)) {
        return user;
      }
    } catch (error) {
      throw new BadRequestException("User not found");
    }
  }
}
