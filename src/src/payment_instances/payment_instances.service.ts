import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentInstanceDto } from './dto/create-payment_instance.dto';
import { UpdatePaymentInstanceDto } from './dto/update-payment_instance.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentInstancesService {
  constructor(private readonly prisma: PrismaService) {}

  // create(createPaymentInstanceDto: CreatePaymentInstanceDto) {
  //   return 'This action adds a new paymentInstance';
  // }

  findAll() {
    return `This action returns all paymentInstances`;
  }

  async findOne(paymentInstanceId: number, userId: number) {
    const paymentInstance = await this.prisma.paymentInstance.findFirst({
      where: {
        id: paymentInstanceId,
        payment: { userId }
      },
      include: {
        payment: true
      }
    })
    return paymentInstance;
  }

  async update(
    paymentInstanceId: number,
    updatePaymentInstanceDto: UpdatePaymentInstanceDto,
    userId: number,
  ) {
    const paymentInstance =
      await this.prisma.paymentInstance.findFirst({
        where: {
          id: paymentInstanceId,
          payment: {
            userId,
          },
        },
      });

    if (!paymentInstance) {
      throw new NotFoundException(
        'Payment instance not found',
      );
    }

    return this.prisma.paymentInstance.update({
      where: {
        id: paymentInstanceId,
      },
      data: updatePaymentInstanceDto,
    });
  }

  async remove(
    paymentInstanceId: number,
    userId: number,
  ) {
    const paymentInstance =
      await this.prisma.paymentInstance.findFirst({
        where: {
          id: paymentInstanceId,
          payment: {
            userId,
          },
        },
      });

    if (!paymentInstance) {
      throw new NotFoundException(
        'Payment instance not found',
      );
    }

    return this.prisma.paymentInstance.delete({
      where: {
        id: paymentInstanceId,
      },
    });
  }
}
