import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AnswerDto {

    @IsString()
    @IsNotEmpty()
    questionId: string;

    @IsNotEmpty()
    answer: number;
}

export class FinishResolutionDto {

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnswerDto)
    answers: AnswerDto[];
}
