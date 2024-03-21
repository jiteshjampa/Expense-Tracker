import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial State
const initialstate = {
  Transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//CreateContext
export const GlobalContext = createContext(initialstate);
//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);
  //Actions
  function deleteTransction(id) {
    dispatch({
      type: "Delete_Transaction",
      payload: id,
    });
  }
  function addTransction(transaction) {
    dispatch({
      type: "Add_Transaction",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        Transactions: state.Transactions,
        deleteTransction,
        addTransction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
