import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { signUpDTO } from '../dto/auth.dto';
import { User } from 'src/core/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async signUp(body: signUpDTO) {
    const isuserFind = await this.userModel.findOne({ email: body.email });
    if (isuserFind) {
      //   return 'this user is exist please signin instead';
      throw new HttpException(
        'this user is exist please signin instead',
        HttpStatus.CONFLICT
      );
    } else {
      body.password = await bcrypt.hash(body.password, 8);
      const addedUser = await this.userModel.insertMany(body);
      return { message: 'added successfully', addedUser };
    }
  }
}
