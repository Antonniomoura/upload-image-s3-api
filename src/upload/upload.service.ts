import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

const AWS_S3_BUCKET_NAME = 'AWS_S3_BUCKET_NAME';

const S3 = new AWS.S3({
  accessKeyId: 'ACCESS_KEY_ID',
  secretAccessKey: 'SECRET_ACCESS_KEY',
});

@Injectable()
export class UploadService {
  async uploadFile(file: any): Promise<any> {
    const urlKey = '';
    const params = {
      Body: file.buffer,
      Bucket: AWS_S3_BUCKET_NAME,
      Key: urlKey,
    };

    return await S3.putObject(params).promise().then(data => {
      console.log(data);
      return data;
    }, error => {
      console.log(error);
      return error;
    });
  }
}
