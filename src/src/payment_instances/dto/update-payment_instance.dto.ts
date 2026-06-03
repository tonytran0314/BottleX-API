import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentInstanceDto } from './create-payment_instance.dto';

export class UpdatePaymentInstanceDto extends PartialType(CreatePaymentInstanceDto) {}
