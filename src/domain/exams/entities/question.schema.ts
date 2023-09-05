import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExamDocument = Document;

@Schema()
export class Question {
    @Prop({ required: true })
    text: string;

    @Prop([String])
    options: string[];

    @Prop({ required: true })
    correctOption: number;
}

export const QuestionSchema = SchemaFactory.createForClass(Question)