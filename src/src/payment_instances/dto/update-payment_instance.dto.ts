import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePaymentInstanceDto {
  @IsOptional()
  @IsString()
  name?: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  amount?: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  preparedAmount?: number;

  @IsOptional()
  @IsBoolean()
  isPaid?: boolean;

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}