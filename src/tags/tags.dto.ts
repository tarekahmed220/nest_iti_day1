import { IsString, MaxLength, MinLength } from 'class-validator';

export class tag {
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  name: string;
  id: string;
}
