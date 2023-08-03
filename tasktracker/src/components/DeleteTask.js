import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const DeleteTask = () => {

    const { deleteTask } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        var deleteTasks = document.getElementsByClassName('deleteCheckbox');
        for (var i = 0; i < deleteTasks.length; i++) {
            if (deleteTasks[i].checked) {
                deleteTask(deleteTasks[i].parentElement.id);
            }
        }
    }

    return (
        <div>
            <section className='listSection'>
                <form onSubmit={onSubmit}>
                    <button className="btn">Delete task</button>
                </form>
            </section>
        </div>
    )
}