import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishlistsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWishlistDto: CreateWishlistDto, userId: number) {
    const newWistlistItem = await this.prisma.wishlist.create({
      data: {
        name: createWishlistDto.name,
        price: createWishlistDto.price,
        image: createWishlistDto.image,
        description: createWishlistDto.description,
        userId: userId
      }
    })
    return newWistlistItem;
  }

  async findAll(userId: number) {
    const wishlistItems = await this.prisma.wishlist.findMany({
      where: {userId}
    })

    return wishlistItems;
  }

  async findOne(wishlistItemId: number, userId: number) {
    const wishlistItem = await this.prisma.wishlist.findFirst({
      where: {
        id: wishlistItemId,
        userId: userId
      }
    })

    if(!wishlistItem) {
      throw new NotFoundException(`Wishlist item ${wishlistItemId} not found`)
    }

    return wishlistItem;
  }

  // update(id: number, updateWishlistDto: UpdateWishlistDto) {
  //   return `This action updates a #${id} wishlist`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} wishlist`;
  // }
}
