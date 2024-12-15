"use client";

import { Button, Input, Textarea } from "@nextui-org/react";

type EnquiryFormProps = {
  heading: string;
};

export default function EnquiryForm({ heading }: EnquiryFormProps) {
  return (
    <div className="bg-sky-300 rounded-lg p-3 flex flex-col items-center space-y-3">
      <Button color="primary" size="lg" className="w-full cursor-default">
        {heading}
      </Button>
      <form className="w-full space-y-3">
        <Input size="md" type="text" label="Name" isRequired />
        <Input size="md" type="email" label="Email" isRequired />
        <Input size="md" type="number" label="Phone Number" isRequired />
        <Input size="md" type="text" label="Company" isRequired />
        <Textarea label="Additional Information" />
        <Button color="primary" size="lg" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
