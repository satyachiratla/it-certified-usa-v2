import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function QualityTesting() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify">
        <h2 className="text-cyan-300 text-3xl font-bold mb-8">
          Quality Testing
        </h2>
        <p className="text-cyan-200 text-xl mb-5">
          Ensuring that your applications and systems perform flawlessly is
          crucial, which is why IT Certified USA Inc offers comprehensive{" "}
          <strong>Quality Testing</strong> services. We prioritize precision and
          reliability to detect potential issues before they impact your users.
          Our testing services include:
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
            <span className="text-lg">Functional Testing: </span>
            <span className="text-white">
              Verifying that each feature operates as expected.
            </span>
          </li>
          <li>
            <span className="text-lg">Performance Testing: </span>
            <span className="text-white">
              Assessing how applications behave under different loads and stress
              conditions.
            </span>
          </li>
          <li>
            <span className="text-lg">Security Testing: </span>
            <span className="text-white">
              Ensuring applications are safeguarded against potential
              vulnerabilities and threats.
            </span>
          </li>
          <li>
            <span className="text-lg">Compatibility Testing: </span>
            <span className="text-white">
              Confirming that software works seamlessly across various devices,
              browsers, and platforms.
            </span>
          </li>
          <li>
            <span className="text-lg">User Acceptance Testing (UAT): </span>
            <span className="text-white">
              Engaging end-users in testing to confirm the final product meets
              their needs and expectations.
            </span>
          </li>
        </ul>
        <p className="text-xl text-cyan-200">
          With a dedicated team of QA specialists, we use both manual and
          automated testing tools to achieve maximum efficiency and accuracy.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
