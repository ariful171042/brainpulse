"use client";
import Button from "@/components/common/Button";
import React, { useState } from "react";
import AddModal from "./AddModal";
import { getAllQuests } from "@/lib/actions/quiz.action";

const AddQuiz = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full h-full">
      <div className="">
        <div onClick={() => setIsModalOpen(!isModalOpen)}>Add Quiz</div>
      </div>
      {isModalOpen && (
        <>
          <AddModal />
        </>
      )}
    </div>
  );
};

export default AddQuiz;
