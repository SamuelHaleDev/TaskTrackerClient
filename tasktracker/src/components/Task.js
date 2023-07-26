import React from 'react';

const Task = ({ task }) => {

  return (
    <div>
      <li className='Task'>
        <span>{task.title}</span>
        <span>{task.description}</span>
        <span>{task.deadline}</span>
      </li>
    </div>
  )
}

export default Task;

