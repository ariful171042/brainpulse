import React from "react";

const HeorSection = () => {
  return (
    <section>
      <div className="bg-about py-[5rem] mt-10 md:py-32 rounded-[2rem] border border-gray-500 text-center  bg-cover bg-w-full space-y-4 md:space-y-8">
        <h1 className="text-3xl font-bold md:text-6xl">About Us</h1>
        <p className="text-sm md:text-lg w-[80%] md:w-[60%] mx-auto">
          BrainPlus is your go-to destination for engaging quizzes that
          challenge your mind and entertain your curiosity.
        </p>
      </div>
    </section>
  );
};

export default HeorSection;
