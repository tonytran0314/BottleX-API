import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const newTransaction = await this.prisma.transaction.create({
      data: {
        type: createTransactionDto.type,
        amount: createTransactionDto.amount,
        note: createTransactionDto.note?.trim() || null,
        transactionDate: createTransactionDto.transactionDate,
        // ================================================================== 
        // ====================== REPLACE WITH USER ID ======================
        // ==================================================================
        userId: 1 
      }
    });

    return newTransaction;
  }

  async findAll() {
    const transactions = await this.prisma.transaction.findMany({
      where: { userId: 1}
    })

    return transactions;
  }

  async findOne(id: number) {
    const transaction = await this.prisma.transaction.findFirst({
      where: { 
        id: id, // transaction ID
        userId: 1
      } 
    })

    if(!transaction) {
      throw new NotFoundException(`Transaction ${id} not found`);
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
