import React, {useContext} from 'react';
import  Task  from './Task';
import './css/Task.css';

import { GlobalContext } from '../context/GlobalState';

export const TaskList = () => {
  const { tasks, loading } = useContext(GlobalContext);

  console.log("Tasks:", tasks);


  if (loading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div className=''>
      <h3 className=''>Tasks</h3>
      <div class="d-flex align-items-start">
        <ul className="list d-flex flex-row align-items-start">
          {tasks.map(task => (<Task key={task._id} task={task} />))}
        </ul>
      </div>
    </div>
  )
}