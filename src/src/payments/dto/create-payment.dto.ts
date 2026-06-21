import { Type } from 'class-transformer';
import { IsArray, IsDateString, IsNumber, IsString, Min, IsInt } from 'class-validator';

export class CreatePaymentDto {
    @IsString()
    name:  string;

    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    amount: number;

    @IsDateString()
    startDate: string;
    
    @IsDateString()
    endDate: string;

    @IsArray()
    @IsInt({ each: true })
    dueDates: number[];
}
