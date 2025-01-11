import express from 'express';
import { getQuiz, submitQuiz } from '../controllers/question.controller.js';

const router = express.Router();

router.get('/get-quiz', getQuiz);

router.post('/submit-quiz', submitQuiz);

export default router;
