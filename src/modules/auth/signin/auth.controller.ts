import { Body, Controller, Post } from '@nestjs/common';
import { signInDTO } from '../dto/auth.dto';
import { SigninService } from './auth.service';

@Controller('signin')
export class SigninController {
  constructor(private signinService: SigninService) {}
  @Post()
  signIn(@Body() body: signInDTO) {
    return this.signinService.signIn(body);
  }
}
