import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsNumber
  //   IsStrongPassword
} from 'class-validator';

export class user {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(3)
  @MaxLength(15)
  //TODO:DON'T FORGET
  //   @IsStrongPassword()
  password: number;
}

export class loginUser {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: number;
}
