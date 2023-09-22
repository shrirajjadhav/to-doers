import {SlOptions} from 'react-icons/sl'
import {FaPenToSquare, FaTrashCan} from 'react-icons/fa6'
import { TaskType} from '../types/task.type'

type TaskListItemProp = {
    task : TaskType,
    onChangeHandler: (id: string)=>void
}


const TaskListItem = ({task , onChangeHandler}: TaskListItemProp) => {

  return (
    <>
       <div className=' border-b-2 px-2 py-1 flex' style={{alignItems: 'center'}} >
            <input type="checkbox" className="checkbox checkbox-success" id={task._id} checked={task.isComplete} onChange={()=> onChangeHandler(task._id)}  />
            <label className={task.isComplete ? 'px-2 text-xl line-through text-slate-300' : 'px-2 text-xl'} htmlFor={task._id}>{task.title}</label>
            
            <div className="dropdown dropdown-left ml-auto">
              <label tabIndex={0} className="btn m-1"><SlOptions /></label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><button className='btn-info my-1'><FaPenToSquare/>{' Edit Task'}</button></li>
                <li><button className='btn-error my-1'><FaTrashCan />{' Delete Task'}</button></li>
              </ul>
            </div>
        </div>
    </>
  )
}

export default TaskListItem