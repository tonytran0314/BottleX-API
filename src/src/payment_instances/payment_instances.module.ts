import { Module } from '@nestjs/common';
import { PaymentInstancesService } from './payment_instances.service';
import { PaymentInstancesController } from './payment_instances.controller';

@Module({
  controllers: [PaymentInstancesController],
  providers: [PaymentInstancesService],
})
export class PaymentInstancesModule {}
