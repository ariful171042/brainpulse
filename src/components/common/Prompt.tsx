import { SignedIn, SignedOut } from "@clerk/nextjs";
import Button from "./Button";
import GradientTitle from "./GradientTitle";
import Link from "next/link";

const Prompt = () => {
  return (
    <div className="wrapper bg-promt w-full h-full object-fill rounded-xl py-24 bg-repeat bg-cover bg-w-full">
      <div className="flex flex-col gap-6 justify-center items-center">
        <div>
          <GradientTitle title="Get Ready To Gain Knowledge" />
        </div>
        <div>
          <SignedIn>
            <Button variant={"primary"}>
              <Link href="/quiz">Get Started</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <Button variant={"primary"}>
              <Link href="/sign-in">SignUp</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
