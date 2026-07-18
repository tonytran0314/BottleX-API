import { IsOptional, IsString } from 'class-validator';

export class CreateFundDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional() // later, it is not optional
    image: string;

    @IsString()
    description: string;
}
