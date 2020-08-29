import { Body, Controller, Get, Req, Post, HttpException } from '@nestjs/common';
import { IImage } from './interface/image.interface';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dtos/create-image.dto';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {
  }

  @Get()
  async getAllImages(): Promise<IImage[]> {
    return this.imagesService.getAllImages();
  }

  @Post()
  async createPost(@Req() request, @Body() image: CreateImageDto): Promise<any> {
    const { code } = request.headers;
    if (!code) {
      throw new HttpException('User id não encontrado', 503);
    }
    image.idUser = code;
    return this.imagesService.createPost(image);
  }
}
