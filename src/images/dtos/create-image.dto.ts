import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImageDto {

  @IsString()
  @IsNotEmpty()
  readonly url: string;

  readonly idUser: string;

  readonly description: string;
}
