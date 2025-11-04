import data from './module-data'
import AppReducer from './AppReducer';
import { useReducer } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, data);
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;