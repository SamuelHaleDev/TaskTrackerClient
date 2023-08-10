import React, { createContext, useReducer, useEffect } from 'react';
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

  useEffect(() => {
      getTasks();
  }, []);

  async function getTasks() {
    try {
        const options = {
          url: 'http://localhost:3001/api/tasks/get',
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }

        axios(options)
          .then(res => {
            console.log(res);
            console.log(res.data);
            dispatch({
              type: 'GET_TASKS',
              payload: res.data
          });
          })
        
    } catch (err) {
        dispatch({
            type: 'TASK_ERROR',
            payload: err.response.data.error
        });
    } finally {
        dispatch({
            type: 'SET_LOADING',
            payload: false
        });
    }
}


  // Actions
  async function addTask(task) {
    try {
      const options = {
        url: 'http://localhost:3001/api/tasks/add',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'

        },
        data: {
          title: task.title,
          description: task.description,
          deadline: task.deadline
        }
      }
  
      axios(options)
        .then(res => {
          console.log(res);
          console.log(res.data);
          dispatch({
            type: 'ADD_TASK',
            payload: res.data
          });
        })
        .catch(err => console.log(err));
  
      
    } catch (err) {
      const error = err.response && err.response.data && err.response.data.error ? err.response.data.error : err.message;
      dispatch({
        type: 'TASK_ERROR',
        payload: error
      });
    }
  }

  async function deleteTask(id) {
    try {
      console.log(`Sending ID: ${id}`);
      const options = {
        url: `http://localhost:3001/api/tasks/${id}`,
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }

      axios(options)
        .then(res => {
          console.log(res);
          console.log(res.data);
          dispatch({
            type: 'DELETE_TASK',
            payload: id
          });
        })

      
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