import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Resolution extends Document {

    @Prop({ required: true, ref: 'Exam' })
    examId: string;

    @Prop({ required: true })
    userId: string;

    @Prop({ default: Date.now })
    startedAt: Date;

    @Prop({ type: [{ questionId: String, answer: Number }] })
    answers: Array<{ questionId: string, answer: number }>;

    @Prop({ default: null })
    finishedAt: Date;

    @Prop({ default: null })
    grade: number;

}

export const ResolutionSchema = SchemaFactory.createForClass(Resolution);
