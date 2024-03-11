"use server";

import { connectToDatabase } from "@/lib/database";
import Quiz from "@/lib/database/models/quizModel";
import { handleError } from "@/lib/utils";

type IQuiz = {
  question: string;
  ans: string;
  options: string[];
  category: string;
};

export const createQuiz = async (quiz: IQuiz) => {
  try {
    await connectToDatabase();

    const quize = await Quiz.create({
      question: quiz.question,
      ans: quiz.ans,
      options: quiz.options,
      category: quiz.category,
    });

    return JSON.parse(JSON.stringify(quize));
  } catch (error) {
    handleError(error);
  }
};

export const getAllQuests = async () => {
  try {
    await connectToDatabase();

    const quizs = await Quiz.find();
    if (!quizs) handleError("Quiz not found");

    return JSON.parse(JSON.stringify(quizs));
  } catch (error) {
    handleError(error);
  }
};
