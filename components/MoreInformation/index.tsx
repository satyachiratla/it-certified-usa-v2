"use client";

import { Button } from "@nextui-org/react";

export default function MoreInformation() {
  return (
    <div className="bg-sky-300 rounded-lg p-3 flex flex-col items-center space-y-3">
      <Button color="primary" size="lg" className="w-full cursor-default">
        More Information
      </Button>
      <span>info@itcertifiedusa.com</span>
      <span>
        <strong>Phone:</strong> (248) 473-07--
      </span>
      <span>
        <strong>Fax:</strong>(248) 473-07--
      </span>
    </div>
  );
}
