import { $, component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { FramerAnimated } from "~/components/framer-animated/framer-animated";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";
import { formAction$, reset, useForm, valiForm$ } from "@modular-forms/qwik";
import { Resend } from "resend";
import { email, minLength, object, string } from "valibot";

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

export const useFormAction = formAction$<ContactForm>(
  async ({ name, email, message }, requestEvent) => {
    const resend = new Resend(requestEvent.env.get("SENDER_API_KEY"));
    await resend.emails.send({
      from: requestEvent.env.get("EMAIL_NO_REPLY")!,
      to: [requestEvent.env.get("CONTACTS_EMAIL")!],
      subject: `Hai ricevuto una mail da ${name} - ${email}`,
      text: message,
    });
  },
  valiForm$(ContactSchema)
);

export default component$(() => {
  const [contactForm, { Form, Field }] = useForm<ContactForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(ContactSchema),
  });

  const handleSubmit = $<SubmitHandler<ContactForm>>(async () => {
    reset(contactForm);
  });

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-80">
        <FramerAnimated client:visible>
          <h4>Reach out and let's chat.</h4>
          <h1 class="mt-3 lg:mt-7">
            Got an idea? <span class="gradient">tell me about it.</span>
          </h1>
        </FramerAnimated>

        <div class="my-16">
          <FramerAnimated client:visible>
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
          </FramerAnimated>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Gabriele Napoli | Fullstack Javascript",
  meta: [
    {
      name: "Home page | Gabriele Napoli Developer",
      content: "Full stack developer from Milan. In love with Javascript.",
    },
  ],
};
