import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    subskill: String,        // Subskill for categorizing questions
    question: String,        // The question text
    options: [String],       // Multiple choice options
    correctAnswer: String,   // The correct answer
});

const Question = mongoose.model('Question', questionSchema);
export default Question;
