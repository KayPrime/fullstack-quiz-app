import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    question: {
        required: true,
        type: String,
        unique: true
    },
    options: {
        required: true,
        type: Array
    }
});

const Quiz = mongoose.model("Quiz", quizSchema);

export { Quiz };