"use server";

import { connectToDatabase } from "@/lib/database";
import Quiz, { IQuiz } from "@/lib/database/models/quizModel";
import { handleError } from "@/lib/utils";

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
