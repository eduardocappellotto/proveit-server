import { IUser } from '../entities/user.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }

    async create(user: any): Promise<IUser> {
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    async findByRegistration(registration: string): Promise<IUser | null> {
        return this.userModel.findOne({ registration }).exec();
    }

}
