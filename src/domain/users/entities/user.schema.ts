
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type RolesEnum = 'ADMIN' | 'ALUNO';

export interface IUser extends Document {
    registration: string;
    password: string;
    role: RolesEnum
}

@Schema()
export class User {
    @Prop({ required: true })
    registration: string;

    @Prop({ required: true })
    password: string;

    @Prop({
        required: true,
        enum: ['ADMIN', 'ALUNO'],
        validate: {
            validator: function (v) {
                return ['ADMIN', 'ALUNO'].includes(v);
            },
            message: (props) => `${props.value} não é uma role válida!`
        }
    })
    role: RolesEnum;
}

export const UserSchema = SchemaFactory.createForClass(User);