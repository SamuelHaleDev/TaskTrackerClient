import React, {useContext} from 'react';
import Task from './Task';

import { GlobalContext } from '../context/GlobalState'

export const TaskList = () => {
  const { tasks } = useContext(GlobalContext);

  return (
    <>
      <h3>Tasks</h3>
      <ul className="list">
        {tasks.map(task => (<Task key={tasks.id} task={tasks} />))}
      </ul>
    </>
  )
}
