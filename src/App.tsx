import {useState, useEffect, ChangeEvent } from 'react'

import './App.css'
import Fieldset from './components/Fieldset'
import useLocalStorage from './hooks/useLocalStorage'
import uuid4 from 'uuid4'

type TaskType = {
  _id: string,
  title: string,
  isComplete: boolean
}

function App() {
  const defaultTask = {
    _id:'',
    title:'',
    isComplete: false
  }

  const [newTask, setNewTask] = useState<TaskType>(defaultTask)
  const [taskList, setTaskList] = useState<TaskType[]>([])
  const [error, setError] = useState('')
  const [value, setValue] = useLocalStorage('tasks')
  
  useEffect(()=>{
    if(value!==null){
      setTaskList([...value])
    }else{
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  },[value])
  
  const handleAddTask = () =>{
    setError('')  // resets error state
    if(newTask.title.trim()==='') {
      setError('Please add a task title')
    }else{

      setTaskList(()=>{
        const uuid = uuid4()
        setValue([...taskList,{...newTask, _id: uuid}])
        return [...taskList, {...newTask, _id: uuid}]
      })
     
      setNewTask(defaultTask)
    }
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTask({ ...newTask, title: e.target.value })
  }
  
  function handleCheckbox(id:string) {

    const updatedTaskList = taskList

    updatedTaskList.map((task)=>{
      if(task._id===id){
        task.isComplete = !task.isComplete
      }

    })

    setTaskList(()=>{
      setValue(updatedTaskList)
      return updatedTaskList
    })
  }

  return (
    <>
    <div className="container mx-auto max-w-md ">
      <h1 className=' text-5xl font-bold mx-4 mt-8' >Task Tracker</h1>
      <p className=' text-xl mx-4 my-8'>A simple Task Tracker 😎</p>

      {/* <div className="container"> */}
      
      <Fieldset legend={'Add new task'}>
        <label htmlFor="task-title" className='text-lg '>Enter a Task Title:</label>
        {error!=='' && 
          <p className='text-sm text-red-500'>{error}</p>
        }
        <input 
          className='border border-slate-500 rounded-md py-2 px-1 w-full' 
          placeholder='demo task 1' 
          value={newTask.title}
          autoFocus
          onChange={(e)=> handleOnChange(e)}
          onKeyDown={(e)=> e.key === 'Enter' ? handleAddTask() : ''}
          type="text" name="task-title" id="task-title" />
        <button onClick={handleAddTask} className='bg-green-800 font-bold text-white py-2 rounded-md'>Add Task</button>
      </Fieldset>

      <Fieldset legend='List of Tasks'>
        {taskList.length===0 &&  
          <p>No tasks right now!</p>
        }
        {taskList.length!==0 &&  taskList.map(({_id,title, isComplete},index)=> (
          <p key={index} className=' border-b-2 px-2 py-1 flex'>
            <input type="checkbox" checked={isComplete} onChange={()=>handleCheckbox(_id)} name="check" id={`${index}`} />
            <span className={isComplete ? 'px-2 text-xl line-through' : 'px-2 text-xl'} >{title}</span>
            <span className='ml-auto '>
              <button className='rounded-full mx-2 p-1 bg-blue-400 text-white'>📝</button>
              <button className='rounded-full mx-2 p-1 bg-red-400 text-white'>🚮</button>
            </span>
          </p>
        ))
          
        }
      </Fieldset>
      {/* </div> */}
    </div>
    </>
  )
}

export default App
