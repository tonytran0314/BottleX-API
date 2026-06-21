import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  // @Post()
  // create() {
  //   return this.accountsService.create();
  // }

  @Get()
  @UseGuards(JwtAuthGuard)
  getAccount(@Req() req) {
    return this.accountsService.getAccount(req.user.id);
  }

  @Patch()
  update(@Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(updateAccountDto);
  }

  // @Get()
  // findAll() {
  //   return this.accountsService.findAll();
  // }
  
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.accountsService.remove(+id);
  // }
}
