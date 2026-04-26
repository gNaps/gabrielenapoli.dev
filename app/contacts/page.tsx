import Contacts from "@/components/contacts/contacts";
import { Metadata } from "next";

const ContactsPage = () => {
  return (
    <>
      <div className="gn-page">
        <Contacts />
      </div>
    </>
  );
};

export default ContactsPage;

export const metadata: Metadata = {
  title: "Gabriele Napoli | Fullstack Developer",
  description: `I’m a senior Angular and React developer. For backend, I like to use Node.js and, in
            particular, Fastify with Prisma.`,
  keywords: [
    "Gabriele",
    "Napoli",
    "Developer",
    "Angular",
    "React",
    "Node",
    "About",
  ],
};
