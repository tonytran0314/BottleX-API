import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createWishlistDto: CreateWishlistDto, @Req() req) {
    return this.wishlistsService.create(createWishlistDto, req.user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.wishlistsService.findAll(req.user.id);
  }

  @Get(':wishlistItemId')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('wishlistItemId') wishlistItemId: string, @Req() req) {
    return this.wishlistsService.findOne(+wishlistItemId, req.user.id);
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
}
