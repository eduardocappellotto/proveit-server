import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resolution } from '../entities/resolution.schema';

@Injectable()
export class ResolutionRepository {
    constructor(@InjectModel(Resolution.name) private resolutionModel: Model<Resolution>) { }

    async create(data: any): Promise<Resolution> {
        const resolution = new this.resolutionModel(data);
        return resolution.save();
    }

    async findOneById(resolutionId: string): Promise<Resolution> {
        return this.resolutionModel.findById(resolutionId);
    }

    async findAllByUserId(userId: string): Promise<Resolution[]> {
        return this.resolutionModel.find({ userId: userId }).populate('examId').exec();
    }

    async findOne(filter: any): Promise<Resolution | null> {
        return this.resolutionModel.findOne(filter).exec();
    }

    async update(resolutionId: string, data: any): Promise<Resolution> {
        return this.resolutionModel.findByIdAndUpdate(resolutionId, data, { new: true });
    }

}
