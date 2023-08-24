import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../domain/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private userService: UsersService) { }

  async login(registration: string, password: string) {
    const matchUser = await this.validateCredentials(registration, password);

    return this.jwtService.sign({
      sub: matchUser.id,
      username: matchUser.registration,
      role: matchUser.role,
    });
  }

  async validateCredentials(registration: string, password: string) {
    const user = await this.userService.findByRegistration(registration)

    if (user.registration === registration && bcrypt.compareSync(password, user.password)) {
      return user;
    } else {
      throw new Error('User not found');
    }
  }
}
