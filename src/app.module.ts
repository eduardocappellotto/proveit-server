import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './domain/users/users.module';
import { ResolutionsModule } from './domain/resolutions/resolutions.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true, }), UsersModule, ResolutionsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
