import React, { useState } from 'react';


export default function Todo()
{
    const [task,setTask]=useState([]);
    const [newTask,setNewtask]=useState('');
    const [sortby,setSortby]=useState('default');
    const [search,setSearch]=useState('');
    const [filter,setFilter]=useState([]);
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
    const sortTasks=()=>{
      const sortedtask=[...task];
      console.log("clicked")
      if(sortby === 'default')
      {

      }
      else if(sortby === 'ascend')
      {
       sortedtask.sort((a,b)=>a.text.localeCompare(b.text));
      }
      else if(sortby === 'descend'){
        sortedtask.sort((a,b)=>b.text.localeCompare(a.text));
      }
      setTask(sortedtask);
    }

    const serachHere=()=>{
      const searched=[...task];
      const newArr=searched.filter((t)=>t.text.toLowerCase().includes(search.toLowerCase()));
      console.log(newArr)
      setFilter(newArr);
    }
    const handleSearhChange=(e)=>{
      setSearch(e.target.value);
      serachHere();
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
         <button onClick={sortTasks}> Sort</button>
          <select onChange={(e)=>setSortby(e.target.value)}>
            <option value="default">Deafualt</option>
            <option value="ascend">Ascend</option>
            <option value="descend">Descend</option>

          </select>
          <br></br>
          <input type='text' value={search} placeholder='search here' onChange={handleSearhChange} />
          
           <ul>
            {
              filter.map((t)=>(
              <li key={t.id}>
              {t.text}
              </li>
              ))
            }
           </ul>
         <ul>
            {
                task.map(task=>(
                    <li key={task.id}>
                     {task.text}
                     <button className='delete-btn' onClick={()=>deleteTask(task.id)}>Delete task</button>
                    </li>
                ))
            }
         </ul>
        
      </div>
   
        </div>
    )
}