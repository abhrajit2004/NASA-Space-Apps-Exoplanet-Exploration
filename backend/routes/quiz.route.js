import express from 'express';
import { getQuizQuestions } from '../controllers/quiz.controller.js';

const router = express.Router();

router.get('/:planetName', getQuizQuestions);

export default router;