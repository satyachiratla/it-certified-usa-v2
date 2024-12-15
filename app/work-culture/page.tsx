import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function WorkCulture() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify text-white space-y-8">
        <p>
          The company is focused on software and ITES applications in many
          business domains, therefore, it needs technical specialists, mostly in
          J2EE and .NET platforms, combined with exposure in application areas
          like, knowledge management, eGovernance, HR, ERP, Corporate
          governance, electronic media and education. The company has modern
          infrastructure with adequate hardware, software tools and Internet
          connectivity. The company sponsors staff for training programs offered
          by business partners, viz. IBM, Microsoft and Sun, besides conducting
          in-house classes with the help of specialists and visiting faculty.
        </p>
        <p>
          The software engineers and consultants working with the company enjoy
          flexibility in working environment that encourages creativity and
          skills development. For instance, flexi work timings for all, option
          to work from home for certain positions, pursuing courses or even
          teaching special subjects in schools and colleges help to provide
          space to individuals and pursue their passions so long as work
          objectives are not compromised. In other words, individuals set their
          own targets and share them with their colleagues and leaders who are
          there to help.
        </p>
        <p>
          No one works within narrowly defined or rigid boundaries in the
          company; all staff is encouraged to broaden their understanding of all
          aspects of the problem, i.e. the technical and user sides, while
          remaining engaged in the areas of their interest and expertise. This
          way every professional develops a broader vision and acquires
          attitudes to perform as a more responsible and committed team member,
          one who is sensitive to each other’s roles but who is not shy of
          making suggestions or constructive criticism.
        </p>
        <p>
          The company subscribes to equal opportunity principles, respects merit
          and empowerment of all professionals regardless of their experience or
          socio-economic background.
        </p>
      </div>
      <div className="w-1/3 space-y-5">
        <MoreInformation />
        <EnquiryForm heading="Get In Touch" />
      </div>
    </section>
  );
}
