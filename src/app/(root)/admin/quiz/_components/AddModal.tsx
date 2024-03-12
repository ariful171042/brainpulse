import Button from "@/components/common/Button";
import { createQuiz } from "@/lib/actions/quiz.action";
// import { IQuize } from "@/lib/database/models/quizModel";
import { log } from "console";
import React, { useState } from "react";

interface IOption {
  // Update to IOption
  value: string;
}

const AddModal: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [ans, setAns] = useState<string>("");
  const [category, setCategory] = useState<string>("tense");
  const [options, setOptions] = useState<IOption[]>([
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ]);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = { value };
    setOptions(newOptions);
  };

  const handleAddButtonClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const quiz = {
      question: question,
      ans: ans,
      options: options.map((option) => option.value),
      category: category,
    };

    try {
      const quizs = await createQuiz(quiz);

      console.log(quizs);
    } catch (error) {
      console.log(error);
    }

    console.log(quiz);
  };

  return (
    <div className="fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-se p-10 rounded-lg w-[60%]">
      <h3 className="text-xl">Add Quiz</h3>

      <div className="pt-3">
        <form action="">
          <div className="flex flex-col gap-2.5">
            <div className=" flex gap-5 items-center">
              <label
                htmlFor="question"
                className="text-xl font-semibold tracking-wider text-white/80"
              >
                Question
              </label>
              <input
                type="text"
                id="question"
                name="question"
                placeholder="Enter your Question"
                className="w-full bg-transparent outline-none border-b border-vaiolet  py-2 px-5 text-white text-xl"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div className=" flex gap-5 items-center">
              <label
                htmlFor="ans"
                className="text-xl font-semibold tracking-wider text-white/80"
              >
                Ans
              </label>
              <input
                type="text"
                id="ans"
                name="ans"
                placeholder="Enter your Answer"
                className="w-full bg-transparent outline-none border-b border-vaiolet  py-2 px-5 text-white text-xl"
                value={ans}
                onChange={(e) => setAns(e.target.value)}
              />
            </div>
            <div className=" flex gap-5 items-center">
              <label
                htmlFor="category"
                className="text-xl font-semibold tracking-wider text-white/80"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                className="w-full bg-transparent outline-none border-b border-vaiolet  py-2 px-5 text-white text-xl"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="tense">Tense</option>
              </select>
            </div>
            <div className=" flex flex-col gap-1">
              <label
                htmlFor="options"
                className="text-xl pb-2 font-semibold tracking-wider text-white/80"
              >
                Options
              </label>
              <hr className="" />
              <div className="flex flex-col gap-2 pt-2">
                {options.map((option, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    className="bg-transparent outline-none border-b border-vaiolet  p-1 px-5 text-white text-xl"
                    value={option.value}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                ))}
              </div>
            </div>
            <Button onClick={handleAddButtonClick}>Add</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
