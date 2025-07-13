interface EmailTemplateProps {
  firstname: string;
  surname: string;
  email: string;
  message: string;
}

export function EmailTemplate({
  firstname,
  surname,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>
        Nuovo messaggio da {firstname} {surname}
      </h1>
      <p>Hai ricevuto una nuova mail: </p>
      <pre>{message}</pre>
      <p>Ricontatta al {email}</p>
    </div>
  );
}
