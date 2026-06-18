import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
// import { Response } from 'express';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleLogin() {
    // Passport tự redirect sang Google
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallback(@Req() req) {
    const result = await this.authService.googleLogin(req.user);

    return result;
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@Req() req) {
    return req.user;
  }
}