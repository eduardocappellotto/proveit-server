import * as mongoose from 'mongoose'

const resolutionSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        required: true
    },
    answers: [{
        questionId: mongoose.Schema.Types.ObjectId,
        selectedOption: Number
    }],
    score: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export const Resolution = mongoose.model('Resolution', resolutionSchema);