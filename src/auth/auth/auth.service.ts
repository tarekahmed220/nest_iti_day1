import { Injectable } from '@nestjs/common';
import { loginUser, user } from '../auth.dto';

@Injectable()
export class UsersService {
  users: user[] = [
    {
      name: 'user1',
      email: 'user1@gmail.com',
      password: 123456
    },
    {
      name: 'user2',
      email: 'user2@gmail.com',
      password: 6651215
    },
    {
      name: 'user3',
      email: 'user3@gmail.com',
      password: 654312
    },
    {
      name: 'user4',
      email: 'user4@gmail.com',
      password: 55632541
    }
  ];
  signUp(user: user): string {
    const isExist = this.users.find((ele) => ele.email == user.email);
    if (isExist) {
      return 'this email already registered';
    } else {
      this.users.push(user);
      return 'registration was successfull';
    }
  }
  signIn(user: loginUser): string {
    const exist = this.users.find((ele) => ele.email == user.email);
    console.log(exist);
    if (exist && exist.password === user.password) {
      return 'welcome';
    } else {
      return 'invalid email or password';
    }
  }
}
