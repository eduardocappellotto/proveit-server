import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { jwtConfig } from '../config/jwt.config';
import { UsersModule } from '../domain/users/users.module';

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService],
})
export class AuthModule { }
