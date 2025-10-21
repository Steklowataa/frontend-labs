import React from "react";

interface RatingBarProps {
  rate: number
  onRateChange?: (rate: number) => void
}

const RatingBar: React.FC<RatingBarProps> = ({ rate, onRateChange }) => {
  const stars = Array.from({ length: 10 }, (_, i) => i < rate);


  return (
    <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
      {stars.map((filled, index) => (
        <span
          onClick={() => onRateChange?.(index + 1)}
          key={index}
          style={{ color: filled ? "#FFD700" : "#ccc", fontSize: "25px", cursor: "pointer", transition: "color 0.2s"}}>
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingBar;
