import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './domain/users/users.module';
import { ResolutionsModule } from './domain/resolutions/resolutions.module';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamsModule } from './domain/exams/exams.module';

import * as mongoose from 'mongoose';
mongoose.set('debug', true);


@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true, }),
    MongooseModule.forRoot(`${process.env.MONGODB_CONNECTION_STRING}`),
    UsersModule, ResolutionsModule, ExamsModule, DatabaseModule],
})
export class AppModule { }
