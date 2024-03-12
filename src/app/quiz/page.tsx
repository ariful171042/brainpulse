"use client";
import Button from "@/components/common/Button";
import { getAllQuests } from "@/lib/actions/quiz.action";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Question {
  _id: string;
  question: string;
  ans: string;
  options: string[];
  category: string;
}

// const data: Question[] = [
//   {
//     id: 1,
//     question: "what is present tense",
//     ans: "I am going to cox",
//     rightAns: [
//       "I am going to cox",
//       "I had went to cox",
//       "I will going to cox",
//       "I have going to cox",
//     ],
//   },
//   {
//     id: 2,
//     question: "what is the past tense",
//     ans: "I had going to cox",
//     rightAns: [
//       "I had going to cox",
//       "I had going to cox",
//       "I will going to Dhaka",
//       "I have a Car",
//     ],
//   },
// ];

const TenseCheck: React.FC = () => {
  const [data, setQuiz] = useState<Question[]>([
    {
      _id: "",
      question: "",
      ans: "",
      options: [""],
      category: "",
    },
  ]);
  const getQuiz = async () => {
    const quiz = await getAllQuests();
    setQuiz(quiz);
  };

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [backgrounds, setBackgrounds] = useState<string[]>(
    Array(data[0].options.length).fill("bg-pr/40")
  );

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setBackgrounds(Array(data[nextIndex].options.length).fill("bg-pr/40"));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setBackgrounds(Array(data[prevIndex].options.length).fill("bg-pr/40"));
    }
  };

  const checkAns = (ans: string, right: string, index: number) => {
    const newBackgrounds = [...backgrounds];
    if (ans === right) {
      newBackgrounds[index] = "bg-green-500";
    } else {
      newBackgrounds[index] = "bg-red-500";
    }
    setBackgrounds(newBackgrounds);
  };

  useEffect(() => {
    getQuiz();
  }, [data]);

  return (
    <>
      {data && (
        <>
          <div className="relative min-h-screen w-full bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] flex justify-center"></div>

            <section className="absolute top-1/2 md:top-1/3 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]">
              <div className="">
                <div className="" key={data[currentIndex]._id}>
                  <div className="border bg-pr/40 border-se rounded-lg py-5 px-10 ">
                    <div className=""></div>
                    <h3 className="text-2xl text-white/80">
                      {data[currentIndex].question}
                    </h3>
                  </div>
                  <div className="mt-5 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {Object.entries(data[currentIndex].options).map(
                        ([key, value], index) => (
                          <div
                            key={key}
                            onClick={() =>
                              checkAns(data[currentIndex].ans, value, index)
                            }
                            className={`border ${backgrounds[index]} border-se rounded-lg py-5 px-5 flex gap-3 items-center`}
                          >
                            <div className="w-[15px] h-[12px] border"></div>
                            <h3 className="text-xl text-white/80">{value}</h3>
                          </div>
                        )
                      )}
                    </div>
                    <div className="mt-3 w-full flex justify-between ">
                      <Button variant={"secondary"} onClick={handlePrev}>
                        Prev
                      </Button>
                      <Button variant={"primary"} onClick={handleNext}>
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default TenseCheck;
