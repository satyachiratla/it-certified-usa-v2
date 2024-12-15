"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Link, LinkProps, NavbarItem } from "@nextui-org/react";

type NavLinkProps = LinkProps & {
  children: ReactNode;
};

export default function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <NavbarItem isActive={pathname.startsWith(props.href as string)}>
      <Link color="foreground" {...props}>
        {children}
      </Link>
    </NavbarItem>
  );
}
