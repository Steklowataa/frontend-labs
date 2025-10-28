import React, { useContext } from "react";
import { Person } from "../../types";
import AppContext from "../../data/AppContext";

interface GridProfileProps {
  element: React.ComponentType<Person>;
}

const GridProfile: React.FC<GridProfileProps> = ({ element: Element }) => {
  const { items: state } = useContext(AppContext);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state.map(person => (
        <Element
          key={person.id}
          {...person}
        />
      ))}
    </div>
  );
};

export default GridProfile;