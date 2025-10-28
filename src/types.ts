export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  checked: boolean;
  rating: number;
  photo?: string;
  birthDate?: string; 
}

export type Action =
  | { type: "check"; payload: number }
  | { type: "rate"; payload: number }
  | { type: "delete"; payload: number }
  | { type: "add"; payload: Omit<Person, 'id'> } 
  | { type: "edit"; payload: Person };