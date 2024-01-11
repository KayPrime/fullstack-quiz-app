import { Quiz } from "../models/quiz-model.js";

const quiz_home = (req, res) => {
    res.render("home");
};

const start_quiz = (req, res) => {
    res.render("start");
};

const create_quiz = (req, res) => {
    res.render("create");
};

const submit_quiz = async (req, res) => {
    console.log(req.body);
    const { question, answer, option1, option2, option3 } = req.body;
    const newQuiz = new Quiz({
        question,
        options: [answer, option1, option2, option3]
    });
    try {
        await newQuiz.save();
        console.log("new document saved!");
        res.status(201).render("decision", { success: true, message: "document saved successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).render("decision", { success: false, message: "document not saved" });
    };
};

const get_quiz  = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        console.log(quizzes);
        res.status(200).json({success: true, message: "data fetch successful", quizzes});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "error fetching data"});
    }
};

export { quiz_home, start_quiz, create_quiz,  submit_quiz, get_quiz };