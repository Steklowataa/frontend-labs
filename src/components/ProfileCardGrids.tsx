import React from "react";
import ProfileCard from "./ProfileCard";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

interface ProfileCardGridProps {
  people: Person[];
  columns: number;
}

export default function ProfileCardGrid({ people, columns }: ProfileCardGridProps) {
    return (
        <div style={{display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "10px"}}>
            {people.map((person) => (
                <ProfileCard key={person.id} person={person} />
            ))}
        </div>
    )
}