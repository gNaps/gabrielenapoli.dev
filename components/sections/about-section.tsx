import { getSiteCopy } from "@/cms/site-copy";
import aboutImage from "@/public/cms/about_me.webp";
import Image from "next/image";
export default function AboutSection() {
  const { lang, t } = getSiteCopy();
  const statement =
    lang === "en"
      ? "I'm Gabriele Napoli, a senior Angular and React developer in Milan. 8+ years turning ideas into products: interfaces that feel right, backends that hold, and a human eye on every line."
      : "Sono Gabriele Napoli, sviluppatore senior Angular e React a Milano. Da oltre 8 anni trasformo idee in prodotti: interfacce intuitive, backend solidi e un occhio umano su ogni riga.";
  return (
    <>
      <section id="about" className="about-scroll" data-sticky="about">
        <div className="about-stage container">
          <div>
            <p className="eyebrow accent">{t.evAbout}</p>
            <h2 className="about-statement">
              {statement.split(" ").map((word, i) => (
                <span data-word key={i}>
                  {word}{" "}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </section>
      <section className="about-details container">
        <div className="about-portrait" data-reveal>
          <div className="parallax-photo" data-parallax>
            <Image
              src={aboutImage}
              alt="Gabriele Napoli"
              fill
              sizes="(max-width: 767px) 100vw, 530px"
              className="cover"
            />
          </div>
        </div>
        <div className="about-copy">
          <p data-reveal>
            {lang === "en"
              ? "I enjoy the entire process: from clean, intuitive interfaces to robust database architectures. On the backend I love Node.js, especially Fastify for speed and Prisma for clarity. I pair with AI every day, from Claude Code to Codex: it speeds up the hands, but the decisions stay mine."
              : "Mi piace tutto il processo: dalle interfacce pulite e intuitive alle architetture di database solide. Sul backend amo Node.js, soprattutto Fastify per la velocità e Prisma per la chiarezza. Lavoro con l’AI ogni giorno, da Claude Code a Codex: accelera le mani, ma le decisioni restano mie."}
          </p>
          <p className="muted" data-reveal>
            {lang === "en"
              ? "Outside of work: video games, books, comics and running."
              : "Fuori dal lavoro: videogiochi, libri, fumetti e corsa."}
          </p>
          <div className="facts-grid" data-reveal>
            {t.facts.map((fact) => (
              <div key={fact.big}>
                <strong>{fact.big}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
