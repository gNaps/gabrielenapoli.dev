"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import ContainerAnimated from "../container-animated/container-animated";

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
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          連絡 · Reach out
        </div>
        <h1 className="glow-wrap" style={{ maxWidth: 900 }}>
          Got an idea?{" "}
          <span className="grad">tell me about it.</span>
        </h1>
      </ContainerAnimated>

      <div style={{ marginTop: 60, maxWidth: 640, margin: "60px auto 0" }}>
        <ContainerAnimated>
          <div className="card" style={{ padding: "36px 32px" }}>
            <form
              onSubmit={handleSubmit(submit)}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <label>Firstname</label>
                  <input
                    {...register("firstname")}
                    style={{ width: "100%", marginTop: 6 }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <label>Surname</label>
                  <input
                    {...register("surname")}
                    style={{ width: "100%", marginTop: 6 }}
                  />
                </div>
              </div>

              <div>
                <label>Email *</label>
                <input
                  {...register("email", { required: true })}
                  style={{ width: "100%", marginTop: 6 }}
                />
                {errors.email && (
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--danger)",
                      marginTop: 4,
                      display: "block",
                    }}
                  >
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <label>Message *</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  style={{ width: "100%", marginTop: 6, resize: "vertical" }}
                />
                {errors.message && (
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--danger)",
                      marginTop: 4,
                      display: "block",
                    }}
                  >
                    This field is required
                  </span>
                )}
              </div>

              {success && (
                <p
                  style={{
                    color: "var(--success)",
                    fontSize: 14,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  ✓ Message sent successfully!
                </p>
              )}

              <button type="submit" className="pill pill-primary">
                <span className="kana" aria-hidden style={{ fontSize: 11 }}>
                  送信
                </span>
                Send message
              </button>
            </form>
          </div>
        </ContainerAnimated>
      </div>
    </>
  );
};

export default Contacts;
