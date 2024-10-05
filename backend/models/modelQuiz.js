import mongoose from 'mongoose';
const { Schema } = mongoose;

const quizSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    questions: [
        {
            questionText: { 
                type: String, 
                required: true 
            },
            options: [
                {
                    optionText: { 
                        type: String, 
                        required: true 
                    },
                    isCorrect: { 
                        type: Boolean, 
                        required: true 
                    },
                    CorrectAnswer: {
                        type: Boolean,
                        required: true
                    },
                }
            ],
            explanation: { 
                type: String,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Quiz = mongoose.model('Quiz', quizSchema);