import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  tasks: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTasks() {
    try {
      const res = await axios.get('/api/tasks');

      dispatch({
        type: 'GET_TASKS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TASK_ERROR',
        payload: err.response.data.error
      });
    }}

  // Actions
  async function addTask(task) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      axios.post('/api/tasks', task, config);
      
    dispatch({
      type: 'ADD_TASK',
      payload: task
    });
  } catch (err) {
    dispatch({
      type: 'TASK_ERROR',
      payload: err.response.data.error
    });
  }}

  async function deleteTask(id) {
    try {
      axios.delete(`/api/tasks/${id}`);

      dispatch({
        type: 'DELETE_TASK',
        payload: id
      });
  } catch (err) {
    dispatch({
      type: 'TASK_ERROR',
      payload: err.response.data.error
    });
  }}

  return (<GlobalContext.Provider value={{
    tasks: state.tasks,
    error: state.error,
    loading: state.loading,
    getTasks,
    addTask,
    deleteTask
  }}>
    {children}
  </GlobalContext.Provider>);
}