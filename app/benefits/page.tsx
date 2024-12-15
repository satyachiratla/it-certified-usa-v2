import EnquiryForm from "@/components/EnquiryForm";
import MoreInformation from "@/components/MoreInformation";

export default function Benefits() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3 text-justify text-white space-y-8">
        <p>
          What’s it like to work for HCL Global Systems? One way to find out is
          to attend a HCL Global Systems recruiting event, where you’ll have an
          opportunity to talk with a HCL Global Systems recruiter — to get to
          know our company and our employees up-close and personal, to learn
          about new technologies on the horizon, and to explore career
          opportunities. At HCL Global Systems, we’re excited to be part of a
          technology industry that is fundamental to the way people live, work,
          and play. We’re also dedicated to supporting the industry, the
          partners and developers that comprise it, and creating opportunities
          for our customers.
        </p>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            All kinds of people; all kinds of potential
          </h2>
          <p>
            At HCL Global Systems when we talk about recruiting the best and the
            brightest, we’re talking about people who thrive on the excitement
            of collaboration and the discovery of new opportunities. They like
            setting their own goals and working hard to achieve them in their
            own style. They apply their talents in myriad positions, from sales
            and marketing to technical design and programming, to product
            support and consulting. Why are they here? To create something that
            matters – to themselves, and to millions of people around the world.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            We value diverse ideas
          </h2>
          <p>
            HCL Global Systems has established a number of initiatives to
            promote and integrate diversity at every level within our
            organization, and to demonstrate this commitment locally,
            nationally, and globally.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Diversity Education Programs
          </h2>
          <p>
            These programs reinforce our commitment to diversity and ensure that
            our employees have the tools and resources they need to grow
            professionally. The emphasis is on understanding and valuing
            differences, and leveraging them in order to compete effectively in
            an ever-changing marketplace. Career choices with HCL Global
            Systems; the HCL Global Systems experience is about choice. When you
            join our team, you have the choice of Full time employment with
            on-site and off-shore project works. At HCL Global Systems, the best
            talent agents in the industry assure HCL Global Systems employees
            the right fit, on the right assignment the first time. Access to
            these great assignments helps HCL Global Systems employees achieve
            their career goals and gain valuable experience.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Top talent deserves top treatment
          </h2>
          <p>
            New perks for HCL Global Systems employees always being added. Your
            HCL Global Systems talent agent has all the details. “Cool Perks”
            for hot talent. With the HCL Global Systems experience you also gain
            access to a wide range of “Cool Perks”— the stuff that turns a
            decent job into a decidedly desirable opportunity. “Cool Perks” help
            you develop your skills, protect your health, and ensure your future
            growth.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Payroll and direct deposit
          </h2>
          <p>
            HCL Global Systems employees are paid monthly. We take care of all
            payroll deductions required by state and federal laws; we match
            social security contributions and provide worker’s compensation
            insurance.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Health Benefits
          </h2>
          <p>
            HCL Global Systems employees are eligible to enroll in medical,
            dental, and insurance programs through HCL Global Systems preferred
            health-care vendors. Your benefits are more comprehensive and are
            paid on a salaried basis earning paid-time off (PTO), holiday pay
            and you can participate in a flexible spending program. Enrollment
            materials are included in your personal new hire package.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            To become eligible for HCL Global Systems employee status, you must:
          </h2>
          <ul>
            <li>Be a W-2 hourly consultant</li>
            <li>Meet ‘exempt’ classification status</li>
          </ul>
          <p>
            What’s it like to work for HCL Global Systems? One way to find out
            is to attend a HCL Global Systems recruiting event, where you’ll
            have an opportunity to talk with a HCL Global Systems recruiter — to
            get to know our company and our employees up-close and personal, to
            learn about new technologies on the horizon, and to explore career
            opportunities. At HCL Global Systems, we’re excited to be part of a
            technology industry that is fundamental to the way people live,
            work, and play. We’re also dedicated to supporting the industry and
            the partners and developers that comprise it, and to creating
            opportunities for our customers.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-cyan-500 text-xl font-semibold">
            Employee Referral Policy.
          </h2>
          <p>
            Any active employee can refer a candidate towards an open position
            at the company. Any open position at our company is eligible for a
            referral reward. For a list of open positions, please visit the
            “Openings” page in this section of the website. New positions are
            added, and openings change, so please check back often. If the
            candidate is hired and remains on our payroll for a minimum of 160
            days. from the date of hire, the referring employee shall be paid a
            sum of $500.00 as a referral bonus. There is no limit on the number
            of referrals an employee can make, nor is there a limit on the
            amount of number of referral bonuses that can be collected, so long
            as the criteria laid out by the employee referral policy are
            met.Contact HR department for additional details
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
