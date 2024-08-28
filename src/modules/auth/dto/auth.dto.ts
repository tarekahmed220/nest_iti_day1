import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

export class signUpDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(15)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
export class signInDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
