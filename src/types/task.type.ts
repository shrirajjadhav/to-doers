import { RefObject } from "react";

export type TaskType = {
    _id: string,
    title: string,
    isComplete: boolean
}

export interface ActionOnTaskProp {
  task : TaskType,
  modalElementRef: RefObject<HTMLDialogElement>;
}