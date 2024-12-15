import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function Services() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify text-white space-y-8">
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Providing Innovative Mission Critical Solutions
          </h2>
          <p>
            As a premier provider of IT solutions to clients worldwide since
            2005, HCL Global Systems has significant experience in handling
            outsourced projects from clients across several industry segments.
            HCL Global Systems offers its clients a broad spectrum of services
            using its offsite and offshore development centers.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            HCL Global System’s outsourcing services are classified into the
            following areas:
          </h2>
          <ul className="space-y-2">
            <li>☑️ Application Development</li>
            <li>☑️ System Software</li>
            <li>☑️ Application Migration and Re-Engineering</li>
            <li>☑️ Application Maintenance</li>
            <li>☑️ Application Renovation</li>
            <li>☑️ Dedicated Development Lab</li>
            <li>☑️ Real Estate Development and Foreclosure</li>
            <li>☑️ Angel Investing, Holding, and Parenting Company</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Application Development
          </h2>
          <p>
            Supporting client organizations to develop new applications,
            features, extensions, improved versions or enhancement, interfaces
            and upgrades for their existing business applications. HCL Global
            Systems gets involved from the conceptualization stage of the
            solution to the specification, design, architecture, implementation,
            testing and deployment.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            System Software
          </h2>
          <p>
            Providing clients with system software services such as new
            technology development, software product development,
            re-engineering, and testing and release management.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Application Migration and Re-Engineering
          </h2>
          <p>
            HCL Global Systems has substantial experience in re-engineering and
            migration services and has customized migration methodologies to
            suit specific client requirements – be it new emerging technologies
            or business imperatives.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Application Maintenance
          </h2>
          <p>
            Offering clients a variety of maintenance models, using a
            combination of onsite and offshore services. HCL Global Systems team
            blends seamlessly into the client’s business process to provide
            quality software maintenance services with a capability to provide
            24×7 maintenance from its offshore development center.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Application Renovation
          </h2>
          <p>
            HCL Global Systems uses its well-defined onsite/offshore methodology
            to carry out modifications to applications to ensure compliance with
            changeover requirements that could have an effect across all current
            development and operational systems. Existing applications could
            also be web enabled.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Dedicated Development Lab
          </h2>
          <p>
            This concept is offered to clients who require a dedicated
            development or research lab at competitive rates and low overheads,
            but who do not want to set up a separate division within their own
            company for this. The Dedicated Lab at HCL Global Systems offshore
            development center would be a virtual extension of the client’s own
            facilities and would be dedicated solely for the development
            activities and related services of that client.
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
