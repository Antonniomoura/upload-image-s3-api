import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [UploadModule, ConfigModule.forRoot(
    {
      isGlobal: true,
      envFilePath: '.env'
    },
  ), ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
