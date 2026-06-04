import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma/prisma.service';

const DEFAULT_INIT_BALANCE = 0;
const DEFAULT_INIT_STP = 0;
const DEFAULT_INIT_STP_UNTIL = new Date(); // today

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) {}

  create() {
    const newAccount = this.prisma.account.create({
      data: {
        balance: DEFAULT_INIT_BALANCE,
        safeToSpend: DEFAULT_INIT_STP,
        safeToSpendUntil: DEFAULT_INIT_STP_UNTIL,
        userId: 1
      }
    })
    return newAccount;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  // findAll() {
  //   return `This action returns all accounts`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} account`;
  // }
}
