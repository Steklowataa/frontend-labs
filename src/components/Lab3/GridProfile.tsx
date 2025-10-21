import React, { useReducer, useEffect } from "react";
import AppReducer from "../../data/AppReducer";
import { Person } from "../../types";

interface GridProfileProps {
  element: React.ComponentType<Person & {
    onDelete?: () => void;
    onCheck?: () => void;
    onRate?: () => void;
  }>;
  data: Person[];
}

const GridProfile: React.FC<GridProfileProps> = ({ element: Element, data }) => {
  const [state, dispatch] = useReducer(AppReducer, [], () => {
    const saved = localStorage.getItem("peopleData");
    return saved ? JSON.parse(saved) : data;
  });

//   useEffect(() => {
//     localStorage.setItem("peopleData", JSON.stringify(state));
//   }, [state]);

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
          onDelete={() => dispatch({ type: "delete", payload: person.id })}
          onCheck={() => dispatch({ type: "check", payload: person.id })}
          onRate={() => dispatch({ type: "rate", payload: person.id })}
        />
      ))}
    </div>
  );
};

export default GridProfile;
