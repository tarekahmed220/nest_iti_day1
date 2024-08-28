import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { SigninController } from './signin/auth.controller';
import { SignupService } from './signup/signup.service';
import { SigninService } from './signin/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [SignupController, SigninController],
  providers: [SignupService, SigninService, JwtService]
})
export class AuthModule {}
