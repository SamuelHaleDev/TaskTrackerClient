import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    //   const [text, setText] = useState('');
    //   const [amount, setAmount] = useState(0);

    const { addTask } = useContext(GlobalContext);

    const addOne = (e) => {
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
            <form onSubmit={addOne} className='text-center'>
                <div className='text-center'>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..."  id='title'/>
                </div>
                <div className='text-center'>
                    <label htmlFor="description">Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description..." id='description'/>
                </div>
                <div className='text-center'>
                    <label htmlFor="deadline">Deadline</label>
                    <input type="text" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Enter deadline..." id='deadline'/>
                </div>
                <button type='submit' className='btn btn-success mt-2'>Add task</button>

            </form>
        </div>
    )
}