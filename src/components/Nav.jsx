import React, { useEffect, useState } from "react";
import Logo from "./images/Logo.svg";

import { Link } from "react-scroll";

export const Nav = () => {
  const [navbar, setNavbar] = useState(false); // navbar background color chamge
  const [click, setClick] = useState(false);

  const navbarObject = [
    //navbar links in array
    {
      name: "Home",
      offset: -63,
      to: "home",
    },
    {
      name: "About",
      offset: -55,
      to: "about",
    },
    {
      name: "Projects",
      offset: -55,
      to: "projects",
    },
    {
      name: "Contact",
      offset: 0,
      to: "contact",
    },
  ];

  const changeBackground = () => {
    // function to check if the navbar background need to change
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    // useEffect which runs wvwrytime windows scrolls
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [window.scrollY]);

  const handleClick = () => {
    setClick(!click);
  };

  const closeNav = () => {
    setClick(false);
  };

  // add logo rotation on window scroll

  window.addEventListener("scroll", function () {
    var logo = document.getElementById("logo");
    logo.style.transform = "rotate(" + window.pageYOffset + "deg)";
    // console.log();
  });

  const navItems = navbarObject.map((item) => {
    return (
      <li
        key={item.name}
        className="mx-5 md:my-0 my-5 h-6 cursor-pointer md:hover:border-b-4 border-orange-500"
      >
        <Link
          to={item.to}
          spy={true}
          smooth={true}
          offset={item.offset}
          duration={500}
          onClick={closeNav}
          activeClass="navlink-active"
        >
          {item.name}
        </Link>
      </li>
    );
  });
  return (
    <header className="shadow-sm ">
      <div
        className={
          navbar // navbar background color chamge on scroll
            ? "fixed w-full  mx-auto z-[10000] bg-gray-50 transition duration-500"
            : "fixed w-full px-4 md:p-0 mx-auto"
        }
      >
        <div className="flex items-center justify-between md:justify-evenly  space-x-4 lg:space-x-10">
          <img id="logo" src={Logo} className="h-20 w-20" alt="logo" />
          <button
            className="block p-2.5 text-gray-600 transition bg-gray-100 rounded md:hidden hover:text-gray-600/75"
            onClick={handleClick}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={
              click
                ? "block font-semibold  md:flex md:flex-row md:justify-between" //regular website
                : "hidden h-auto font-bold bg-gray-300 md:bg-transparent md:flex md:flex-row md:justify-between" // mobile website
            }
          >
            {navItems}
          </ul>
        </div>
      </div>
    </header>
  );
};
