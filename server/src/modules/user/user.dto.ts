import { OmitType, PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class UserDto {
  @ApiProperty()
  _id: Types.ObjectId;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age?: number;

  @ApiProperty()
  dateOfBirth?: Date;
}

export class CreateUserPayload extends OmitType(UserDto, ['_id']) {}
export class UpdateUserPayload extends PartialType(CreateUserPayload) {}
