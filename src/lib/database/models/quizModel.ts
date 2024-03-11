import { Document, Schema, model, models } from "mongoose";

export interface IQuiz extends Document {
  question: string;
  ans: string;
  options: string[];
  category: string;
}

export const quizSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },

    ans: {
      type: String,
      required: true,
    },

    options: [{ type: String }],

    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = models.Quiz || model("Quiz", quizSchema);

export default Quiz;
