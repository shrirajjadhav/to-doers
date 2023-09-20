import {useState, useEffect} from 'react'

import './App.css'
import Fieldset from './components/Fieldset'
import useLocalStorage from './hooks/useLocalStorage'
// import Card from './components/Card'

function App() {

  const [newTask, setNewTask] = useState('')
  const [taskList, setTaskList] = useState<string[]>([])
  const [error, setError] = useState('')
  const [value, setValue] = useLocalStorage('tasks')

  // useEffect(()=>{
  //   setTaskList(()=> value===null ? [] : value)
    
  // },[value])
  useEffect(()=>{
    
    if(value!==null){
      // const allTasks = JSON.parse(allTasksJSON)
      setTaskList([...value])
    }else{
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  },[value])
  // useEffect(()=>{
  //   const allTasksJSON = localStorage.getItem('tasks')
  //   if(allTasksJSON!==null){
  //     const allTasks = JSON.parse(allTasksJSON)
  //     setTaskList([...allTasks])
  //   }else{
  //     localStorage.setItem('tasks', JSON.stringify([]))
  //   }
  // },[])

  // const updateLocalStorage = useCallback(()=>{
  //   localStorage.setItem('tasks',JSON.stringify(taskList))
  // },[taskList])

  const handleAddTask = () =>{
    setError('')  // resets error state
    if(newTask.trim()==='') {
      setError('Please add a task title')
    }else{

      setTaskList(()=>{
        // localStorage.setItem('tasks',JSON.stringify([...taskList,newTask.trim()]))
        setValue([...taskList,newTask.trim()])
        return [...taskList, newTask.trim()]
      })
      // setValue(taskList)
      // updateLocalStorage()
      setNewTask('')
    }
  }

  // const handleAddTask = useCallback(()=>{
  //   setError('')
  //   if(newTask.trim()===''){
  //     setError('Please add a task title')
  //   }else{
  //     setTaskList([...taskList,newTask.trim()])
  //     localStorage.setItem('tasks', JSON.stringify(taskList))
  //     setNewTask('')
  //   }
  // },[])


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
          value={newTask}
          autoFocus
          onChange={(e)=> setNewTask(e.target.value)}
          onKeyDown={(e)=> e.key === 'Enter' ? handleAddTask() : ''}
          type="text" name="task-title" id="task-title" />
        <button onClick={handleAddTask} className='bg-green-800 font-bold text-white py-2 rounded-md'>Add Task</button>
      </Fieldset>

      <Fieldset legend='List of Tasks'>
        {taskList.length===0 &&  
          <p>No tasks right now!</p>
        }
        {taskList.length!==0 &&  taskList.map((task,index)=> (
          <p key={index} className=' border-b-2 px-2 py-1 flex'>
            <input type="checkbox" name="check" id={`${index}`} />
            <span className='px-2 text-xl'>{task}</span>
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
