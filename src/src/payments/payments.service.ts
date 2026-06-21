import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto, userId: number) {
    const newPayment = await this.prismaService.payment.create({
      data: {
        name: createPaymentDto.name,
        amount: createPaymentDto.amount,
        startDate: createPaymentDto.startDate,
        endDate: createPaymentDto.endDate,
        userId: userId
      }
    })

    return newPayment;
  }

  async findAll(userId: number) {
    const payments = await this.prismaService.payment.findMany({
      where: { userId }
    })
    return payments;
  }

  async findOne(paymentId: number, userId: number) {
    const payment = await this.prismaService.payment.findUnique({
      where: { 
        id: paymentId,
        userId: userId 
      }
    })
    return payment;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
