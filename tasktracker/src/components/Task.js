import React, { useState } from 'react';

import './css/Task.css';

const Task = ({ task }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <li className='Task d-flex align-items-start' id={task.id}>
        <div class="card" style={{ width: '18rem' }}>
          <button type="button" class="card-header" data-toggle="collapse" data-target={`#collapse-${task.id}`} aria-expanded="true" aria-controls={`#collapse-${task.id}`} onClick={handleCollapseToggle}>
            {task.title}
          </button>
          <div className={`collapse ${isCollapsed ? '' : 'show'}`} data-parent=".TaskList">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{task.deadline}</li>
              <li class="list-group-item">{task.description}</li>
              <li class="list-group-item">
                <div class="form-switch row align-items-center justify-content-between px-0">
                  <div class="col-auto">
                    <label class="form-check-label col flex-shrink-0" for="flexSwitchCheckDefault">Complete Task</label>
                  </div>
                  <div class="col-auto">
                    <input class="form-check-input mx-4" type="checkbox" />
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="form-switch row align-items-center justify-content-between px-0">
                  <div class="col-auto">
                    <label class="form-check-label col flex-shrink-0" for="flexSwitchCheckDefault">Delete Task</label>
                  </div>
                  <div class="col-auto">
                    <input class="form-check-input mx-4 deleteButton" type="checkbox" />
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

