"use client";

import { createQuiz } from "@/lib/actions/quiz.action";
import React from "react";
import AddQuiz from "./_components/AddQuiz";

const AdminQuiz = () => {
  // const createeQuiz = async () => {
  //   try {
  //     const quiz = {
  //       question: "Question",
  //       ans: "ans",
  //       options: ["question1", "question2", "question3", "question4"],
  //       category: "Category",
  //     };
  //     const quizeee = await createQuiz(quiz);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const category = await;

  return (
    <main className="wrapper pt-5">
      <div className="">
        <AddQuiz />
      </div>
    </main>
  );
};

export default AdminQuiz;
