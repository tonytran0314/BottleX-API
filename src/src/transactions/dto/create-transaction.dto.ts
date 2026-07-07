import { Type } from 'class-transformer';
import { IsDateString, IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export enum TransactionType {
    INCOME = 'INCOME',
    EXPENSE = 'EXPENSE'
}

export class CreateTransactionDto {
    @IsEnum(TransactionType)
    type:  TransactionType;

    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    amount: number;

    @IsOptional()
    @IsString()
    note?: string;

    @IsDateString()
    transactionDate: string;

    @IsString()
    name: string;

    @IsString()
    image: string;
}
