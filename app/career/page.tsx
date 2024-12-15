import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function Career() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify text-white space-y-8">
        <p>
          If you are looking for a career, not a job, you have come to the right
          place. For us a career is long term and makes you happy in what you
          do, while fulfilling your dreams. IT Certified USA employees care
          deeply for the quality, the business and are passionate about what
          they do. We, at IT Certified USA, are biased for Change and Action.
        </p>
        <p>
          Most talented individuals, like you, are looking for a career where
          one has the freedom to make decisions and an environment to apply
          one’s creativity. IT Certified USA works with you to create such an
          atmosphere while empowering you to make effective decisions.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
