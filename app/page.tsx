import Carousel from "@/components/Carousel";
import FindJob from "@/components/FindJob";
import Goal from "@/components/Goal";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="space-y-4">
      <Carousel />
      <Services />
      <Goal />
      <FindJob />
    </main>
  );
}
