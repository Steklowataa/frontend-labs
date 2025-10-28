import { Person, Action } from "../../src/types";

export default function AppReducer(state: Person[], action: Action): Person[] {
  switch (action.type) {
    case "check":
      return state.map(person =>
        person.id === action.payload
          ? { ...person, checked: !person.checked }
          : person
      );

    case "rate":
      return state.map(person =>
        person.id === action.payload
          ? { ...person, rating: person.rating < 10 ? person.rating + 1 : 0 }
          : person
      );

    case "delete":
      return state.filter(person => person.id !== action.payload);
    case 'add':
      const newId = Math.max(...state.map(item => item.id), 0) + 1;
      return [ ...state, { id: newId, ...action.payload } ];

    case 'edit':
      return state.map(item =>
        item.id === action.payload.id ? action.payload : item
      );

    default:
      return state;
  }
}
