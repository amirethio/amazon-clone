import { createContext, useReducer } from "react";
<<<<<<< HEAD
// CREATING A CONTEXT CALLED  DATACONTEXT
export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialstate }) => {

=======
export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialstate }) => {
>>>>>>> 9caef8d59edbde00cdf65585685ddd1e96b05192
  return (
    <DataContext.Provider value={useReducer(reducer, initialstate)}>
      {children}
    </DataContext.Provider>
  );
<<<<<<< HEAD

=======
>>>>>>> 9caef8d59edbde00cdf65585685ddd1e96b05192
};
