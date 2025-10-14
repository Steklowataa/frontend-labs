interface ProfileParagraphProps {
  title: string;
  label: string | number;
}

export default function ProfileParagraph({ title, label }: ProfileParagraphProps) {
  return (
    <div style={{ marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
      <strong style={{fontSize: "20px"}}>{title}: </strong>
      <span style={{fontSize: "16px"}}>
        {label}
      </span>
    </div>
  );
}
