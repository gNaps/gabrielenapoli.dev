import { $, component$, useSignal } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import Button from "../button/button";

export default component$(() => {
  const nav = useNavigate();

  const contacts = $(async () => {
    await nav(`/contacts`);
  });

  const menuOpen = useSignal(false);

  const toggleMenu = $(() => {
    const body = document.querySelector("body");
    body?.classList.toggle("overflow-hidden");
    menuOpen.value = !menuOpen.value;
  });

  return (
    <>
      <header class="flex justify-between items-center w-full fixed top-0 left-0 p-8 bg-black/50 backdrop-blur-lg header">
        <Link href="/" class="text-2xl hidden lg:block">
          GABRIELE<span class="font-extrabold">NAPOLI</span>
        </Link>
        <Link href="/" class="text-2xl block lg:hidden">
          G<span class="font-extrabold">N</span>
        </Link>
        <nav class="hidden lg:flex gap-5 items-center">
          <Link href="/"> HOME </Link>
          <Link href="/about/"> ABOUT </Link>
          <Link href="/projects"> PROJECTS </Link>
          <Link href="/stories"> STORIES </Link>
        </nav>
        <span class="hidden lg:block">
          <Button type="outlined" value="Let's talk" onClick={contacts}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>
        </span>
        <span class="block lg:hidden">
          <Button type="outlined" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </Button>
        </span>
      </header>
      {menuOpen.value ? (
        <nav class={`menu-responsive`}>
          <Link href="/" class="text-2xl block lg:hidden fixed top-10 left-8">
            G<span class="font-extrabold">N</span>
          </Link>
          <button
            onClick$={() => {
              toggleMenu();
            }}
            class="fixed top-10 right-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            onClick$={() => {
              toggleMenu();
            }}
          >
            HOME
          </Link>
          <Link
            href="/about"
            onClick$={() => {
              toggleMenu();
            }}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            onClick$={() => {
              toggleMenu();
            }}
          >
            PROJECTS
          </Link>
          <Link
            href="/stories"
            onClick$={() => {
              toggleMenu();
            }}
          >
            STORIES
          </Link>
        </nav>
      ) : null}
    </>
  );
});
