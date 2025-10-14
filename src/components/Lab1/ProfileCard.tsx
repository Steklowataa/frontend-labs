import React from "react";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

interface ProfileCardProps {
  person: Person;
}

export default function ProfileCard({ person }: ProfileCardProps) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      padding: "15px",
      marginBottom: "10px"
    }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ padding: "8px", fontWeight: "bold", borderBottom: "1px solid #eee",width: "40%" }}>
              Imię:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
              {person.firstName}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", fontWeight: "bold", borderBottom: "1px solid #eee" }}>
              Nazwisko:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
              {person.lastName}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", fontWeight: "bold" }}>
              Wiek:
            </td>
            <td style={{ padding: "8px" }}>
              {person.age}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}