import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto, userId: number) {
    const newTransaction = await this.prisma.transaction.create({
      data: {
        type: createTransactionDto.type,
        amount: createTransactionDto.amount,
        note: createTransactionDto.note?.trim() || null,
        transactionDate: createTransactionDto.transactionDate,
        userId: userId,
        name: createTransactionDto.name,
        image: createTransactionDto.image
      }
    });

    return newTransaction;
  }

  async findAll(userId: number) {
    const transactions = await this.prisma.transaction.findMany({
      where: { userId }
    })

    return transactions;
  }

  async findOne(transactionId: number, userId: number) {
    const transaction = await this.prisma.transaction.findFirst({
      where: { 
        id: transactionId,
        userId: userId
      } 
    })

    if(!transaction) {
      throw new NotFoundException(`Transaction ${transactionId} not found`);
    }

    return transaction;
  }

  // update(id: number, updateTransactionDto: UpdateTransactionDto) {
  //   return `This action updates a #${id} transaction`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} transaction`;
  // }
}
