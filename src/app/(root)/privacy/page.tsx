import Prompt from "@/components/common/Prompt";
import React from "react";

const Privacy = () => {
  return (
    <section className="container mx-auto px-4 md:px-64 text-sm md:text-lg antialiased text-white/90 mt-8 md:mt-16 flex flex-col gap-10 md:gap-28 leading-5">
      <div className="text-center flex flex-col gap-8 text-white">
        <h1 className="text-3xl md:text-6xl font-bold">Privacy Policy</h1>
        <p className="text-xl">
          These Terms govern the relationship between you and BrainPlus.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p>
            At Brainplus, accessible from brainplus.com, the privacy of our
            visitors is of utmost importance to us. This Privacy Policy document
            outlines the types of information collected and recorded by
            Brainplus and how we utilize it.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            If you have any additional questions or require further information
            about our Privacy Policy, please feel free to contact us.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            This Privacy Policy is applicable only to our online activities and
            is valid for visitors to our website concerning the information they
            share and/or collect on Brainplus. This policy does not extend to
            any information collected offline or through channels other than
            this website.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            By utilizing our website, you consent to our Privacy Policy and
            agree to its terms.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            Information We Collect
          </h2>
          <p>
            The personal information requested and the reasons for its
            collection will be clearly communicated to you at the time we
            request such information.
          </p>
          <p>
            If you reach out to us directly, we may collect additional
            information about you, such as your name, email address, phone
            number, the contents of the message, attachments you may send us,
            and any other information you choose to provide.
          </p>
          <p>
            Upon registration for an account, we may ask for contact information
            including your name, company name, address, email address, and
            telephone number.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            How We Use Your Information
          </h2>
          <ul className="list-disc flex flex-col gap-2 pl-6">
            <li>Provide, operate, and maintain our website.</li>
            <li>Enhance, personalize, and expand our website.</li>
            <li>
              Analyze how you use our website to better understand user
              behavior.
            </li>
            <li>
              Develop new products, services, features, and functionality.
            </li>
            <li>
              Communicate with you directly or through partners, for customer
              service, updates, and marketing purposes.
            </li>
            <li>Send you emails.</li>
            <li>Identify and prevent fraud.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">Log Files</h2>
          <p>
            Brainplus follows standard procedures regarding log files. These
            files log visitors when they access our website. Like many other
            websites, these logs include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamps,
            referring/exit pages, and possibly the number of clicks. None of
            this information is personally identifiable. These logs are used to
            analyze trends, administer the site, track user movements, and
            gather demographic information.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            Advertising Partners Privacy Policies
          </h2>
          <p>
            Please consult the Privacy Policy of each advertising partner of
            Brainplus for more information.
          </p>
          <p>
            Third-party ad servers or networks may use cookies, JavaScript, or
            Web Beacons in their advertisements and links on Brainplus, which
            are sent directly to users browsers. These technologies are used to
            measure the effectiveness of their advertising campaigns and to
            personalize the advertising content you see on various websites.
            Brainplus does not have access to or control over these cookies used
            by third-party advertisers.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            Third-Party Privacy Policies
          </h2>
          <p>
            Brainpluss Privacy Policy does not apply to other advertisers or
            websites. We advise you to consult the respective Privacy Policies
            of these third-party ad servers for more detailed information,
            including their practices and instructions on how to opt-out of
            certain options. You can choose to disable cookies through your
            individual browser settings. For more detailed information about
            cookie management with specific web browsers, please refer to the
            respective browsers website.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            CCPA Privacy Rights
          </h2>
          <p>
            Under the CCPA, California consumers have certain rights, including
            the right to:
          </p>
          <ul className="list-disc flex flex-col gap-2 pl-6">
            <li>
              Request disclosure of the categories and specific pieces of
              personal data collected.
            </li>
            <li>Request deletion of personal data collected.</li>
            <li>Opt-out of the sale of personal data.</li>
          </ul>
          <p>
            If you would like to exercise any of these rights, please contact
            us.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            GDPR Data Protection Rights
          </h2>
          <p>All users are entitled to the following GDPR rights:</p>
          <ul className="list-disc flex flex-col gap-2 pl-6">
            <li>
              Right to access: You have the right to request copies of your
              personal data.
            </li>
            <li>
              Right to rectification: You have the right to request corrections
              of inaccurate or incomplete information.
            </li>
            <li>
              Right to erasure: You have the right to request the deletion of
              your personal data under certain conditions.
            </li>
            <li>
              Right to restrict processing: You have the right to request
              restrictions on the processing of your personal data under certain
              conditions.
            </li>
            <li>
              Right to object to processing: You have the right to object to our
              processing of your personal data under certain conditions.
            </li>
            <li>
              Right to data portability: You have the right to request the
              transfer of your data to another organization or directly to you
              under certain conditions.
            </li>
          </ul>
          <p>If you wish to exercise any of these rights, please contact us.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            Changes to the Privacy Policy
          </h2>
          <p>
            Brainplus may update this Privacy Policy at any time by posting a
            notice on the website or through other appropriate means. We highly
            recommend that visitors review our Privacy Policy periodically. If
            you object to any changes, you should discontinue using our services
            and may request the removal of your personal data, unless applicable
            laws require retention. Unless otherwise stated, the current Privacy
            Policy applies to all personal data processed at the time.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <Prompt />
      </div>
    </section>
  );
};

export default Privacy;
