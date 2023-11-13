import { Slot, component$, useSignal } from "@builder.io/qwik";
import { useCSSTransition } from "qwik-transition";

interface AnimatedProps {}

export default component$(() => {
  const transitionOnAppear = useCSSTransition(useSignal(true), {
    transitionOnAppear: true,
  });
  return (
    <>
      <div
        class={`animation ${
          transitionOnAppear.stage.value === "enterTo"
            ? "animation-entered"
            : transitionOnAppear.stage.value === "enterFrom"
            ? "animation-positioning"
            : null
        }`}
      >
        <Slot />
      </div>
    </>
  );
});
