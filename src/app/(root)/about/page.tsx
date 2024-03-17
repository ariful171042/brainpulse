import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import HeorSection from "./_components/HeorSection";
import AboutUsSection from "./_components/AboutUsSection";
import OurValueSection from "./_components/OurValueSection";
import OurVision from "./_components/OurVision";
import OurMission from "./_components/OurMission";

const About = () => {
  return (
    <main className="wrapper md:w-[72rem] text-gray-200 space-y-20 md:space-y-32">
      <HeorSection />

      <AboutUsSection />

      <OurValueSection />

      <OurVision />

      <OurMission />

      <section>
        <div className="flex flex-col items-center gap-6  duration-300 text-center">
          <h2 className="text-xl font-semibold md:text-3xl">
            Ready to Start Quizzing? Lets Dive In!
          </h2>
          <p className="text-sm md:text-lg">
            Embark on a journey of discovery and knowledge. Start quizzing now
            and challenge your mind!
          </p>
          <div>
            <Button variant="secondary">
              <Link href="/quiz">LETS START</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
