import Image from "next/image";

const OurMission = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-center md:text-5xl mb-10 md:mb-16">
        Our Mission
      </h2>

      <div className="flex flex-col gap-10 border-2 border-gray-700 p-8 rounded-[3rem] md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:items-start md:gap-6">
            <Image
              src="/assets/img/database.png"
              alt="line"
              width={65}
              height={65}
            />
            <div className="text-center md:text-left space-y-4">
              <h3 className="font-semibold text-xl md:text-2xl">
                Driving DeFi Innovation
              </h3>

              <p className="text-center md:text-left text-sm md:text-lg font-semibold text-gray-400">
                Leading the charge in decentralized finance, innovating for a
                brighter future.
              </p>
            </div>
          </div>

          <Image
            src="/assets/img/Gradient-Line.png"
            alt="line"
            width={600}
            height={600}
            className="mt-6"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:items-start md:gap-6">
            <Image
              src="/assets/img/database.png"
              alt="line"
              width={65}
              height={65}
            />
            <div className="text-center md:text-left space-y-4">
              <h3 className="font-semibold text-xl md:text-2xl">
                Driving DeFi Innovation
              </h3>

              <p className="text-center md:text-left text-sm md:text-lg font-semibold text-gray-400">
                Leading the charge in decentralized finance, innovating for a
                brighter future.
              </p>
            </div>
          </div>

          <Image
            src="/assets/img/Gradient-Line.png"
            alt="line"
            width={600}
            height={600}
            className="mt-6"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:items-start md:gap-6">
            <Image
              src="/assets/img/database.png"
              alt="line"
              width={65}
              height={65}
            />
            <div className="text-center md:text-left space-y-4">
              <h3 className="font-semibold text-xl md:text-2xl">
                Driving DeFi Innovation
              </h3>

              <p className="text-center md:text-left text-sm md:text-lg font-semibold text-gray-400">
                Leading the charge in decentralized finance, innovating for a
                brighter future.
              </p>
            </div>
          </div>

          <Image
            src="/assets/img/Gradient-Line.png"
            alt="line"
            width={600}
            height={600}
            className="mt-6"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:items-start md:gap-6">
            <Image
              src="/assets/img/database.png"
              alt="line"
              width={65}
              height={65}
            />
            <div className="text-center md:text-left space-y-4">
              <h3 className="font-semibold text-xl md:text-2xl">
                Driving DeFi Innovation
              </h3>

              <p className="text-center md:text-left text-sm md:text-lg font-semibold text-gray-400">
                Leading the charge in decentralized finance, innovating for a
                brighter future.
              </p>
            </div>
          </div>

          <Image
            src="/assets/img/Gradient-Line.png"
            alt="line"
            width={600}
            height={600}
            className="mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
