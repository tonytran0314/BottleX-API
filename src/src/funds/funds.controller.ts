import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { FundsService } from './funds.service';
import { CreateFundDto } from './dto/create-fund.dto';
import { UpdateFundDto } from './dto/update-fund.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('funds')
export class FundsController {
  constructor(private readonly fundsService: FundsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createFundDto: CreateFundDto, @Req() req) {
    return this.fundsService.create(createFundDto, req.user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.fundsService.findAll(req.user.id);
  }

  @Get(':fundId')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('fundId') fundId: string, @Req() req) {
    return this.fundsService.findOne(+fundId, req.user.id);
  }

  // @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  // update(@Param('id') id: string, @Body() updateFundDto: UpdateFundDto) {
  //   return this.fundsService.update(+id, updateFundDto);
  // }

  // @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  // remove(@Param('id') id: string) {
  //   return this.fundsService.remove(+id);
  // }
}

  
  /* -------------------------------------------------------------------------- */
  /*                    BEFORE EDIT OR DELETE WISHLIST ITEM,                    */
  /*                                                                            */
  /*        REMEMBER TO CHECK IF THIS USER HAS THIS WISHLIST ITEM OR NOT        */
  /* -------------------------------------------------------------------------- */
  
  // @Patch(':wishlistItemId')
  // @UseGuards(JwtAuthGuard)
  // update(@Param('wishlistItemId') wishlistItemId: string, @Body() updateWishlistDto: UpdateWishlistDto) {
  //   return this.wishlistsService.update(+wishlistItemId, updateWishlistDto);
  // }

  // @Delete(':wishlistItemId')
  // @UseGuards(JwtAuthGuard)
  // remove(@Param('wishlistItemId') wishlistItemId: string) {
  //   return this.wishlistsService.remove(+wishlistItemId);
  // }
// }
