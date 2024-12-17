"use client"
import React, { useState } from 'react'

const HomeComponent = () => {

  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task, description);
    setTask('');
    setDescription('');
  }

  return (
    <div>
        <h2 className='text-5xl font-bold text-center bg-emerald-700 text-white p-10'>Todo App</h2>
        <form className='flex justify-center items-center gap-2 m-10' onSubmit={submitHandler}>
          <input type='text' placeholder='Enter your Task' value={task} onChange={(e) => setTask(e.target.value)} className='border border-gray-300 rounded-md p-2' />
          <input type='text' placeholder='Task Description' value={description} onChange={(e) => setDescription(e.target.value)} className='border border-gray-300 rounded-md p-2' />
          <button type='submit' className='bg-emerald-700 text-white p-2 px-4 text-lg rounded-md hover:bg-emerald-800 transition-all duration-300'>Add Task</button>
        </form>
    </div>
  )
}

export default HomeComponent