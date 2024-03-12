import Prompt from "@/components/common/Prompt";
import React from "react";

const Terms = () => {
  return (
    <section className="container mx-auto px-4 md:px-64 text-sm md:text-lg antialiased text-white/90 mt-8 md:mt-16 flex flex-col gap-10 md:gap-28 leading-5">
      <div className="text-center flex flex-col gap-8 text-white">
        <h1 className="text-3xl md:text-6xl font-bold">Terms of Service</h1>
        <p className="text-xl">
          These Terms govern the relationship between you and BrainPlus.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">1. Trems</h2>
          <p>
            By accessing this Website, accessible from brainplus.com, you are
            agreeing to be bound by these Website Terms and Conditions of Use
            and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site. The materials contained in
            this Website are protected by copyright and trademark law.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials on BrainPluss Website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc flex flex-col gap-2 pl-6">
            <li>Modify or copy the materials;</li>
            <li>
              Use the materials for any commercial purpose or for any public
              display;
            </li>
            <li>
              Attempt to reverse engineer any software contained on BrainPluss
              Website;
            </li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials or
            </li>
            <li>
              Transfer the materials to another person or mirror the materials
              on any other server.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">3. Disclaimer</h2>
          <p>
            All the materials on BrainPluss Website are provided as is.
            BrainPlus makes no warranties, may it be expressed or implied,
            therefore negates all other warranties. Furthermore, BrainPlus does
            not make any representations concerning the accuracy or reliability
            of the use of the materials on its Website or otherwise relating to
            such materials or any sites linked to this Website.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">4. Limitations</h2>
          <p>
            BrainPlus or its suppliers will not be held accountable for any
            damages that will arise with the use or inability to use the
            materials on BrainPluss Website, even if BrainPlus or an authorized
            representative of this Website has been notified, orally or written,
            of the possibility of such damage. Some jurisdictions do not allow
            limitations on implied warranties or limitations of liability for
            incidental damages; these limitations may not apply to you.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            5. Revisions and Errata
          </h2>
          <p>
            The materials appearing on BrainPluss Website may include technical,
            typographical, or photographic errors. BrainPlus does not promise
            that any of the materials on this Website are accurate, complete, or
            current. BrainPlus may change the materials contained on its Website
            at any time without notice. BrainPlus does not make any commitment
            to update the materials.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">6. Links</h2>
          <p>
            BrainPlus has not reviewed all of the sites linked to its Website
            and is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by BrainPlus of the
            site. The use of any linked website is at the users own risk.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            7. Site Terms of Use Modifications
          </h2>
          <p>
            BrainPlus has not reviewed all of the sites linked to its Website
            and is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by BrainPlus of the
            site. The use of any linked website is at the users own risk.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">8. Your Privacy</h2>
          <p>Please read our Privacy Policy.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">9. Governing Law</h2>
          <p>
            Any claim related to BrainPluss Website shall be governed by the
            laws of Peater Griffin without regards to its conflict of law
            provisions.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <Prompt />
      </div>
    </section>
  );
};

export default Terms;
