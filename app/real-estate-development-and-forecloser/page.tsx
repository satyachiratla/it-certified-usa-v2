import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function RealEstateDevelopmentAndForeclosure() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify">
        <h2 className="text-cyan-300 text-3xl font-bold mb-8">
          Real Estate Development and Foreclosure
        </h2>
        <p className="text-cyan-200 text-xl mb-5">
          Expanding beyond IT,{" "}
          <strong>Real Estate Development and Foreclosure</strong> is a unique
          offering from IT Certified USA Inc, demonstrating our diverse
          expertise. Our services in this domain include:
        </p>
        <ul className="text-cyan-100 space-y-4 mb-8">
          <li>
            <span className="text-lg">
              Project Planning and Feasibility Analysis:{" "}
            </span>
            <span className="text-white">
              Assessing project viability and creating strategic development
              plans.
            </span>
          </li>
          <li>
            <span className="text-lg">
              Property Acquisition and Management:{" "}
            </span>
            <span className="text-white">
              Helping clients find and manage properties efficiently.
            </span>
          </li>
          <li>
            <span className="text-lg">Foreclosure Assistance: </span>
            <span className="text-white">
              Providing guidance to navigate foreclosure processes, ensuring
              clients make informed decisions.
            </span>
          </li>
          <li>
            <span className="text-lg">
              Renovation and Construction Management:{" "}
            </span>
            <span className="text-white">
              Overseeing the renovation or construction of properties to enhance
              their value and functionality.
            </span>
          </li>
        </ul>
        <p className="text-xl text-cyan-200">
          Our team’s knowledge of both the real estate and IT sectors allows us
          to offer integrated tech solutions to streamline processes and
          maximize returns.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
