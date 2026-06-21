import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AccountsService } from '../accounts/accounts.service';

type GoogleUser = {
  googleId: string;
  email: string;
  fullName: string;
};

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private accountService: AccountsService
  ) {}

  async googleLogin(googleUser: GoogleUser) {
    let user = await this.prisma.user.findFirst({
      where: { email: googleUser.email },
    });

    if (!user) {
      /* ----------------- If user not found => create a new user ----------------- */
      user = await this.prisma.user.create({
        data: {
          email: googleUser.email,
          fullName: googleUser.fullName,
          googleId: googleUser.googleId,
          provider: 'google',
        },
      });
      
      /* ----------------- Then create a new account for that user ---------------- */
      await this.accountService.create(user.id);
    }


    /* ------------------------------ Create token ------------------------------ */
    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    });

    return { accessToken };
  }
}