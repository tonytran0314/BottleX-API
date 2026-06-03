import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentInstancesService } from './payment_instances.service';
import { CreatePaymentInstanceDto } from './dto/create-payment_instance.dto';
import { UpdatePaymentInstanceDto } from './dto/update-payment_instance.dto';

@Controller('payment-instances')
export class PaymentInstancesController {
  constructor(private readonly paymentInstancesService: PaymentInstancesService) {}

  @Post()
  create(@Body() createPaymentInstanceDto: CreatePaymentInstanceDto) {
    return this.paymentInstancesService.create(createPaymentInstanceDto);
  }

  @Get()
  findAll() {
    return this.paymentInstancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentInstancesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentInstanceDto: UpdatePaymentInstanceDto) {
    return this.paymentInstancesService.update(+id, updatePaymentInstanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentInstancesService.remove(+id);
  }
}
