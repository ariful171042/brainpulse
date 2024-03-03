import Button from "@/components/common/Button";
import Image from "next/image";
import React from "react";

const TenseChek = () => {
  return (
    <>
      <div className="relative min-h-screen w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] flex justify-center"></div>

        <section className="absolute top-1/2 md:top-1/3 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]">
          <div className="">
            <div className="border bg-pr/40 border-se rounded-lg py-5 px-10 ">
              <div className=""></div>
              <h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, assumenda!
              </h3>
            </div>
          </div>
          <div className="mt-5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* card  start */}
              <div className="border border-se rounded-lg py-5 px-5 flex gap-3 items-center">
                <div className="w-[15px] h-[12px] border"></div>
                <h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit, assumenda!
                </h3>
              </div>
              {/* card  end */}

              {/* card  start */}
              <div className="border border-se rounded-lg py-5 px-5 flex gap-3 items-center">
                <div className="w-[15px] h-[12px] border"></div>
                <h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit, assumenda!
                </h3>
              </div>
              {/* card  end */}

              {/* card  start */}
              <div className="border border-se rounded-lg py-5 px-5 flex gap-3 items-center">
                <div className="w-[15px] h-[12px] border"></div>
                <h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit, assumenda!
                </h3>
              </div>
              {/* card  end */}

              {/* card  start */}
              <div className="border border-se rounded-lg py-5 px-5 flex gap-3 items-center">
                <div className="w-[15px] h-[12px] border"></div>
                <h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit, assumenda!
                </h3>
              </div>
              {/* card  end */}
            </div>
            <div className="mt-3 w-full flex justify-between ">
              <Button variant={"secondary"}>Prev</Button>
              <Button variant={"primary"}>Next</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TenseChek;
