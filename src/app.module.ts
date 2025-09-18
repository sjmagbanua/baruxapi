import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PostsService } from './post.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UserModule, AuthModule, UserModule, ConfigModule.forRoot({ isGlobal: true }),],
  controllers: [AppController],
  providers: [AppService, PostsService, PrismaService],
})
export class AppModule { }
