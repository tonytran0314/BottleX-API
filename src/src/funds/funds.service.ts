import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFundDto } from './dto/create-fund.dto';
import { UpdateFundDto } from './dto/update-fund.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FundsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(CreateFundDto: CreateFundDto, userId: number) {
    const newFund = await this.prisma.fund.create({
      data: {
        name: CreateFundDto.name,
        image: CreateFundDto.image,
        description: CreateFundDto.description,
        userId: userId
      }
    })
    return newFund;
  }

  async findAll(userId: number) {
    const funds = await this.prisma.fund.findMany({
      where: {userId}
    })

    return funds;
  }

  async findOne(fundId: number, userId: number) {
    const fund = await this.prisma.fund.findFirst({
      where: {
        id: fundId,
        userId: userId
      }
    })

    if(!fund) {
      throw new NotFoundException(`Fund ${fundId} not found`)
    }

    return fund;
  }

  // update(id: number, updateFundDto: UpdateFundDto) {
  //   return `This action updates a #${id} fund`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} fund`;
  // }
}
