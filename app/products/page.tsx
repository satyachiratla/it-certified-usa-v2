import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function Products() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify text-white space-y-8">
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Providing Innovative Mission Critical Solutions
          </h2>
          <p>
            We have worked hard to develop the processes we employ. Our
            experience has shown us that only by following a closely defined
            methodology can we provide our clients the highest quality of
            service for solutions ranging from great looking website designs to
            highly secure and easy to use ecommerce solutions. Our development
            methodology returns control of the development process to our
            clients – at all stages in the process, our clients remain informed.
          </p>
        </div>
        <div className="text-center">
          <span className="text-xl bg-sky-700 p-2">
            Learn more about Our Methodology
          </span>
        </div>
        <div className="space-y-3">
          <h2>
            Define the task We first seek to understand your requirements and
            then advise you and provide costs on the best solution possible for
            website design, ecommerce development, search engine optimization or
            internet advertising.
          </h2>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Create the solution
          </h2>
          <p>
            We prototype, design, develop, test and launch the web solution
            within strict quality assurance guidelines and delivery schedules.
            You are an integral part of our development cycle and we keep you
            informed about the progress at all times.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Support the client
          </h2>
          <p>
            We follow through on our solution by offering training, content
            management and website maintenance systems and ongoing support
            second to none.
          </p>
          <p>
            Request a proposal for your project and see how this methodology
            helps your online business achieve terrific results.
          </p>
        </div>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
