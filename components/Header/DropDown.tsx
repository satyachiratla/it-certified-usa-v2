"use client";

import Link from "next/link";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import { ChevronDown } from "@/components/SVGS/Svg";
import { useState } from "react";

type DropDownProps = {
  label: string;
  href: string;
  items: {
    key: string;
    label: string;
    link: string;
  }[];
};

export default function DropDown({ label, items, href }: DropDownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Dropdown isOpen={dropdownOpen}>
      <NavbarItem>
        <DropdownTrigger>
          <Link href={`/${href}`}>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              endContent={<ChevronDown fill="currentColor" size={16} />}
              radius="sm"
              variant="light"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {label}
            </Button>
          </Link>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="about-us"
        className="w-[200px]"
        itemClasses={{
          base: "gap-4",
        }}
        items={items}
      >
        {(item) => (
          <DropdownItem key={item.key}>
            <Link href={`/${item.link}`}>{item.label}</Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
