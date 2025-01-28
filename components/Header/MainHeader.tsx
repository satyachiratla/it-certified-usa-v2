"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import NavLink from "./NavLink";
import Link from "next/link";

export default function App() {
  return (
    <Navbar className="bg-slate-400">
      <NavLink href="/" className="mt-2">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">IT Certified USA</p>
        </NavbarBrand>
      </NavLink>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavLink href="/">Home</NavLink>
        <div className="dropdown dropdown-hover">
          <NavLink href="/about-us" tabIndex={0} role="button" className="m-1">
            About Us
          </NavLink>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow -left-16"
          >
            <li>
              <Link href="/company-overview">Company Overview</Link>
            </li>
            <li>
              <Link href="/vision-and-mission">Vision and Mission</Link>
            </li>
            <li>
              <Link href="/why-it-certified-usa">Why It Certified USA</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover">
          <NavLink href="/services" tabIndex={0} role="button" className="m-1">
            Services
          </NavLink>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-56 p-2 shadow -left-16"
          >
            <li>
              <Link href="/application-development">
                Application Development
              </Link>
            </li>
            <li>
              <Link href="/maintenance-support">Maintenance Support</Link>
            </li>
            <li>
              <Link href="/consulting">Consulting</Link>
            </li>
            <li>
              <Link href="/quality-testing">Quality/Testing</Link>
            </li>
            <li>
              <Link href="/staffing">Staffing</Link>
            </li>
            <li>
              <Link href="/technology">Technology</Link>
            </li>
            <li>
              <Link href="/real-estate-development-and-forecloser">
                Real Estate
              </Link>
            </li>
            <li>
              <Link href="/angel-investing-holding-and-parenting-company">
                Angel Investing
              </Link>
            </li>
          </ul>
        </div>

        <NavLink color="foreground" href="/industries">
          Industries
        </NavLink>

        <div className="dropdown dropdown-hover">
          <NavLink href="/products" tabIndex={0} role="button" className="m-1">
            Products
          </NavLink>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow -left-16"
          >
            <li>
              <Link href="/products">Overview</Link>
            </li>
            <li>
              <Link href="/our-methodology">Our Methodology</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover">
          <NavLink href="/career" tabIndex={0} role="button" className="m-1">
            Career
          </NavLink>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow -left-16"
          >
            <li>
              <Link href="/work-culture">Work Culture</Link>
            </li>
            <li>
              <Link href="/benefits">Benefits</Link>
            </li>
            <li>
              <Link href="/openings">Openings</Link>
            </li>
          </ul>
        </div>

        <NavLink color="foreground" href="/clients">
          Clients
        </NavLink>
        <NavLink color="foreground" href="/contact-us">
          Contact Us
        </NavLink>
      </NavbarContent>
    </Navbar>
  );
}
