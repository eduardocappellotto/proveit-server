import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Exam } from '../entities/exam.schema';
const ObjectId = require('mongodb').ObjectId;


@Injectable()
export class ExamRepository {
    constructor(@InjectModel(Exam.name) private readonly examModel: Model<Exam>) { }

    async create(exam): Promise<Exam> {
        const createdExam = new this.examModel(exam);
        return await createdExam.save();
    }

    async findAll(isPublished?: boolean): Promise<Exam[]> {
        let query = {};
        if (isPublished) {
            query = { isDeleted: false, isPublished: isPublished };
        } else {
            query = { isDeleted: false };
        }

        return this.examModel.find(query).exec();
    }

    async findById(id: string): Promise<Exam | null> {
        return this.examModel.findOne({ _id: new ObjectId(id) }).exec();
    }

    async publishOrUnpublishExam(id: string, shouldPublish: boolean): Promise<Exam> {
        return this.examModel.findByIdAndUpdate(id, { isPublished: shouldPublish }, { new: true }).exec();
    }

    async softDelete(id: string): Promise<Exam> {
        return this.examModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true }).exec();
    }
}
