interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Nuovo messaggio da {name}</h1>
      <p>Hai ricevuto una nuova mail: </p>
      <pre>{message}</pre>
      <p>Ricontatta al {email}</p>
    </div>
  );
}
