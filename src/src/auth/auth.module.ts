import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategies';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from './strategies/jwt.strategies';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET!,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, PrismaService, JwtStrategy],
})
export class AuthModule {}