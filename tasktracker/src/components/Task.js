import React from 'react';

import './css/Task.css';

const Task = ({ task }) => {
  const onClick = e => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      if (e.target.id === coll[i].id) {
        coll[i].classList.toggle("active");
        var content = coll[i].nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      }
    }
  }

  return (
    <>
      <li className='Task'>
        <div className='taskContainer'>
          <button type="button" className='collapsible' onClick={onClick} id={task.id}>
            <input type='checkbox' className='checkbox' id='checkbox' />
            Task: {task.title}
          </button>     
          <div className="content">
            <span>Description: {task.description}</span>
            <span>Due: {task.deadline}</span>
          </div>
        </div>
      </li>
    </>
  )
}

export default Task;

