import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function Industries() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify text-white space-y-8">
        <div className="space-y-6">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Industries We Serve
          </h2>
          <h3 className="text-cyan-200 text-xl font-semibold">
            You belongs any Industry, we are here and ready to help
          </h3>
          <p>
            We care about your area of interested industries; HCL Global Systems
            Inc. are ready to help you in each stage of the business process to
            get the maximum benefits with less investment. We care about our
            customers, which will give us strength and growth of our customers.
          </p>
          <p>
            Our clients from small scale to middle scale to large scale to very
            large scale, industries from Banking to retail to energy to
            insurance to utilities, and HCL Global Systems Inc, will provide
            solutions for our clients with short term assistance to long term,
            enterprise-wide solutions, have turned to us to solve their IT
            issues.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-cyan-500 text-xl font-semibold">
            The following are the some industries we are providing services,
            supporting
          </h2>
          <ul className="space-y-2">
            <li>☑️ Insurance</li>
            <li>☑️ Manufacturing</li>
            <li>☑️ Professional Services</li>
            <li>☑️ Public Sector</li>
            <li>☑️ Retail</li>
            <li>☑️ Banking</li>
            <li>☑️ Energy</li>
            <li>☑️ Financial Services</li>
            <li>☑️ Healthcare & Pharmaceutical</li>
            <li>☑️ Telecom, media & Technology</li>
            <li>☑️ Travel</li>
            <li>☑️ Utilities</li>
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
