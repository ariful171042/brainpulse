import Image from "next/image";
import { TiTick } from "react-icons/ti";

const OurValueSection = () => {
  return (
    <section>
      <div className="flex flex-col justify-center md:flex-row md:gap-20">
        <div className="space-y-10 md:space-y-16 md:w-[50%] mt-10">
          <div className="flex flex-col justify-center items-center md:items-start gap-3">
            <p className="text-xs text-gray-400 font-bold md:text-xl">
              OUR VALUE
            </p>
            <h2 className="text-2xl font-bold md:text-5xl">
              Values in Action for Your Success
            </h2>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-2">
              <div className="flex items-center gap-4 text-lg font-semibold">
                <span className="bg-gray-800 p-2 rounded-full text-sm text-gray-400 ">
                  <TiTick />
                </span>

                <p className="text-[.7rem] md:text-[1.3rem] font-bold">
                  User Empowerment
                </p>
              </div>

              <div className="flex items-center gap-4 text-lg font-semibold">
                <span className="bg-gray-800 p-2 rounded-full text-sm text-gray-400 ">
                  <TiTick />
                </span>

                <p className="text-[.7rem] md:text-[1.4rem] font-bold">
                  Innovation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-12">
              <div className="flex items-center gap-4 text-lg font-semibold">
                <span className="bg-gray-800 p-2 rounded-full text-sm text-gray-400 ">
                  <TiTick />
                </span>

                <p className="text-[.7rem] md:text-[1.4rem] font-bold">
                  Transparency
                </p>
              </div>

              <div className="flex items-center gap-4 text-lg font-semibold">
                <span className="bg-gray-800 p-2 rounded-full text-sm text-gray-400 ">
                  <TiTick />
                </span>

                <p className="text-[.7rem] md:text-[1.4rem] font-bold">
                  Security
                </p>
              </div>

              <div className="flex items-center gap-4 text-lg font-semibold">
                <span className="bg-gray-800 p-2 rounded-full text-sm text-gray-400 ">
                  <TiTick />
                </span>

                <p className="text-[.7rem] md:text-[1.4rem] font-bold">
                  Education
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="flex items-center gap-4 text-lg font-semibold">
                <span className="bg-gray-800 p-2 rounded-full text-sm text-gray-400 ">
                  <TiTick />
                </span>

                <p className="text-[.7rem] md:text-[1.4rem] font-bold">
                  Community-Centric
                </p>
              </div>

              <div className="flex items-center gap-4 text-lg font-semibold">
                <span className="bg-gray-800 p-2 rounded-full text-sm text-gray-400 ">
                  <TiTick />
                </span>

                <p className="text-[.7rem] md:text-[1.4rem] font-bold">
                  Sustainability
                </p>
              </div>
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

        <div className="flex items-center justify-center">
          <Image
            src="/assets/img/glass.png"
            alt="glass"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default OurValueSection;
