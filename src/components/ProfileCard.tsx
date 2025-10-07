import React from "react";
import ProfileParagraph from "./ProfileParagraph"; 

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

interface PersonProfileProps {
  person: Person;
}

export default function ProfileCard({ person }: PersonProfileProps) {
  return (
    <>
      <ProfileParagraph title="Imię" label={person.firstName} />
      <ProfileParagraph title="Nazwisko" label={person.lastName} />
      <ProfileParagraph title="Wiek" label={person.age} />
    </>
  );
}
