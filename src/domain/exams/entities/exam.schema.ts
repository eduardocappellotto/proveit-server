import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Question, QuestionSchema } from './question.schema';
import { IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export type ExamDocument = Exam & Document;

export type ExamList = {
    title: string,
    questionCount: number,

}

@Schema()
export class Exam {

    @Prop({ required: true })
    title: string;

    @Prop({ type: [QuestionSchema], required: true })
    @IsNotEmpty()
    questions: Question[];

    @Prop({ type: Boolean, default: false })
    @Transform(({ value }) => value === 'true')
    isPublished: boolean;

    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;
}

export const ExamSchema = SchemaFactory.createForClass(Exam);
