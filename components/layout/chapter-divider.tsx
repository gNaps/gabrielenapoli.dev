export default function ChapterDivider({
  label,
  last = false,
}: {
  label: string;
  last?: boolean;
}) {
  return (
    <div className={last ? "divider divider--last" : "divider"} aria-hidden>
      <div className="divider__label">{label}</div>
    </div>
  );
}
