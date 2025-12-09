"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import ContainerAnimated from "../container-animated/container-animated";
import GradientText from "../gradient-text/gradient-text";

type ContactForm = {
  email: string;
  firstname: string;
  surname: string;
  message: string;
};

const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const [success, setSuccess] = useState(false);

  const submit = async (payload: ContactForm) => {
    try {
      await fetch(`api/send`, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ContainerAnimated>
        <p className="h4">Reach out and let's chat.</p>
        <h1 className="mt-3 lg:mt-7">
          Got an idea?{" "}
          <GradientText animationSpeed={3}>tell me about it.</GradientText>
        </h1>
      </ContainerAnimated>

      <div className="my-16">
        <ContainerAnimated>
          <form onSubmit={handleSubmit(submit)} className="flex flex-col">
            <div className="flex gap-2 mb-2">
              <div className="flex-1">
                <label>Firstname</label>
                <input {...register("firstname")} className="w-full" />
              </div>

              <div className="flex-1">
                <label>Surname</label>
                <input {...register("surname")} className="w-full" />
              </div>
            </div>

            <div className="flex flex-col mb-2">
              <label>Email (*)</label>
              <input {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-2">
              <label>Message (*)</label>
              <textarea {...register("message", { required: true })} />
              {errors.message && <span>This field is required</span>}
            </div>

            {success && <p>Message sended succesfully!</p>}

            <button
              type="submit"
              className="rounded-lg bg-white text-black py-3 font-semibold mt-3"
            >
              Send message
            </button>
          </form>
        </ContainerAnimated>
      </div>
    </>
  );
};

export default Contacts;
