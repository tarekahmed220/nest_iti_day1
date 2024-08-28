import { IsString, IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  coverImg: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsNotEmpty()
  @IsNumber()
  likes: number;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  tagList: string[];

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
