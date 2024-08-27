import { Body, Controller, Post } from '@nestjs/common';
import { loginUser, user } from '../auth.dto';
import { UsersService } from './auth.service';

@Controller()
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}
  @Post('/signup')
  signUp(@Body() body: user) {
    return this._usersService.signUp(body);
  }

  @Post('/signin')
  signIn(@Body() body: loginUser) {
    return this._usersService.signIn(body);
  }
}
