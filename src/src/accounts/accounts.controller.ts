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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(+id, updateAccountDto);
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
