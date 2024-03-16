import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const AboutUsSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between gap-16">
        <div className="order-1">
          <Image
            src="/assets/img/Mockup-1.png"
            width={500}
            height={500}
            alt="mockup"
          />
        </div>

        <div className="space-y-10 md:w-[50%] md:order-2">
          <div className="space-y-4 md:space-y-8">
            <p className="text-xs md:text-xl tracking-widest font-bold text-gray-400">
              ABOUT US
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Unlock knowledge, ignite curiosity.
            </h2>
            <p className="text-gray-400 md:text-xl font-semibold">
              Empowering minds, inspiring hearts, and connecting souls. welcome
              to our digital sanctuary.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 ">
            <div>
              <div className="flex justify-between py-4 ">
                <p className="text-[1rem] md:text-xl font-semibold">
                  Sign up and dive into quizzes!
                </p>
                <div className=" text-gray-300 text-xs bg-gray-700 flex justify-center items-center rounded-full w-6 hover:bg-gray-400 hover:text-gray-700 duration-200">
                  <Link href="/sign-in">
                    <MdArrowOutward />
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="/assets/img/Gradient-Line.png"
                  alt="line"
                  width={600}
                  height={600}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between py-4 ">
                <p className="text-[1rem] md:text-xl font-semibold">
                  Begin your quiz journey
                </p>
                <div className=" text-gray-300 text-xs bg-gray-700 flex justify-center items-center rounded-full w-6 hover:bg-gray-400 hover:text-gray-700 duration-200">
                  <Link href="/quiz">
                    <MdArrowOutward />
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="/assets/img/Gradient-Line.png"
                  alt="line"
                  width={600}
                  height={600}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between py-4 ">
                <p className="text-[1rem] md:text-xl font-semibold">
                  Connect with us!
                </p>
                <div className=" text-gray-300 text-xs bg-gray-700 flex justify-center items-center rounded-full w-6 hover:bg-gray-400 hover:text-gray-700 duration-200">
                  <Link href="/contact">
                    <MdArrowOutward />
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="/assets/img/Gradient-Line.png"
                  alt="line"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
