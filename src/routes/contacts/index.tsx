import { $, component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { ContainerAnimated } from "~/components/container-animated/container-animated";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";
import { formAction$, reset, useForm, valiForm$ } from "@modular-forms/qwik";
import { email, minLength, object, string } from "valibot";

// const serverGreeter = server$(function (firstName: string, lastName: string) {
//   const greeting = `Hello ${firstName} ${lastName}`;
//   console.log("Prints in the server", greeting);
//   console.log("SENDER_API_KEY", this.env.get("SENDER_API_KEY"));
//   return greeting;
// });

const ContactSchema = object({
  email: string([
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  name: string([minLength(1, "Please enter your name.")]),
  message: string([minLength(1, "Please enter your message.")]),
});

type ContactForm = {
  email: string;
  name: string;
  message: string;
};

export const useFormLoader = routeLoader$<InitialValues<ContactForm>>(() => ({
  email: "",
  name: "",
  message: "",
}));

export const useFormAction = formAction$<ContactForm>(async () => {
  // run on server
}, valiForm$(ContactSchema));

export default component$(() => {
  const [contactForm, { Form, Field }] = useForm<ContactForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(ContactSchema),
  });

  const handleSubmit = $<SubmitHandler<ContactForm>>(
    async ({ name, email, message }) => {
      const res = await fetch(process.env.SUPABASE_URL!, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          subject: "Nuova mail da GABRIELENAPOLI.DEV | " + email + " | " + name,
          html: message,
        }),
      });
      await res.json();
      reset(contactForm);
    }
  );

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-80">
        <ContainerAnimated client:visible>
          <p class="h4">Reach out and let's chat.</p>
          <h1 class="mt-3 lg:mt-7">
            Got an idea? <span class="gradient">tell me about it.</span>
          </h1>
        </ContainerAnimated>

        <div class="my-16">
          <ContainerAnimated client:visible>
            <Form class="flex flex-col" onSubmit$={handleSubmit}>
              <div class="flex gap-3 my-3">
                <div class="flex-1">
                  <Field name="name">
                    {(field, props) => (
                      <input
                        {...props}
                        type="text"
                        value={field.value}
                        class="w-full"
                        placeholder="Name"
                      />
                    )}
                  </Field>
                </div>
                <div class="flex-1">
                  <Field name="email">
                    {(field, props) => (
                      <input
                        {...props}
                        type="email"
                        value={field.value}
                        class="w-full"
                        placeholder="Email"
                      />
                    )}
                  </Field>
                </div>
              </div>

              <div class="my-3 w-full">
                <Field name="message">
                  {(field, props) => (
                    <textarea
                      {...props}
                      value={field.value}
                      class="h-32 w-full"
                      placeholder="Message"
                    />
                  )}
                </Field>
              </div>

              <button
                type="submit"
                class="rounded-lg bg-white text-black py-3 font-semibold mt-3"
              >
                Send message
              </button>
            </Form>
          </ContainerAnimated>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Gabriele Napoli | Fullstack Javascript",
  meta: [
    {
      name: "description",
      content:
        "Gabriele Napoli | Fullstack Javascript | I’m a senior Angular and React developer. For backend, I like to use Node.js and, in particular, Fastify with Prisma.",
    },
  ],
};
