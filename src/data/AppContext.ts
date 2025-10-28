import { createContext, Dispatch } from 'react';
import { Person, Action } from '../types';

export interface AppContextType {
  items: Person[];
  dispatch: Dispatch<Action>;
}

const AppContext = createContext<AppContextType>({
  items: [],
  dispatch: () => null,
});

export default AppContext;