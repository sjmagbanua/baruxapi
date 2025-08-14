import { IsString, IsInt, Min, IsEmail, MinLength } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}