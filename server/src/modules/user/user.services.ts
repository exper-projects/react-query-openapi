import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/models/user.model';
import { CreateUserPayload, UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel.name) private readonly userModel: Model<UserModel>,
  ) {}

  async createUser(payload: CreateUserPayload): Promise<UserDto> {
    try {
      return await new this.userModel(payload).save();
    } catch (error) {
      Logger.log('Error on createUser', error);
    }
  }
}
