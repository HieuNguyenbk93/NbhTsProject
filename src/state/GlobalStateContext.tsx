// GlobalStateContext.js
import React, {createContext, useReducer, useContext} from 'react';

// Define your initial state and reducer function
const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

// Create the context
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Create a custom hook to access the context
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
