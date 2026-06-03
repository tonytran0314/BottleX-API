import { Injectable } from '@nestjs/common';
import { CreatePaymentInstanceDto } from './dto/create-payment_instance.dto';
import { UpdatePaymentInstanceDto } from './dto/update-payment_instance.dto';

@Injectable()
export class PaymentInstancesService {
  create(createPaymentInstanceDto: CreatePaymentInstanceDto) {
    return 'This action adds a new paymentInstance';
  }

  findAll() {
    return `This action returns all paymentInstances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentInstance`;
  }

  update(id: number, updatePaymentInstanceDto: UpdatePaymentInstanceDto) {
    return `This action updates a #${id} paymentInstance`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentInstance`;
  }
}
