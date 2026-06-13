import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
// import { Response } from 'express';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth.guard';

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
  async googleCallback(@Req() req, @Res() res) {
    return "good job Huy";
    // const result = await this.authService.googleLogin(req.user);

    // return res.json(result);
  }
}