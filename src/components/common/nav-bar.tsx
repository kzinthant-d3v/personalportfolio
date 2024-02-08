"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
const navs = [
  {
    name: "About Me",
    href: "/",
    segment: null,
  },
  {
    name: "Projects",
    href: "/projects",
    segment: "projects",
  },
  {
    name: "Blog",
    href: "/blog",
    segment: "blog",
  },
  {
    name: "Contact",
    href: "/contact",
    segment: "contact",
  },
];

const NavBar = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <div>
      <ul className="flex space-x-5 lg:space-x-10 2xl:space-x-20 justify-center lg:justify-end nav-color cursor-pointer">
        {navs.map((nav) => (
          <li
            key={nav.segment}
            className={nav.segment === segment ? "nav-active" : ""}
          >
            <Link href={nav.href}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
