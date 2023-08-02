import React from 'react';

import './css/Task.css';

const Task = ({ task }) => {

  return (
    <>
      <li className='Task'>
        <a href="#">
          <span>Task: {task.title}</span>
          <span>Description: {task.description}</span>
          <span>Due: {task.deadline}</span>
        </a>
      </li>
    </>
  )
}

export default Task;

