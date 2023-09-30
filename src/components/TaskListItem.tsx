import { useRef } from "react";
import { SlOptions } from "react-icons/sl";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { TaskType } from "../types/task.type";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

type TaskListItemProp = {
  task: TaskType;
  onChangeHandler: (id: string) => void,
  handleEditTask: (id:string, updatedTitle:string)=> void
  handleDeleteTask: (id: string) => void,
};

const TaskListItem = ({ task, onChangeHandler, handleEditTask, handleDeleteTask }: TaskListItemProp) => {

  const editModalElementRef = useRef<HTMLDialogElement>(null)
  const deleteModalElementRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <div
        className=" border-b-2 px-2 py-1 flex"
        style={{ alignItems: "center" }}
      >
        <input
          type="checkbox"
          className="checkbox checkbox-success"
          id={task._id}
          checked={task.isComplete}
          onChange={() => onChangeHandler(task._id)}
        />
        <label
          className={
            task.isComplete
              ? "px-2 text-xl line-through text-slate-300"
              : "px-2 text-xl"
          }
          htmlFor={task._id}
        >
          {task.title}
        </label>
        <button
          className="btn ml-auto "
          id={"toggleBtn-" + task._id}
          onClick={() => {
            const theClassList = document.getElementById(
              `collapse-${task._id}`
            )?.classList;
            theClassList?.forEach((className) => {
              if (className === "hidden") {
                theClassList?.remove("hidden");
                theClassList?.add("flex");
              } else {
                theClassList?.remove("flex");
                theClassList?.add("hidden");
              }
            });
          }}
        >
          <SlOptions />
        </button>
      </div>

      <div className=" hidden" id={"collapse-" + task._id}>
        <button onClick={()=> editModalElementRef.current?.showModal()} className="btn mx-1 btn-info flex-1" id={"edit-" + task._id}>
          <FaPenToSquare /> {" Edit"}
        </button>
        <button onClick={()=> deleteModalElementRef.current?.showModal()}  className="btn mx-1 btn-error flex-1" id={"delete-" + task._id}>
          <FaTrashCan /> {" Delete"}
        </button>
      </div>

      <EditTask task={task} handleEditTask={handleEditTask} modalElementRef={editModalElementRef} />
      <DeleteTask task={task} handleDeleteTask={handleDeleteTask} modalElementRef={deleteModalElementRef} />

      

      

      
    </>
  );
};

export default TaskListItem;
