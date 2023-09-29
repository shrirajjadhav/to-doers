import {ChangeEvent} from 'react'
import Fieldset from './Fieldset'
import { TaskType } from '../types/task.type'

type AddTaskProp = {
    error: string,
    handleAddTask: ()=>void,
    onChangeHandler: (e:ChangeEvent<HTMLInputElement>)=>void,
    newTask: TaskType
}

const AddTask = ({error, handleAddTask, onChangeHandler, newTask} : AddTaskProp) => {
  return (
    <>
        <Fieldset legend={'Add new task'}>
        <label htmlFor="task-title" className='text-lg '>Enter a Task Title:</label>
        {error!=='' && 
          <p className='text-sm text-red-500'>{error}</p>
        }
        <input 
          className='input input-bordered w-full' 
          placeholder='demo task 1' 
          value={newTask.title}
          autoFocus
          onChange={(e)=> onChangeHandler(e)}
          onKeyDown={(e)=> e.key === 'Enter' ? handleAddTask() : ''}
          type="text" name="task-title" id="task-title" />
        <button onClick={handleAddTask} className='btn btn-success'>Add Task</button>
      </Fieldset>
    </>
  )
}

export default AddTask