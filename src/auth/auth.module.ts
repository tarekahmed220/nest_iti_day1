import { Module } from '@nestjs/common';
import { UsersController } from './auth/auth.controller';
import { UsersService } from './auth/auth.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
