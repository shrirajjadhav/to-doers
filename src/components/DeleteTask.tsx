
import Modal from './Modal'
import Fieldset from './Fieldset'
import { ActionOnTaskProp } from '../types/task.type'

interface DeleteTaskProp extends ActionOnTaskProp {
    handleDeleteTask: (id:string)=> void
}

const DeleteTask = ({task, modalElementRef, handleDeleteTask} : DeleteTaskProp) => {

    const handleDeleteTaskForm = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
        handleDeleteTask(task._id)
        modalElementRef.current?.close()
    }

  return (
    <Modal title={`Delete Task "${task.title}"`} modalElementRef={modalElementRef} >
        <Fieldset legend="Delete Task">
        <form id={'delete-task-form-'+task._id} className="grid gap-2" onSubmit={handleDeleteTaskForm}>
                <label htmlFor={'delete-task-'+task._id} className='font-semibold'>
                    {task.isComplete ? 'Delete Task:': 'Mark the task as "Complete" to delete it!'}
                </label>
                <input 
                    disabled
                    type="text" 
                    id={'delete-task-'+task._id} 
                    placeholder="Type here" 
                    value={task.title} 
                    className="input input-bordered w-full" 
                />
                <button disabled={!task.isComplete} type="submit" className="btn btn-success">Delete Task</button>
            </form>        
        </Fieldset>
    </Modal>
  )
}

export default DeleteTask