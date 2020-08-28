import { Body, Controller, Get, Post } from '@nestjs/common';
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
  async createPost(@Body() image: CreateImageDto): Promise<any> {
    return this.imagesService.createPost(image);
  }
}
