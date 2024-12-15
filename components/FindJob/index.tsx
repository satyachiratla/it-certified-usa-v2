import { Button } from "@nextui-org/react";

export default function FindJob() {
  return (
    <section className="bg-slate-700 flex flex-col items-center justify-center space-y-3 py-8">
      <p className="text-white max-w-3xl text-2xl text-center leading-10">
        Opportunities don’t often come along. So, when they do, you have to grab
        them. Success doesn’t come to you, you go to it.
      </p>
      <Button color="primary" size="lg">
        Find A Job
      </Button>
    </section>
  );
}
