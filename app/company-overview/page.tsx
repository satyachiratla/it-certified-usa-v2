import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function CompanyOverview() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify text-white space-y-8">
        <p>
          We are an End to End IT Solutions provider with over a decade
          experience in Business Consulting, IT Integration, Project Management
          and Staff Augmentation.
        </p>
        <p>
          We take pride in our philosophy of “Organic Growth”. We are a fast
          growing software consulting company offering software development
          solutions to all our clients through offshore and onsite services.
        </p>
        <p>
          Our strength lies in leveraging innovation and a global
          onsite–offshore delivery model to provide best Return on Investments
          (ROI) for our clients. With an established offshore service centres we
          are able to provide our customers cost effective and customized
          solutions.
        </p>
        <p>
          In this highly competitive global marketplace with unlimited
          opportunities, where growth and consolidation brings upon the
          distinction, our clients face a host of new challenges continuously.
          We help our client’s successfully respond and capitalize on these
          opportunities by providing professional services, wherever and
          whenever they’re needed. We aim to deliver innovative and practical
          solutions, from concept through implementation and maintenance if
          required. Our depth and breadth of service and global reach equips us
          with resources to serve any client.
        </p>
        <p>
          At It Certified USA strive hard to achieve excellence in terms of the
          quality and quantity of work that we do for our clients. We focus on
          efficiency, flexibility and speed for competitive advantage enabling
          our customers to tread along the path of success with a combined
          experience of 100 years in the IT space our staff and management has
          been instrumental in successfully implementing cost effective
          solutions to our clients.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
