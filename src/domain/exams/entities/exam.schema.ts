import { Schema, Document, model } from 'mongoose';

interface IQuestion {
    questionText: string;
    options: string[];
    correctOption: number;
}

export interface IExam extends Document {
    title: string;
    questions: IQuestion[];
}

const QuestionSchema: Schema = new Schema({
    questionText: { type: String, required: true },
    options: { type: [String], required: true },
    correctOption: { type: Number, required: true }
});

const ExamSchema: Schema = new Schema({
    title: { type: String, required: true },
    questions: { type: [QuestionSchema], required: true }
});

export const Exam = model<IExam>('Exam', ExamSchema);
