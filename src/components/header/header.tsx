import { $, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Button from "../button/button";

export default component$(() => {
  const onLetsTalk = $(() => {
    console.log("onLetsTalk");
  });

  return (
    <header class="flex justify-between items-center w-full">
      <Link href="/" class="text-2xl hidden lg:block">
        GABRIELE<span class="font-extrabold">NAPOLI</span>
      </Link>
      <Link href="/" class="text-2xl block lg:hidden">
        G<span class="font-extrabold">N</span>
      </Link>
      <nav class="hidden lg:flex gap-5 items-center">
        <Link href="/"> HOME </Link>
        <Link href="/about"> ABOUT </Link>
        <Link href="/projects"> PROJECTS </Link>
        <Link href="/stories"> STORIES </Link>
      </nav>
      <span class="hidden lg:block">
        <Button type="outlined" value="Let's talk" onClick={onLetsTalk}>
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
        <Button type="outlined" onClick={onLetsTalk}>
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
  );
});
