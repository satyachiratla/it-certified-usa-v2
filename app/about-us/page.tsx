import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function AboutUs() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify text-white space-y-8">
        <p>
          IT Certified USA is one of the best IT consulting firm specialized in
          Application development, Quality Testing, IT Courses Training,
          staffing and recruitment services. With wide range of experience, we
          are confident in our ability to help our customers grow and improve
          their businesses. More than likely, regardless of the nature and scope
          of the problem, our dedicated team of professionals can help you to
          achieve a cost effective business solution.
        </p>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Top 4 reasons why customers choose us as their software company
          </h2>
          <ul className="space-y-2">
            <li>☑️ Experience in large size projects</li>
            <li>☑️ The best brains work for you</li>
            <li>☑️ Shorter project time and cost optimization</li>
            <li>☑️ Project Rescue Service</li>
          </ul>
        </div>
        <p>
          HCL Global Systems as a leading consulting, business solution and
          systems integration firm delivering solutions that benefit our clients
          by applying our Knowledge and experience and create a curriculum that
          fits industry standards with a unique blend of services
        </p>
        <p>
          HCL Global Systems provides solutions to various industries including
          Healthcare, Manufacturing, Insurance, Engineering, Financial services,
          Banking, Consumer retail, Telecommunications and Aerospace. Our most
          strong domain is Healthcare. HCL Global Systems is a professional
          consulting firm specializing in creative solutions for healthcare
          clients. Our industry experience and domain knowledge has enabled us
          to provide innovative solutions to our customers.
        </p>
        <p>
          HCL Global Systems is promoted by entrepreneurs and Technocrats with
          proven track record in IT industry. Our expertise extends across a
          range of technologies encompassing cutting edge technologies like
          E-commerce, ERP, CRM, Data Warehousing, Web and MS technologies. We
          always recruit outstanding consultants with a strong technical and
          functional knowledge in their respective areas of expertise.
        </p>
        <p>
          Our Technical teams at HCL Global Systems obtain interesting jobs
          dealing with top-notch tools and up-to-date technologies, competitive
          salary and benefits, much room for personal and career advancement.
        </p>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Value through focus
          </h2>
          <p>
            All we do is help clients realize value from their software. We work
            with clients to address every type of software issue, including
            planning, sourcing, collaboration, execution, analytics and data
            management.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            First-hand, real-world experience
          </h2>
          <p>
            Our staff isn’t made up of just computer programmers or career
            consultants. Many of us came to HCL Global Systems with years of
            experience in healthcare, manufacturing, supply chain management and
            procurement management. We have first-hand experience in dealing
            with the issues our clients face.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Focus on business results
          </h2>
          <p>
            With a full range of services across the spectrum – strategy and
            process consulting, systems implementation, systems management and
            outsourced business services – we know that your success doesn’t
            come just from technical implementations, no matter how
            sophisticated. Count on HCL Global Systems to focus on your business
            goals.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Rapid time to value
          </h2>
          <p>
            Software services is all we do, and as such our engagement delivery
            models are tuned to software development processes and systems. We
            also bring strong project and program management, combined with
            proprietary software frameworks and service solutions. When you
            engage HCL Global Systems, you can be confident of realizing
            business value far faster.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Full accountability
          </h2>
          <p>
            We believe in putting our money where our mouth is. We don’t bill by
            the hour, so you don’t have to worry about the clock ticking away.
            Our engagements are structured on a fixed fee/fixed time basis or
            when appropriate, are tied to generating business results.
          </p>
        </div>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
