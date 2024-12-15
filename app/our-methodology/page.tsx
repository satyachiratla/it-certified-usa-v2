import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function OurMethodology() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify text-white space-y-8">
        <p>
          IT Certified USA has a well-defined model for its outsourced project
          development process using a combination of onsite, offsite and
          offshore processes. This combination offers high quality,
          cost-effective service to clients who also benefit from the
          significantly lower costs of offshore services combined with local
          project management.
        </p>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Typically, the outsourced development process consists of the
            following phases, which could be scaled up or down depending on the
            size of the project.
          </h2>
          <ul className="space-y-2">
            <li>☑️ Feasibility Analysis and Project Agreement</li>
            <li>☑️ Planning</li>
            <li>☑️ Analysis</li>
            <li>☑️ Technical Design</li>
            <li>☑️ Set-up Offshore Environment Build</li>
            <li>☑️ Unit Testing</li>
            <li>☑️ System Testing</li>
            <li>☑️ Offshore Acceptance</li>
            <li>☑️ Acceptance Testing</li>
            <li>☑️ Client Acceptance</li>
            <li>☑️ Ongoing Support</li>
          </ul>
          <p>
            IT Certified USA outsourcing centers are located in Michigan and
            Florida with the latest computing resources and data communication
            facilities.
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
