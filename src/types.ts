export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  checked: boolean;
  rating: number;
}

export type Action =
  | { type: "check"; payload: number }
  | { type: "rate"; payload: number }
  | { type: "delete"; payload: number };
