import Image from "next/image";
import Link from "next/link";

type Service = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  title: string;
  description: string;
};

export default function ServiceCard({ image, title, description }: Service) {
  return (
    <Link
      href={`/${title.toLowerCase().replace(/,/g, "").replace(/\s+/g, "-")}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article className="bg-gradient-to-b from-sky-200 to-cyan-600 w-full rounded-xl p-5 h-72 flex flex-col gap-3 items-center">
        <div className="w-28 h-28">
          <Image src={image} alt={title} width={500} height={500} />
        </div>
        <h2 className="font-semibold text-lg text-center">{title}</h2>
        <p className="text-sm text-center">{description}</p>
      </article>
    </Link>
  );
}
