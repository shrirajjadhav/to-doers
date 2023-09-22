import { SlOptions } from "react-icons/sl";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { TaskType } from "../types/task.type";

type TaskListItemProp = {
  task: TaskType;
  onChangeHandler: (id: string) => void;
};

const TaskListItem = ({ task, onChangeHandler }: TaskListItemProp) => {
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
          className="btn ml-auto swap swap-rotate"
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
        <button className="btn mx-1 btn-info flex-1" id={"edit-" + task._id}>
          <FaPenToSquare /> {" Edit"}
        </button>
        <button className="btn mx-1 btn-error flex-1" id={"delete-" + task._id}>
          <FaTrashCan /> {" Delete"}
        </button>
      </div>
    </>
  );
};

export default TaskListItem;
