import React from "react";
import Fieldset from "./Fieldset";
import TaskListItem from "./TaskListItem";
import { TaskType } from "../types/task.type";

type TaskListProp = {
    taskList: TaskType[],
    onChangeHandler: (id:string)=> void
}

const TaskList = ({taskList, onChangeHandler} : TaskListProp) => {
  return (
    <>
      <Fieldset legend="List of Tasks">
        {taskList.length === 0 && <p>No tasks right now!</p>}
        {taskList.length !== 0 &&
          taskList.map((task, index) => (
            <TaskListItem
              key={index}
              task={task}
              onChangeHandler={onChangeHandler}
            />
          ))}
      </Fieldset>
    </>
  );
};

export default TaskList;
