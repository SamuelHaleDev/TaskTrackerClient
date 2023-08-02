import React from 'react';

import './css/Task.css';

const Task = ({ task }) => {
  const onClick = e => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].classList.toggle("active");
      var content = coll[i].nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    }
  }

  return (
    <>
      <li className='Task'>
        <button type="button" className='collapsible' onClick={onClick}>Task: {task.title}</button>
        <div className="content">
          <span>Description: {task.description}</span>
          <span>Due: {task.deadline}</span>
        </div>
      </li>
    </>
  )
}

export default Task;

