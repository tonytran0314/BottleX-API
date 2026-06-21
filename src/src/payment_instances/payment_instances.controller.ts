import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PaymentInstancesService } from './payment_instances.service';
import { CreatePaymentInstanceDto } from './dto/create-payment_instance.dto';
import { UpdatePaymentInstanceDto } from './dto/update-payment_instance.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('payment-instances')
export class PaymentInstancesController {
  constructor(private readonly paymentInstancesService: PaymentInstancesService) {}

  // @Post()
  // create(@Body() createPaymentInstanceDto: CreatePaymentInstanceDto) {
  //   return this.paymentInstancesService.create(createPaymentInstanceDto);
  // }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.paymentInstancesService.findAll();
  }

  @Get(':paymentInstanceId')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('paymentInstanceId') paymentInstanceId: string, @Req() req) {
    return this.paymentInstancesService.findOne(+paymentInstanceId, req.user.id);
  }

  @Patch(':paymentInstanceId')
  @UseGuards(JwtAuthGuard)
  update(@Param('paymentInstanceId') paymentInstanceId: string, @Body() updatePaymentInstanceDto: UpdatePaymentInstanceDto, @Req() req) {
    return this.paymentInstancesService.update(+paymentInstanceId, updatePaymentInstanceDto, req.user.id);
  }

  @Delete(':paymentInstanceId')
  @UseGuards(JwtAuthGuard)
  remove(@Param('paymentInstanceId') paymentInstanceId: number, @Req() req) {
    return this.paymentInstancesService.remove(+paymentInstanceId, req.user.id);
  }
}
