import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function MaintenanceSupport() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify">
        <h2 className="text-cyan-300 text-3xl font-bold mb-8">
          Maintenance Support
        </h2>
        <p className="text-cyan-200 text-xl mb-5">
          Ensuring the long-term success of any application requires consistent
          and reliable <strong>Maintenance Support</strong>. IT Certified USA
          Inc offers tailored maintenance services that help prevent disruptions
          and extend the life cycle of your software solutions. Our maintenance
          services include:
        </p>
        <ul className="text-cyan-100 space-y-4 mb-8">
          <li>
            <span className="text-lg">Regular Updates and Upgrades: </span>
            <span className="text-white">
              Keeping software updated with the latest security patches and
              feature enhancements.
            </span>
          </li>
          <li>
            <span className="text-lg">Bug Fixes and Troubleshooting: </span>
            <span className="text-white">
              Quick resolution of any issues to maintain peak performance.
            </span>
          </li>
          <li>
            <span className="text-lg">Performance Optimization: </span>
            <span className="text-white">
              Regular performance assessments to ensure applications run
              efficiently.
            </span>
          </li>
          <li>
            <span className="text-lg">User Support and Training: </span>
            <span className="text-white">
              Providing end-user training and ongoing support to enhance user
              adoption and satisfaction.
            </span>
          </li>
          <li>
            <span className="text-lg">Proactive Monitoring: </span>
            <span className="text-white">
              Using monitoring tools to identify potential issues before they
              impact business operations.
            </span>
          </li>
          <li>
            <span className="text-lg">BPO Operations: </span>
            <span className="text-white">
              Streamlining and outsourcing business processes to improve
              efficiency and reduce operational costs. This includes customer
              service, technical support, and other back-office functions.
            </span>
          </li>
        </ul>
        <p className="text-xl text-cyan-200">
          We offer 24/7 support to address client concerns and maintain
          uninterrupted service, ensuring your business stays agile and
          productive.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Quick Enquiry" />
      </div>
    </section>
  );
}
