import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './repositories/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.schema';

@Module({
  controllers: [UsersController],
  providers: [UserRepository, UsersService],
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule { }
