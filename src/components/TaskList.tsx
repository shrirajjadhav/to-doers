import React from "react";
import Fieldset from "./Fieldset";
import TaskListItem from "./TaskListItem";
import { TaskType } from "../types/task.type";

type TaskListProp = {
    taskList: TaskType[],
    onChangeHandler: (id:string)=> void,
    handleEditTask: (id:string, updatedTitle:string)=> void
    handleDeleteTask: (id:string)=> void,
}

const TaskList = ({taskList, onChangeHandler, handleEditTask, handleDeleteTask} : TaskListProp) => {
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
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
      </Fieldset>
    </>
  );
};

export default TaskList;
