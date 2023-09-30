import {useState} from 'react'
import Modal from './Modal'
import Fieldset from './Fieldset'
import { ActionOnTaskProp } from '../types/task.type';

interface EditTaskProp extends ActionOnTaskProp {
    handleEditTask: (id:string, updatedTitle:string)=> void
}


const EditTask = ({task, modalElementRef, handleEditTask} : EditTaskProp) => {

    const [taskToUpdate, setTaskToUpdate] = useState(task)
    const [error, setError] = useState('')

    const handleEditTaskForm = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
        setError('')
        if(taskToUpdate.title.trim()!==""){
            handleEditTask(taskToUpdate._id, taskToUpdate.title.trim())
            modalElementRef.current?.close()
            
        }else{
            setError('Please input proper title')
        }
    }

  return (
    <Modal title={`Edit Task "${task.title}"`} modalElementRef={modalElementRef} >
        <Fieldset legend="Edit Task">
            <form id={'edit-task-form-'+task._id} className="grid gap-2" onSubmit={handleEditTaskForm}>
                <label htmlFor={'edit-task-'+task._id} className='font-semibold'>
                    {task.isComplete ? 'Task is already marked as "Complete", change task status to update it.': 'Enter updated title:'}
                </label>
                {error!=='' && 
                    <p className='text-sm text-red-500'>{error}</p>
                }
                <input 
                    disabled={task.isComplete} 
                    type="text" 
                    id={'edit-task-'+task._id} 
                    placeholder="Type here" 
                    value={taskToUpdate.title} 
                    onChange={(e)=> setTaskToUpdate({...taskToUpdate, title: e.target.value})}
                    className="input input-bordered w-full" 
                />
                <button disabled={task.isComplete} type="submit" className="btn btn-success">Update Task</button>
            </form>
        </Fieldset>
    </Modal>
  )
}

export default EditTask