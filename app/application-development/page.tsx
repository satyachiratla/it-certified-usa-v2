import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function ApplicationDevelopment() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify">
        <h2 className="text-cyan-300 text-3xl font-bold mb-8">
          Application Development
        </h2>
        <p className="text-cyan-200 text-xl mb-5">
          At IT Certified USA Inc, our <strong>Application Development</strong>{" "}
          services are crafted to meet the unique demands of modern businesses.
          We specialize in building custom applications that are scalable,
          secure, and tailored to streamline operations and improve user
          experiences. Our development process includes:
        </p>
        <ul className="text-cyan-100 space-y-4 mb-8">
          <li>
            <span className="text-lg">Requirement Analysis: </span>
            <span className="text-white">
              Understanding your specific needs to create a blueprint that
              aligns with your business goals.
            </span>
          </li>
          <li>
            <span className="text-lg">Design and Prototyping: </span>
            <span className="text-white">
              Creating intuitive interfaces and functional prototypes to
              visualize the end product.
            </span>
          </li>
          <li>
            <span className="text-lg">Development and Coding: </span>
            <span className="text-white">
              Using cutting-edge technologies and coding practices to build
              robust and efficient applications.
            </span>
          </li>
          <li>
            <span className="text-lg">Quality Assurance: </span>
            <span className="text-white">
              Comprehensive testing to ensure flawless performance and security.
            </span>
          </li>
          <li>
            <span className="text-lg">Deployment and Support: </span>
            <span className="text-white">
              Seamless integration and ongoing maintenance for optimal
              functionality.
            </span>
          </li>
        </ul>
        <p className="text-xl text-cyan-200">
          Our development team is skilled in various programming languages and
          frameworks, enabling us to deliver web, mobile, and enterprise-level
          applications. We prioritize agile methodologies, which allow for
          flexibility and iterative improvements based on client feedback.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Quick Enquiry" />
      </div>
    </section>
  );
}
