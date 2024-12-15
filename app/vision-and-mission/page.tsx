import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function VisionAndMission() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify text-white space-y-8">
        <div className="space-y-2">
          <h2 className="text-cyan-500 text-xl font-semibold">
            VISION STATEMENT
          </h2>
          <p>
            Our Vision is to be a global leader in providing the highest level
            of IT solutions and services. We strive to exceed our clients
            expectations and create a workplace in which all employees thrive in
            a collaborative environment that celebrates excellence
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-cyan-500 text-xl font-semibold">
            MISSION STATEMENT
          </h2>
          <ul className="space-y-2">
            <li>
              ☑️ Conduct our business according to the highest standards of
              honesty and integrity. Provide a level of service and support that
              allows our customers to confidently view us as their preferred
              solutions provider
            </li>
            <li>
              ☑️ Create a work environment that recognizes the expertise,
              contributions, and teamwork of our valued employees
            </li>
            <li>
              ☑️ To provide innovative, professional and personalized services
              to clients, associates and employees.
            </li>
            <li>
              ☑️ We shall be sensitive to the needs of individuals forming a
              subject of our intervention.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
