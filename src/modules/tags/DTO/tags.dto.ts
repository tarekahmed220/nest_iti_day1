import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class TagsDto {
  @IsString()
  @MaxLength(15)
  @MinLength(3)
  @IsNotEmpty()
  name: string;
}
