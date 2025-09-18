import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from 'src/prisma.module';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Module({
  imports: [PrismaModule, PrismaModule],
  controllers: [UserController],
  providers: [CreateUserDto, UpdateUserDto, UserService, PrismaService],
  exports: [UserService],
})
export class UserModule { }
