import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function AngelInvestingHoldingAndParentingCompany() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify">
        <h2 className="text-cyan-300 text-3xl font-bold mb-8">
          Angel Investing, Holding, and Parenting Company
        </h2>
        <p className="text-cyan-200 text-xl mb-5">
          IT Certified USA Inc serves as an{" "}
          <strong>Angel Investor and Holding and Parenting Company</strong>,
          supporting startups and established businesses with capital and
          strategic direction. Our services in this area include:
        </p>
        <ul className="text-cyan-100 space-y-4 mb-8">
          <li>
            <span className="text-lg">Seed Funding and Venture Capital: </span>
            <span className="text-white">
              Investing in promising startups to help them scale operations and
              accelerate growth.
            </span>
          </li>
          <li>
            <span className="text-lg">Business Mentorship: </span>
            <span className="text-white">
              Providing mentorship and resources to guide new companies through
              early challenges.
            </span>
          </li>
          <li>
            <span className="text-lg">Portfolio Management: </span>
            <span className="text-white">
              Managing investments to optimize growth and profitability for both
              IT Certified USA Inc and our partner companies.
            </span>
          </li>
          <li>
            <span className="text-lg">
              Corporate Governance and Oversight:{" "}
            </span>
            <span className="text-white">
              Ensuring that companies we invest in maintain high standards of
              governance and operational efficiency.
            </span>
          </li>
        </ul>
        <p className="text-xl text-cyan-200">
          We believe in fostering innovation and entrepreneurship, and our
          support extends beyond funding to include guidance on technology
          adoption, market strategy, and sustainable business practices.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
