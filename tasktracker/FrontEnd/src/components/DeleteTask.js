import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const DeleteTask = () => {

    const { deleteTask } = useContext(GlobalContext);

    function findFinalId(parent) {
        /* Write a recursive function that will return the id of the first parent that has a non empty id */
        if (parent.id !== '') {
            return parent.id;
        }
        else {
            return findFinalId(parent.parentNode);
        }
    }

    const onSubmit = e => {
        e.preventDefault();

        var deleteTasks = document.getElementsByClassName('deleteButton');
        for (var i = 0; i < deleteTasks.length; i++) {
            if (deleteTasks[i].checked) {
                var id = findFinalId(deleteTasks[i]);
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