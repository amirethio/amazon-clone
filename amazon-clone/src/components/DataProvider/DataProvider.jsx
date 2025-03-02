import { createContext, useReducer } from "react";
// CREATING A CONTEXT CALLED  DATACONTEXT
export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialstate }) => {

  return (
    <DataContext.Provider value={useReducer(reducer, initialstate)}>
      {children}
    </DataContext.Provider>
  );
};
