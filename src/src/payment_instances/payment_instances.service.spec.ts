import { Test, TestingModule } from '@nestjs/testing';
import { PaymentInstancesService } from './payment_instances.service';

describe('PaymentInstancesService', () => {
  let service: PaymentInstancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentInstancesService],
    }).compile();

    service = module.get<PaymentInstancesService>(PaymentInstancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
