import React from "react";
import RatingBar from "./RatingBar";

export interface PersonProps {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  checked: boolean;
  rating: number;
  onDelete?: () => void;
  onCheck?: () => void;
  onRate?: () => void;
}

const PersonProfile: React.FC<PersonProps> = ({
  firstName,
  lastName,
  age,
  checked,
  rating,
  onDelete,
  onCheck,
  onRate
}) => {
  const handleEdit = () => {
    alert(`Edycja osoby: ${firstName} ${lastName}`);
  };

  return (
    <div
      style={{
        border: "1px solid #ABABAB",
        padding: "10px",
        borderRadius: "14px",
        backgroundColor: checked ? "#D0F0D0" : "#FAFAFA",
      }}
    >
      <h3 style={{ margin: "0 0 4px 0" }}>
        {firstName} {lastName}
      </h3>
      <p style={{ margin: "0 0 6px 0" }}>Wiek: {age}</p>
      <p style={{ margin: "0 0 6px 0" }}>Ocena: {rating}</p>
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <button onClick={handleEdit}>Edit</button>
        <label>
          <input type="checkbox" checked={checked} onChange={onCheck} /> Check
        </label>
        <button onClick={onDelete}>Delete</button>
      </div>
      <RatingBar rate={rating} onRateChange={onRate} />
    </div>
  );
};

export default PersonProfile;
