import React, { useState } from 'react';
import SortList from './sortList';

export default function Todo()
{
    const [task,setTask]=useState([]);
    const [newTask,setNewtask]=useState('');

    const addTask=()=>{
        if(newTask.trim()!=='')
        {
        setTask([...task,{id:Date.now(),text:newTask}]);
        setNewtask('');
        }
    }

    const deleteTask=(taskid)=>{
      const updatedid=task.filter(task=>task.id !== taskid);
      setTask(updatedid);
    }
    return(
        <div>
        <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e)=>{setNewtask(e.target.value)}}
        />
         <button onClick={addTask}>Add Task {}</button>
         <SortList taski={[...task]}/>
         <ul>
            {
                task.map(task=>(
                    <li key={task.id}>
                     {task.text}
                     <button onClick={()=>deleteTask(task.id)}>Delete task</button>
                    </li>
                ))
            }
         </ul>
        
      </div>
   
        </div>
    )
}