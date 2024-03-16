import Image from "next/image";

const OurVision = () => {
  return (
    <section>
      <div className="flex justify-center items-center gap-24 -mt-16">
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/assets/img/glass.png"
            alt="glass"
            width={600}
            height={600}
          />
        </div>

        <div className="md:w-[50%]">
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-2xl font-bold md:text-5xl">Our Vision</h2>
            <div className="space-y-10 text-[16px] md:text-[20px]">
              <p>
                Cras cras lorem sodales vitae posuere purus. Velit commodo
                mauris a a elementum aliquet sed. Non eu vel eleifend et massa
                orci cursus. Sit amet pellentesque.
              </p>
              <p>
                Felis nulla quis elit tellus. Turpis morbi venenatis pretium
                facilisi consequat augue et semper. Fermentum purus feugiat
                fames tortor maecenas pretium.
              </p>
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

          <div className="flex gap-8 justify-center items-center md:justify-start mt-8">
            <div className="w-20 h-20 overflow-hidden rounded-full">
              <Image
                src={
                  "https://images.pexels.com/photos/20433278/pexels-photo-20433278/free-photo-of-indian-blue-jay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                width={100}
                height={100}
                alt="pic"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xl md:text-2xl">Sami Khan</h3>
              <p className="text-xs font-semibold tracking-wider text-gray-400 md:text-sm">
                Chief Executive Officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
