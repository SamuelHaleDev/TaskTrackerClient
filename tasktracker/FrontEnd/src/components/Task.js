import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import './css/Task.css';

const Task = ({ task }) => {
  const [isCollapsed, setIsCollapsed] = useState(task.isCollapse || true);
  const [isChecked, setIsChecked] = useState(task.isComplete || false);

  const { editTask } = useContext(GlobalContext);

  const handleCollapseToggle = () => {
    const newIsCollapsed = !isCollapsed;
    setIsCollapsed(newIsCollapsed);

    editTask(task._id, task.title, task.description, task.deadline, task.isComplete, !task.isCollapse);
  };

  const handleCompleteToggle = () => {
    setIsChecked(!isChecked);
    // get the call to the backend made to update the task complete status
    var id = task._id;
    var isComplete = !task.isComplete;
    editTask(id, task.title, task.description, task.deadline, isComplete, task.isCollapsed);
  };

  const formatDate = (dateString) => {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZoneName: 'short'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <li className='Task d-flex align-items-start' id={task._id}>
        <div className="card" style={{ width: '18rem' }}>
          <button type="button" className="card-header" data-toggle="collapse" data-target={`#collapse-${task._id}`} aria-expanded="true" aria-controls={`#collapse-${task._id}`} onClick={handleCollapseToggle}>
            {task.title}
          </button>
          <div className={`collapse ${task.isCollapse ? '' : 'show'}`} data-parent=".TaskList">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{formatDate(task.deadline)}</li>
              <li className="list-group-item">{task.description}</li>
              <li className="list-group-item">
                <div className="form-switch row align-items-center justify-content-between px-0">
                  <div className="col-auto">
                    <label className="form-check-label col flex-shrink-0" htmlFor="flexSwitchCheckDefault">Complete Task</label>
                  </div>
                  <div className="col-auto">
                    <input className="form-check-input mx-4 isCompleteButton" type="checkbox" checked={isChecked} onChange={handleCompleteToggle} data-taskid={task._id}/>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-switch row align-items-center justify-content-between px-0">
                  <div className="col-auto">
                    <label className="form-check-label col flex-shrink-0" htmlFor="flexSwitchCheckDefault">Delete Task</label>
                  </div>
                  <div className="col-auto">
                    <input className="form-check-input mx-4 deleteButton" type="checkbox" data-taskid={task._id}/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  )
}

export default Task;

