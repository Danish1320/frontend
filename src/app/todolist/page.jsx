'use client'
import React, { useState } from 'react'

const TodoList = () => {

    const[count,setCount] = useState(1);

    const [taskList, setTaskList] = useState([])

    const addTask=(e) => {
        if(e.code==='Enter'){
            console.log(e.target.value);
            e.target.value='';
        }
    }
  return (
    <div className='max-w-5xl mx-auto mt-6'>
        <div className='border shadow rounded-3xl'>
            <div className='p-4 border-b-2'>
                <input
                onKeyDown={addTask}
                placeholder='Add a new task'
                type="text"
                className='w-full p-3 bg-gray-300 rounded-xl outline-none' />

            </div>
            <div className='p-6'>
                <h1 className='text-3xl text-red-500'>{count}</h1>
                <button className='bg-gray-300 p-4'
                    onClick={() =>{setCount(count+1); console.log(count);}}
                >Add Count
                </button>

            </div>

        </div>
    
    </div>
  )
}

export default TodoList;
