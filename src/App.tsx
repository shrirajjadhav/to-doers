import {useState, useEffect, ChangeEvent } from 'react'
import { TaskType } from './types/task.type'


import useLocalStorage from './hooks/useLocalStorage'
import uuid4 from 'uuid4'
import Header from './components/Header'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import Footer from './components/Footer'



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

  function handleNewTaskInputChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTask({ ...newTask, title: e.target.value })
  }
  
  function handleIsCompleteCheckbox(id:string) {

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
    <Header />
    <div className="container mx-auto max-w-md ">
      <AddTask error={error} onChangeHandler={handleNewTaskInputChange} newTask={newTask} handleAddTask={handleAddTask} />
      <TaskList taskList={taskList} onChangeHandler={handleIsCompleteCheckbox} />
    </div>
    <Footer />
    </>
  )
}

export default App
