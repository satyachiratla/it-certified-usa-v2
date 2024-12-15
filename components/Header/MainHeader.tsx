import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import NavLink from "./NavLink";
import DropDown from "./DropDown";
import Link from "next/link";

export default function App() {
  return (
    <Navbar className="bg-slate-400">
      <Link href="/">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">IT Certified USA</p>
        </NavbarBrand>
      </Link>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavLink href="/">Home</NavLink>
        <DropDown
          href="about-us"
          label="About Us"
          items={[
            {
              key: "company-overview",
              label: "Company Overview",
              link: "company-overview",
            },
            {
              key: "vision-and-mission",
              label: "Vision and Mission",
              link: "vision-and-mission",
            },
            {
              key: "why-it-certified-usa",
              label: "Why It Certified USA",
              link: "why-it-certified-usa",
            },
          ]}
        />
        <DropDown
          label="Services"
          href="services"
          items={[
            {
              key: "application-development",
              label: "Application Development",
              link: "application-development",
            },
            {
              key: "maintenance-support",
              label: "Maintenance Support",
              link: "maintenance-support",
            },
            { key: "consulting", label: "Consulting", link: "consulting" },
            {
              key: "quality-testing",
              label: "Quality/Testing",
              link: "quality-testing",
            },
            { key: "staffing", label: "Staffing", link: "staffing" },
            { key: "technology", label: "Technology", link: "technology" },
            {
              key: "real-estate",
              label: "Real Estate",
              link: "real-estate-development-and-forecloser",
            },
            {
              key: "angel-investing",
              label: "Angel Investing",
              link: "angel-investing-holding-and-parenting-company",
            },
          ]}
        />
        <NavLink color="foreground" href="/industries">
          Industries
        </NavLink>
        <DropDown
          label="Products"
          href="products"
          items={[
            { key: "overview", label: "Overview", link: "products" },
            {
              key: "our-methodology",
              label: "Our Methodology",
              link: "our-methodology",
            },
          ]}
        />
        <DropDown
          label="Career"
          href="career"
          items={[
            {
              key: "work-culture",
              label: "Work Culture",
              link: "work-culture",
            },
            { key: "benefits", label: "Benefits", link: "benefits" },
            { key: "openings", label: "Openings", link: "openings" },
          ]}
        />
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
