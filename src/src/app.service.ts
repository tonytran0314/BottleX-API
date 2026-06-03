import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {} 

  getHello(): any {
    return 'Van Kim Hai Tuyet dang iu';
  }
}
