import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function TechnologySolutions() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify">
        <h2 className="text-cyan-300 text-3xl font-bold mb-8">
          Technology Solutions
        </h2>
        <p className="text-cyan-200 text-xl mb-5">
          In the fast-paced digital era, IT Certified USA Inc’s **Technology
          Solutions** are designed to keep your business at the forefront of
          innovation. We provide: - <strong>Cloud Services</strong>:
          Implementing cloud-based infrastructures for enhanced data
          accessibility and security.
        </p>
        <ul className="text-cyan-100 space-y-4 mb-8">
          <li>
            <span className="text-lg">
              Data Analytics and Business Intelligence:{" "}
            </span>
            <span className="text-white">
              Leveraging data to provide insights that inform decision-making
              and drive growth.
            </span>
          </li>
          <li>
            <span className="text-lg">AI and Machine Learning: </span>
            <span className="text-white">
              Developing intelligent solutions that automate processes and
              enhance customer experiences.
            </span>
          </li>
          <li>
            <span className="text-lg">IoT Integrations: </span>
            <span className="text-white">
              Enabling smart technology to create more connected and efficient
              business operations.
            </span>
          </li>
          <li>
            <span className="text-lg">Cybersecurity Solutions: </span>
            <span className="text-white">
              Protecting your organization with advanced security frameworks and
              threat detection systems.
            </span>
          </li>
        </ul>
        <p className="text-xl text-cyan-200">
          Our team stays ahead of the curve by continually learning and
          integrating the latest technological advancements, ensuring your
          business benefits from state-of-the-art solutions.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
