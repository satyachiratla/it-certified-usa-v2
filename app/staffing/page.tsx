import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function Staffing() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify">
        <h2 className="text-cyan-300 text-3xl font-bold mb-8">Staffing</h2>
        <p className="text-cyan-200 text-xl mb-5">
          IT Certified USA Inc provides <strong>Staffing</strong> solutions to
          bridge the talent gap in today’s competitive landscape. We supply
          highly qualified IT professionals that match your project’s specific
          requirements and your company’s culture. Our staffing services
          include:
        </p>
        <ul className="text-cyan-100 space-y-4 mb-8">
          <li>
            <span className="text-lg">Temporary Staffing: </span>
            <span className="text-white">
              Meeting short-term project needs with specialized talent.
            </span>
          </li>
          <li>
            <span className="text-lg">Permanent Staffing: </span>
            <span className="text-white">
              Helping you find full-time employees who align with your long-term
              goals.
            </span>
          </li>
          <li>
            <span className="text-lg">Contract-to-Hire: </span>
            <span className="text-white">
              Allowing you to evaluate potential candidates on a temporary basis
              before committing to a permanent role.
            </span>
          </li>
          <li>
            <span className="text-lg">Remote Staffing: </span>
            <span className="text-white">
              Providing skilled professionals who can work effectively from any
              location.
            </span>
          </li>
        </ul>
        <p className="text-xl text-cyan-200">
          Our rigorous vetting process ensures that every candidate we place has
          the technical expertise, problem-solving skills, and interpersonal
          qualities needed to succeed. We take pride in offering staffing
          solutions that are both cost-effective and scalable to meet evolving
          business needs.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
