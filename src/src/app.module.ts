import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PaymentsModule } from './payments/payments.module';
import { PaymentInstancesModule } from './payment_instances/payment_instances.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WishlistsModule } from './wishlists/wishlists.module';

@Module({
  imports: [PrismaModule, PaymentsModule, PaymentInstancesModule, TransactionsModule, AccountsModule, UsersModule, AuthModule, WishlistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
