import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateWishlistDto {
    @IsString()
    name: string;

    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    price: number;

    @IsString()
    @IsOptional() // later, it is not optional
    image: string;

    @IsString()
    description: string;
}
