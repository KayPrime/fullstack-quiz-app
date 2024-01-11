import {Router} from "express";
import {quiz_home, start_quiz,  create_quiz,  submit_quiz, get_quiz } from "../controllers/main-controller.js"

const router = Router();

router.get("/", quiz_home);

router.get("/start-quiz", start_quiz);

router.get("/create-quiz", create_quiz);

router.post("/submit-quiz", submit_quiz);

router.get("/get-quiz", get_quiz);

export default router;