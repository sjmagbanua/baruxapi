import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateAccountDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsEmail()
    email: string;
}