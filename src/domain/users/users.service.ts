import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) { }

  async create(userDto: any): Promise<any> {
    try {
      const hashedPassword = await bcrypt.hash(userDto.password, 10);
      const user = await this.userRepository.create({
        ...userDto,
        password: hashedPassword,
      });
      return { registration: user.registration, role: user.role };
    } catch (error) {
      throw error
    }

  }

  async findByRegistration(registration: string): Promise<any> {
    return this.userRepository.findByRegistration(registration);
  }


}
