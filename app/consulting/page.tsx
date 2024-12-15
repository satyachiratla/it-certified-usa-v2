import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function Consulting() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify">
        <h2 className="text-cyan-300 text-3xl font-bold mb-8">Consulting</h2>
        <p className="text-cyan-200 text-xl mb-5">
          Our <strong>Consulting</strong> services are designed to empower
          businesses with strategic insights and tailored technology solutions.
          IT Certified USA Inc brings deep industry knowledge and experience to
          help you navigate complex challenges and make informed decisions. Key
          aspects of our consulting services include:
        </p>
        <ul className="text-cyan-100 space-y-4 mb-8">
          <li>
            <span className="text-lg">IT Strategy Development: </span>
            <span className="text-white">
              Aligning your technology investments with business goals to
              achieve maximum ROI.
            </span>
          </li>
          <li>
            <span className="text-lg">Process Optimization: </span>
            <span className="text-white">
              Analyzing and improving current workflows for increased efficiency
              and reduced costs.
            </span>
          </li>
          <li>
            <span className="text-lg">Digital Transformation: </span>
            <span className="text-white">
              Guiding companies through the adoption of innovative technologies
              that enhance competitiveness.
            </span>
          </li>
          <li>
            <span className="text-lg">Project Management: </span>
            <span className="text-white">
              Ensuring timely and budget-friendly completion of tech projects
              with a focus on quality outcomes.
            </span>
          </li>
          <li>
            <span className="text-lg">Risk Management and Compliance: </span>
            <span className="text-white">
              Advising on risk mitigation strategies and compliance with
              industry regulations.
            </span>
          </li>
          <li>
            <span className="text-lg">H1-B Sponsorship: </span>
            <span className="text-white">
              Assisting businesses in navigating the H1-B visa process to hire
              qualified international talent, ensuring compliance with
              immigration laws while filling critical roles in your workforce.
            </span>
          </li>
        </ul>
        <p className="text-xl text-cyan-200">
          Our consultants work closely with your team to provide hands-on
          support and actionable recommendations, facilitating a seamless
          transition from planning to execution.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Quick Enquiry" />
      </div>
    </section>
  );
}
