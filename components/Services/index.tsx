import { ServicesData } from "@/data/Services";
import ServiceCard from "../Shared/ServiceCard";

export default function Services() {
  return (
    <section className="mx-10 space-y-4">
      <h2 className="text-2xl font-semibold text-cyan-300">IT Certified USA</h2>
      <p className="text-lg text-cyan-200">
        We are an end to End IT Solutions provider with over a decade experience
        in IT Consulting Services, IT Integration, Project Management and Staff
        Augmentation.We take pride in our philosophy of “Organic Growth”. We are
        a fast growing software consulting company offering software development
        solutions to all our clients through offshore and onsite services.
      </p>
      <ul className="grid grid-cols-4 gap-5 place-content-center">
        {ServicesData.map((service) => (
          <li key={service.id}>
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
