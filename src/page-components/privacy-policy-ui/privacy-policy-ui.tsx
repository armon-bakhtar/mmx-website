import { CommonTypes } from '@/shared/types/common';
import { Container } from '@/shared/ui/container/container';
import React, { FC } from 'react';
import { useClasses } from './lib/use-classes';

export type PrivacyPolicyProps = CommonTypes;

const PrivacyPolicyUI: FC<PrivacyPolicyProps> = ({ className }) => {
  const { cnRoot, cnContainer, cnPart, cnTitle, cnPartTitle, cnText } =
    useClasses({ className });

  return (
    <section className={cnRoot}>
      <Container className={cnContainer}>
        <div className={cnPart}>
          <h2 className={cnTitle}>PRIVACY POLICY</h2>
          <h3 className={cnPartTitle}>Last updated June 27, 2023</h3>
          <p className={cnText}>
            This privacy notice for Momentum Max LLC (doing business as Momentum
            Max) ("Momentum Max," "we," "us," or "our"), describes how and why
            we might collect, store, use, and/or share ("process") your
            information when you use our services ("Services"), such as when
            you: Visit our website at https://momentummax.co, or any website of
            ours that links to this privacy notice Engage with us in other
            related ways, including any sales, marketing, or events Questions or
            concerns? Reading this privacy notice will help you understand your
            privacy rights and choices. If you do not agree with our policies
            and practices, please do not use our Services. If you still have any
            questions or concerns, please contact us at hello@momentummax.co.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>SUMMARY OF KEY POINTS</h3>
          <p className={cnText}>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our table of contents
            below to find the section you are looking for.
          </p>
          <p className={cnText}>
            What personal information do we process? When you visit, use, or
            navigate our Services, we may process personal information depending
            on how you interact with Momentum Max and the Services, the choices
            you make, and the products and features you use. Learn more about
            personal information you disclose to us.
          </p>
          <p className={cnText}>
            Do we process any sensitive personal information? We do not process
            sensitive personal information.
          </p>
          <p className={cnText}>
            Do we receive any information from third parties? We do not receive
            any information from third parties.
          </p>
          <p className={cnText}>
            How do we process your information? We process your information to
            provide, improve, and administer our Services, communicate with you,
            for security and fraud prevention, and to comply with law. We may
            also process your information for other purposes with your consent.
            We process your information only when we have a valid legal reason
            to do so. Learn more about how we process your information.
          </p>
          <p className={cnText}>
            In what situations and with which types of parties do we share
            personal information? We may share information in specific
            situations and with specific categories of third parties. Learn more
            about when and with whom we share your personal information.
          </p>
          <p className={cnText}>
            How do we keep your information safe? We have organizational and
            technical processes and procedures in place to protect your personal
            information. However, no electronic transmission over the internet
            or information storage technology can be guaranteed to be 100%
            secure, so we cannot promise or guarantee that hackers,
            cybercriminals, or other unauthorized third parties will not be able
            to defeat our security and improperly collect, access, steal, or
            modify your information. Learn more about how we keep your
            information safe.
          </p>
          <p className={cnText}>
            What are your rights? Depending on where you are located
            geographically, the applicable privacy law may mean you have certain
            rights regarding your personal information. Learn more about your
            privacy rights.
          </p>
          <p className={cnText}>
            How do you exercise your rights? The easiest way to exercise your
            rights is by submitting a data subject access request, or by
            contacting us. We will consider and act upon any request in
            accordance with applicable data protection laws.
          </p>
          <p className={cnText}>
            Want to learn more about what Momentum Max does with any information
            we collect? Review the privacy notice in full.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>TABLE OF CONTENTS</h3>
          <p className={cnText}>1. WHAT INFORMATION DO WE COLLECT?</p>
          <p className={cnText}>2. HOW DO WE PROCESS YOUR INFORMATION?</p>
          <p className={cnText}>
            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
            INFORMATION?
          </p>
          <p className={cnText}>
            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </p>
          <p className={cnText}>
            5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </p>
          <p className={cnText}>6. HOW LONG DO WE KEEP YOUR INFORMATION?</p>
          <p className={cnText}>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>
          <p className={cnText}>8. DO WE COLLECT INFORMATION FROM MINORS?</p>
          <p className={cnText}>9. WHAT ARE YOUR PRIVACY RIGHTS?</p>
          <p className={cnText}>10. CONTROLS FOR DO-NOT-TRACK FEATURES</p>
          <p className={cnText}>
            11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </p>
          <p className={cnText}>12. DO WE MAKE UPDATES TO THIS NOTICE?</p>
          <p className={cnText}>
            13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </p>
          <p className={cnText}>
            14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>1. WHAT INFORMATION DO WE COLLECT?</h3>
          <p className={cnText}>Personal information you disclose to us</p>
          <p className={cnText}>
            In Short: We collect personal information that you provide to us.
          </p>
          <p className={cnText}>
            We collect personal information that you voluntarily provide to us
            when you express an interest in obtaining information about us or
            our products and Services, when you participate in activities on the
            Services, or otherwise when you contact us.
          </p>
          <p className={cnText}>
            Personal Information Provided by You. The personal information that
            we collect depends on the context of your interactions with us and
            the Services, the choices you make, and the products and features
            you use. The personal information we collect may include the
            following: names email addresses
          </p>
          <p className={cnText}>
            Sensitive Information. We do not process sensitive information.
          </p>
          <p className={cnText}>
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>
          <p className={cnText}>Information automatically collected</p>
          <p className={cnText}>
            In Short: Some information — such as your Internet Protocol (IP)
            address and/or browser and device characteristics — is collected
            automatically when you visit our Services.
          </p>
          <p className={cnText}>
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </p>
          <p className={cnText}>
            Like many businesses, we also collect information through cookies
            and similar technologies. You can find out more about this in our
            Cookie Notice: https://momentummax.co/cookies.
          </p>
          <p className={cnText}>
            The information we collect includes: <br />
            Device Data. We collect device data such as information about your
            computer, phone, tablet, or other device you use to access the
            Services. Depending on the device used, this device data may include
            information such as your IP address (or proxy server), device and
            application identification numbers, location, browser type, hardware
            model, Internet service provider and/or mobile carrier, operating
            system, and system configuration information. Location Data. We
            collect location data such as information about your device's
            location, which can be either precise or imprecise. How much
            information we collect depends on the type and settings of the
            device you use to access the Services. For example, we may use GPS
            and other technologies to collect geolocation data that tells us
            your current location (based on your IP address). You can opt out of
            allowing us to collect this information either by refusing access to
            the information or by disabling your Location setting on your
            device. However, if you choose to opt out, you may not be able to
            use certain aspects of the Services.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h3>
          <p className={cnText}>
            In Short: We process your information to provide, improve, and
            administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
          </p>
          <p className={cnText}>
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </p>
          <p className={cnText}>
            To request feedback. We may process your information when necessary
            to request feedback and to contact you about your use of our
            Services.
          </p>
          <p className={cnText}>
            To send you marketing and promotional communications. We may process
            the personal information you send to us for our marketing purposes,
            if this is in accordance with your marketing preferences. You can
            opt out of our marketing emails at any time. For more information,
            see "WHAT ARE YOUR PRIVACY RIGHTS?" below.
          </p>
          <p className={cnText}>
            To save or protect an individual's vital interest. We may process
            your information when necessary to save or protect an individual’s
            vital interest, such as to prevent harm.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
          </h3>
          <p className={cnText}>
            In Short: We only process your personal information when we believe
            it is necessary and we have a valid legal reason (i.e., legal basis)
            to do so under applicable law, like with your consent, to comply
            with laws, to provide you with services to enter into or fulfill our
            contractual obligations, to protect your rights, or to fulfill our
            legitimate business interests.
          </p>
          <p className={cnText}>
            If you are located in the EU or UK, this section applies to you.
          </p>
          <p className={cnText}>
            The General Data Protection Regulation (GDPR) and UK GDPR require us
            to explain the valid legal bases we rely on in order to process your
            personal information. As such, we may rely on the following legal
            bases to process your personal information:
            <br />
            Consent. We may process your information if you have given us
            permission (i.e., consent) to use your personal information for a
            specific purpose. You can withdraw your consent at any time. Learn
            more about withdrawing your consent.
            <br />
            Legitimate Interests. We may process your information when we
            believe it is reasonably necessary to achieve our legitimate
            business interests and those interests do not outweigh your
            interests and fundamental rights and freedoms. For example, we may
            process your personal information for some of the purposes described
            in order to:
            <br />
            Send users information about special offers and discounts on our
            products and services
            <br />
            Understand how our users use our products and services so we can
            improve user experience
            <br />
            Legal Obligations. We may process your information where we believe
            it is necessary for compliance with our legal obligations, such as
            to cooperate with a law enforcement body or regulatory agency,
            exercise or defend our legal rights, or disclose your information as
            evidence in litigation in which we are involved.
            <br />
            Vital Interests. We may process your information where we believe it
            is necessary to protect your vital interests or the vital interests
            of a third party, such as situations involving potential threats to
            the safety of any person.
          </p>
          <p className={cnText}>
            If you are located in Canada, this section applies to you.
          </p>
          <p className={cnText}>
            We may process your information if you have given us specific
            permission (i.e., express consent) to use your personal information
            for a specific purpose, or in situations where your permission can
            be inferred (i.e., implied consent). You can withdraw your consent
            at any time.
          </p>
          <p className={cnText}>
            In some exceptional cases, we may be legally permitted under
            applicable law to process your information without your consent,
            including, for example:
            <br />
            If collection is clearly in the interests of an individual and
            consent cannot be obtained in a timely way
            <br />
            For investigations and fraud detection and prevention
            <br />
            For business transactions provided certain conditions are met
            <br />
            If it is contained in a witness statement and the collection is
            necessary to assess, process, or settle an insurance claim
            <br />
            For identifying injured, ill, or deceased persons and communicating
            with next of kin
            <br />
            If we have reasonable grounds to believe an individual has been, is,
            or may be victim of financial abuse
            <br />
            If it is reasonable to expect collection and use with consent would
            compromise the availability or the accuracy of the information and
            the collection is reasonable for purposes related to investigating a
            breach of an agreement or a contravention of the laws of Canada or a
            province
            <br />
            If disclosure is required to comply with a subpoena, warrant, court
            order, or rules of the court relating to the production of records
            <br />
            If it was produced by an individual in the course of their
            employment, business, or profession and the collection is consistent
            with the purposes for which the information was produced
            <br />
            If the collection is solely for journalistic, artistic, or literary
            purposes
            <br />
            If the information is publicly available and is specified by the
            regulations
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h3>
          <p className={cnText}>
            In Short: We may share information in specific situations described
            in this section and/or with the following categories of third
            parties.
          </p>
          <p className={cnText}>
            Vendors, Consultants, and Other Third-Party Service Providers. We
            may share your data with third-party vendors, service providers,
            contractors, or agents ("third parties") who perform services for us
            or on our behalf and require access to such information to do that
            work. We have contracts in place with our third parties, which are
            designed to help safeguard your personal information. This means
            that they cannot do anything with your personal information unless
            we have instructed them to do it. They will also not share your
            personal information with any organization apart from us. They also
            commit to protect the data they hold on our behalf and to retain it
            for the period we instruct. The categories of third parties we may
            share personal information with are as follows: Data Analytics
            Services Sales & Marketing Tools
          </p>
          <p className={cnText}>
            We also may need to share your personal information in the following
            situations:
            <br />
            Business Transfers. We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
            <br />
            Affiliates. We may share your information with our affiliates, in
            which case we will require those affiliates to honor this privacy
            notice. Affiliates include our parent company and any subsidiaries,
            joint venture partners, or other companies that we control or that
            are under common control with us.
            <br />
            Business Partners. We may share your information with our business
            partners to offer you certain products, services, or promotions.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h3>
          <p className={cnText}>
            In Short: We may use cookies and other tracking technologies to
            collect and store your information.
          </p>
          <p className={cnText}>
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Notice:
            https://momentummax.co/cookies.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            6. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h3>
          <p className={cnText}>
            In Short: We keep your information for as long as necessary to
            fulfill the purposes outlined in this privacy notice unless
            otherwise required by law.
          </p>
          <p className={cnText}>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements).
          </p>
          <p className={cnText}>
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            7. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h3>
          <p className={cnText}>
            In Short: We aim to protect your personal information through a
            system of organizational and technical security measures.
          </p>
          <p className={cnText}>
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            8. DO WE COLLECT INFORMATION FROM MINORS?
          </h3>
          <p className={cnText}>
            In Short: We do not knowingly collect data from or market to
            children under 18 years of age.
          </p>
          <p className={cnText}>
            We do not knowingly solicit data from or market to children under 18
            years of age. By using the Services, you represent that you are at
            least 18 or that you are the parent or guardian of such a minor and
            consent to such minor dependent’s use of the Services. If we learn
            that personal information from users less than 18 years of age has
            been collected, we will deactivate the account and take reasonable
            measures to promptly delete such data from our records. If you
            become aware of any data we may have collected from children under
            age 18, please contact us at hello@momentummax.co.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>9. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
          <p className={cnText}>
            In Short: In some regions, such as the European Economic Area (EEA),
            United Kingdom (UK), and Canada, you have rights that allow you
            greater access to and control over your personal information. You
            may review, change, or terminate your account at any time.
          </p>
          <p className={cnText}>
            In some regions (like the EEA, UK, and Canada), you have certain
            rights under applicable data protection laws. These may include the
            right (i) to request access and obtain a copy of your personal
            information, (ii) to request rectification or erasure; (iii) to
            restrict the processing of your personal information; and (iv) if
            applicable, to data portability. In certain circumstances, you may
            also have the right to object to the processing of your personal
            information. You can make such a request by contacting us by using
            the contact details provided in the section "HOW CAN YOU CONTACT US
            ABOUT THIS NOTICE?" below.
          </p>
          <p className={cnText}>
            We will consider and act upon any request in accordance with
            applicable data protection laws.
          </p>
          <p className={cnText}>
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your Member State data protection authority or
            UK data protection authority.
          </p>
          <p className={cnText}>
            If you are located in Switzerland, you may contact the Federal Data
            Protection and Information Commissioner.
          </p>
          <p className={cnText}>
            Withdrawing your consent: If we are relying on your consent to
            process your personal information, which may be express and/or
            implied consent depending on the applicable law, you have the right
            to withdraw your consent at any time. You can withdraw your consent
            at any time by contacting us by using the contact details provided
            in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
          </p>
          <p className={cnText}>
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </p>
          <p className={cnText}>
            Opting out of marketing and promotional communications: You can
            unsubscribe from our marketing and promotional communications at any
            time by clicking on the unsubscribe link in the emails that we send,
            replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send,
            or by contacting us using the details provided in the section "HOW
            CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be
            removed from the marketing lists. However, we may still communicate
            with you — for example, to send you service-related messages that
            are necessary for the administration and use of your account, to
            respond to service requests, or for other non-marketing purposes.
          </p>
          <p className={cnText}>
            Cookies and similar technologies: Most Web browsers are set to
            accept cookies by default. If you prefer, you can usually choose to
            set your browser to remove cookies and to reject cookies. If you
            choose to remove cookies or reject cookies, this could affect
            certain features or services of our Services. You may also opt out
            of interest-based advertising by advertisers on our Services. For
            further information, please see our Cookie Notice:
            https://momentummax.co/cookies.
          </p>
          <p className={cnText}>
            If you have questions or comments about your privacy rights, you may
            email us at hello@momentummax.co.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            10. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h3>
          <p className={cnText}>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ("DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </h3>
          <p className={cnText}>
            In Short: Yes, if you are a resident of California, you are granted
            specific rights regarding access to your personal information.
          </p>
          <p className={cnText}>
            California Civil Code Section 1798.83, also known as the "Shine The
            Light" law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us using the contact
            information provided below.
          </p>
          <p className={cnText}>
            If you are under 18 years of age, reside in California, and have a
            registered account with Services, you have the right to request
            removal of unwanted data that you publicly post on the Services. To
            request removal of such data, please contact us using the contact
            information provided below and include the email address associated
            with your account and a statement that you reside in California. We
            will make sure the data is not publicly displayed on the Services,
            but please be aware that the data may not be completely or
            comprehensively removed from all our systems (e.g., backups, etc.).
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            12. DO WE MAKE UPDATES TO THIS NOTICE?
          </h3>
          <p className={cnText}>
            In Short: Yes, we will update this notice as necessary to stay
            compliant with relevant laws.
          </p>
          <p className={cnText}>
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated "Revised" date and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy notice frequently to be informed of how we are protecting
            your information.
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}></h3>
          <p className={cnText}>
            If you have questions or comments about this notice, you may email
            us at hello@momentummax.co or contact us by post at:
          </p>
          <p className={cnText}>
            Momentum Max LLC
            <br />
            7901 4th St N, St. Petersburg, FL 33702, USA
            <br />
            St. Petersburg, FL 33702
            <br />
            United States
            <br />
          </p>
        </div>

        <div className={cnPart}>
          <h3 className={cnPartTitle}>
            14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h3>
          <p className={cnText}>
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            change that information, or delete it. To request to review, update,
            or delete your personal information, please fill out and submit a
            data subject access request.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicyUI;
