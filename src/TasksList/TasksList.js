import React from "react";
import { Row } from "../Row/Row";
import "./TasksList.css";

const Task = (props) => {
  const { task, removeTask, completeTask } = props;
  const { name, id, isActive, shouldStrike } = task;
  return (
    <div className={isActive ? "taskStyle active" : "taskStyle"}>
      <div onClick={() => completeTask(id)}>
        <i
          className={
            !isActive
              ? "fa fa-check-circle showTickIcon"
              : "fa fa-check-circle hideTickIcon"
          }
        ></i>
      </div>
      <div className={shouldStrike ? "strike" : "normal"}>{name}</div>
      <i class="fa fa-times" onClick={() => removeTask(id)}></i>
    </div>
  );
};

export const TasksList = ({
  tasks,
  removeTask,
  completeTask,
  showCompleted,
  showActive,
}) => {
  let tasksList = tasks;
  if (showActive) {
    tasksList = tasks.filter((task) => task.isActive);
  } else if (showCompleted) {
    tasksList = tasks.filter((task) => !task.isActive);
  }
  const renderList = tasksList.map((task) => {
    return (
      <Row>
        <Task task={task} removeTask={removeTask} completeTask={completeTask} />
      </Row>
    );
  });

  return <div className="tasksList">{renderList}</div>;
};
