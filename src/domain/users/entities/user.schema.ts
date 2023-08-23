import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
    matricula: string;
    password: string;
    role: 'admin' | 'aluno';
}

const UserSchema: Schema = new Schema({
    matricula: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'aluno'] }
});

export const User = model<IUser>('User', UserSchema);
