import { IsString, IsNotEmpty } from 'class-validator';

export class StartResolutionDto {

    @IsString()
    @IsNotEmpty()
    examId: string;

    @IsString()
    @IsNotEmpty()
    userId: string;
}
