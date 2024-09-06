import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { signInDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SigninService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
  ) {}
  async signIn(body: signInDTO) {
    const targetUser = await this.userModel.findOne({ email: body.email });
    if (
      targetUser &&
      (await bcrypt.compare(body.password, targetUser.password))
    ) {
      const token = this.jwtService.sign(
        { name: targetUser.name, email: targetUser.email, id: targetUser._id },
        { secret: 'Allahakbar' }
      );
      return { message: 'welcome', token: token };
    } else {
      throw new HttpException(
        'your data is not correct',
        HttpStatus.BAD_REQUEST
      );
    }
  }
}
