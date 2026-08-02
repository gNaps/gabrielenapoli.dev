"use client";

import IllustrationSlot from "@/components/layout/illustration-slot";
import { useReveal } from "@/components/layout/use-reveal";
import { useLang } from "@/components/providers/language-provider";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/utils/social-links.utils";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

type SendState = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();
  const [state, setState] = useState<SendState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setState("sending");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`send failed: ${res.status}`);
      setState("sent");
      reset();
    } catch {
      setState("error");
    }
  };

  const sendLabel =
    state === "sending" ? t.sending : state === "sent" ? t.sent : t.send;

  return (
    <section id="contact" ref={ref} className="reveal">
      <div className="contact-grid">
        <div className="panel sh-12 contact-card">
          <div className="eyebrow eyebrow--accent">{t.evContact}</div>
          <h2 className="contact-title">{t.contactTitle}</h2>
          <p className="contact-blurb">{t.contactBlurb}</p>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <label className="field">
              {t.fieldName}
              <input
                type="text"
                {...register("name", { required: true })}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <span className="field__error">{t.fieldRequired}</span>
              )}
            </label>
            <label className="field">
              {t.fieldEmail}
              <input
                type="email"
                {...register("email", { required: true })}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <span className="field__error">{t.fieldRequired}</span>
              )}
            </label>
            <label className="field">
              {t.fieldMsg}
              <textarea
                rows={4}
                {...register("message", { required: true })}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <span className="field__error">{t.fieldRequired}</span>
              )}
            </label>
            <button
              type="submit"
              className="btn btn--primary contact-submit"
              disabled={state === "sending"}
            >
              {sendLabel}
            </button>
            {state === "error" && (
              <span className="field__error">{t.sendError}</span>
            )}
          </form>
        </div>
        <div className="contact-col">
          <div className="panel panel--img sh-12 sh-accent contact-illu">
            <IllustrationSlot label="CONTACT · 挿絵" src="/cms/contacts.webp" />
            <div className="sfx sfx--bye">またね!</div>
          </div>
          <div className="panel links-card">
            <a href="mailto:gabrielenap@gmail.com" className="link-row">
              gabrielenap@gmail.com<span>✉</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="link-row"
            >
              GitHub / gNaps<span>↗</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="link-row"
            >
              LinkedIn<span>↗</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="link-row"
            >
              Instagram / napsryu<span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
