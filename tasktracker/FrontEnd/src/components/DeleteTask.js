import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const DeleteTask = () => {

    const { deleteTask } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        var deleteTasks = document.getElementsByClassName('deleteButton');
        for (var i = 0; i < deleteTasks.length; i++) {
            if (deleteTasks[i].checked) {
                var id = deleteTasks[i].dataset.taskid;
                deleteTask(id);
            }
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='text-center'>
                    <button className="btn btn-danger mt-2">Delete task</button>
                </div>
            </form>
        </div>
    )
}