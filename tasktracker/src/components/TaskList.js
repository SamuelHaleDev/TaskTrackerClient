import React, {useContext} from 'react';
import  Task  from './Task';
import './css/Task.css';

import { GlobalContext } from '../context/GlobalState';

export const TaskList = () => {
  const { tasks } = useContext(GlobalContext);

  return (
    <div>
      <section className='listSection'>
        <h3>Tasks</h3>
        <ul className="list">
          {tasks.map(task => (<Task key={task.id} task={task} />))}
        </ul>
      </section>
    </div>
  )
}