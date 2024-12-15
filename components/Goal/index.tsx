import Image from "next/image";
import { MissionIcon, VisionIcon } from "@/constants/images";

export default function Goal() {
  return (
    <section className="flex justify-center items-center text-center gap-5 py-8">
      <div className="max-w-md flex flex-col justify-center items-center gap-3">
        <div className="w-44 h-44">
          <Image src={VisionIcon} alt="vision" width={500} height={500} />
        </div>
        <h3 className="text-cyan-300 text-3xl">Vision</h3>
        <p className="text-white">
          Our main Vision is to be a global leader in providing the highest
          level of IT solutions and services to clients.
        </p>
      </div>
      <div className="max-w-md flex flex-col justify-center items-center gap-3">
        <div className="w-44 h-44">
          <Image src={MissionIcon} alt="mission" width={500} height={500} />
        </div>
        <h3 className="text-cyan-300 text-3xl">Mission</h3>
        <p className="text-white">
          Conduct our business according to the highest standards of honesty and
          integrity.that allows our customers.
        </p>
      </div>
    </section>
  );
}
