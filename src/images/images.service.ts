import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IImage } from './interface/image.interface';
import { CreateImageDto } from './dtos/create-image.dto';

@Injectable()
export class ImagesService {

  constructor(
    @InjectModel('images') private readonly imageModel: Model<IImage>,
  ) {

  }

  async getAllImages(): Promise<IImage[]> {
    return await this.imageModel.find().exec();

  }

  async createPost(image: CreateImageDto): Promise<any> {
    return this.imageModel.create(image);
  }
}
