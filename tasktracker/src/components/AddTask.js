import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    //   const [text, setText] = useState('');
    //   const [amount, setAmount] = useState(0);

    const { addTask } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTask = {
            id: Math.floor(Math.random() * 100000000),
            title,
            description,
            deadline
        }

        addTask(newTask);

        setTitle('');
        setDescription('');
        setDeadline('');
        document.getElementById('title').focus();
    }

    return (
        <div>
            <h3 className='addNewTask'>Add new task</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..."  id='title'/>
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description..." id='description'/>
                </div>
                <div className="form-control">
                    <label htmlFor="deadline">Deadline</label>
                    <input type="text" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Enter deadline..." id='deadline'/>
                </div>
                <button className="btn">Add task</button>
            </form>
        </div>
    )
}