"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../button/button";

const Navbar = () => {
  const router = useRouter();

  const contacts = async () => {
    (window as any).goatcounter.count({
      path: "click-contacts-header",
      event: true,
    });
    router.push(`/contacts`);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const body = document.querySelector("body");
    body?.classList.toggle("overflow-hidden");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center w-full sticky top-0 left-0 px-8 py-5 backdrop-blur-lg header">
        <Link href="/" className="text-2xl hidden lg:block">
          GABRIELE<span className="font-extrabold">NAPOLI</span>
        </Link>
        <Link href="/" className="text-2xl block lg:hidden">
          G<span className="font-extrabold">N</span>
        </Link>
        <nav className="hidden lg:flex gap-5 items-center font-semibold">
          <Link href="/"> HOME </Link>
          <Link href="/about/"> ABOUT </Link>
          <Link href="/projects"> PROJECTS </Link>
          <Link href="/stories"> STORIES </Link>
        </nav>
        <span className="hidden lg:block">
          <Button
            type="outlined"
            value="Let's talk"
            onClick={contacts}
            id={"button-lets-talk-header"}
            name={"button-lets-talk-header"}
          />
        </span>
        <span className="block lg:hidden">
          <Button
            type="outlined"
            onClick={toggleMenu}
            id={"button-lets-talk-header-responsive"}
            name={"button-lets-talk-header-responsive"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </Button>
        </span>
      </nav>
      {isMenuOpen ? (
        <nav className={`menu-responsive`}>
          <Link
            href="/"
            className="text-2xl block lg:hidden fixed top-10 left-8"
          >
            G<span className="font-extrabold">N</span>
          </Link>
          <button
            onClick={() => {
              toggleMenu();
            }}
            className="fixed top-10 right-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            onClick={() => {
              toggleMenu();
            }}
          >
            HOME
          </Link>
          <Link
            href="/about"
            onClick={() => {
              toggleMenu();
            }}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            onClick={() => {
              toggleMenu();
            }}
          >
            PROJECTS
          </Link>
          <Link
            href="/stories"
            onClick={() => {
              toggleMenu();
            }}
          >
            STORIES
          </Link>
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;
