import { Test, TestingModule } from '@nestjs/testing';
import { PaymentInstancesController } from './payment_instances.controller';
import { PaymentInstancesService } from './payment_instances.service';

describe('PaymentInstancesController', () => {
  let controller: PaymentInstancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentInstancesController],
      providers: [PaymentInstancesService],
    }).compile();

    controller = module.get<PaymentInstancesController>(PaymentInstancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
