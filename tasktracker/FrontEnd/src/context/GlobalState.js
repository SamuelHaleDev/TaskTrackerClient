import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  tasks: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addTask(task) {
    dispatch({
      type: 'ADD_TASK',
      payload: task
    });
  }

  function deleteTask(id) {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    });
  }

  return (<GlobalContext.Provider value={{
    tasks: state.tasks,
    addTask,
    deleteTask
  }}>
    {children}
  </GlobalContext.Provider>);
}