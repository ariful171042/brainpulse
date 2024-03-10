import Button from "./Button";
import GradientTitle from "./GradientTitle";

const Prompt = () => {
  return (
    <div className="wrapper bg-promt w-full h-full object-fill rounded-xl py-24 bg-repeat bg-cover bg-w-full">
      <div className="flex flex-col gap-6 justify-center items-center">
        <div>
          <GradientTitle title="Get Ready To Gain Knowledge" />
        </div>
        <div>
          <Button variant={"primary"}>SignUp</Button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
