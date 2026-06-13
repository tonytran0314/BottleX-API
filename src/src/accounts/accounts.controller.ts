import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create() {
    return this.accountsService.create();
  }

  @Get()
  findOne() {
    return this.accountsService.findOne();
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
