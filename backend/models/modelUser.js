import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        default: "",
    },
    favorites: [
        {
            planetName: { 
                type: String, 
                required: true 
            }
        }
    ],
    quizAttempts: [
        {
            id: { 
                type: String, 
                required: true 
            },
            score: { 
                type: Number, 
                required: true 
            },
            attemptedAt: { 
                type: Date, 
                default: Date.now 
            },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const User = mongoose.model("User", userSchema);