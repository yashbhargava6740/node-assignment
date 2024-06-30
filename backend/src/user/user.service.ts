// user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async saveTree(username: string, tree: any): Promise<User> {
    return this.userModel.findOneAndUpdate(
      { username },
      { tree },
      { new: true, upsert: true }
    ).exec();
  }

  async getTree(username: string): Promise<any> {
    const user = await this.userModel.findOne({ username }).exec();
    return user ? user.tree : null;
  }
}
