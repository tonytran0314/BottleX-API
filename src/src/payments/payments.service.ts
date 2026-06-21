import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto, userId: number) {

    /* ----------------------------- Create Payment ----------------------------- */
    const newPayment = await this.prismaService.payment.create({
      data: {
        name: createPaymentDto.name,
        amount: createPaymentDto.amount,
        startDate: createPaymentDto.startDate,
        endDate: createPaymentDto.endDate,
        userId: userId
      }
    })

    /* ------------------------ Create Payment Due Dates ------------------------ */
    for (let index = 0; index < createPaymentDto.dueDates.length; index++) {
      await this.prismaService.paymentDueDate.create({
        data: {
          paymentId: newPayment.id,
          dueDateOnMonth: createPaymentDto.dueDates[index]
        }
      })
    }
    

    /* ------------------------ Create Payment Instances ------------------------ */
    const dueDates = generateDueDates(
      createPaymentDto.startDate,
      createPaymentDto.endDate,
      createPaymentDto.dueDates
    )

    for (let index = 0; index < dueDates.length; index++) {
      await this.prismaService.paymentInstance.create({
        data: {
          name: newPayment.name,
          amount: newPayment.amount,
          dueDate: dueDates[index],
          paymentId: newPayment.id
        }
      })
    }

    return newPayment;
  }

  async findAll(userId: number) {
    const payments = await this.prismaService.payment.findMany({
      where: { userId },
      include: {
        dueDates: true
      }
    })
    return payments;
  }

  async findOne(paymentId: number, userId: number) {
    const payment = await this.prismaService.payment.findUnique({
      where: { 
        id: paymentId,
        userId: userId 
      },
      include: {
        dueDates: true
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

function generateDueDates(
  startDate: string,
  endDate: string,
  dueDays: number[],
) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const results: Date[] = [];

  let year = start.getFullYear();
  let month = start.getMonth();

  while (
    year < end.getFullYear() ||
    (year === end.getFullYear() && month <= end.getMonth())
  ) {
    for (const dueDay of dueDays) {
      const dueDate = new Date(year, month, dueDay);

      // tránh Feb 30 tự thành Mar 2
      if (dueDate.getMonth() !== month) {
        continue;
      }

      if (dueDate >= start && dueDate <= end) {
        results.push(dueDate);
      }
    }

    month++;

    if (month > 11) {
      month = 0;
      year++;
    }
  }

  return results;
}
