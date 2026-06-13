import { Type } from "class-transformer";
import { IsDateString, IsNumber, Min } from "class-validator";

export class CreateAccountDto {
    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    balance: number;

    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    safeToSpend: number;

    @IsDateString()
    safeToSpendUntil: string;
}
