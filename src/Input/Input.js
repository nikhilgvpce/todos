import React, { useState } from "react";
import { Row } from "../Row/Row";
import "./Input.css";

export const Input = ({ hasActiveTask, onAddListItem, completeAllTasks }) => {
  const taskObj = {
    id: 0,
    name: "sample",
    isActive: true,
    shouldStrike: false,
  };
  const [currentTask, setCurrentTask] = useState("");
  const [taskId, setTaskId] = useState(0);

  const handleOnChangeInput = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      const newTaskId = taskId;
      const newTask = Object.create(taskObj);
      newTask.name = e.target.value;
      newTask.id = newTaskId + 1;
      setTaskId((id) => id + 1);
      setCurrentTask("");
      onAddListItem(newTask);
    }
  };

  return (
    <Row>
      {hasActiveTask && (
        <span onClick={completeAllTasks}>
          <i class="fa fa-chevron-down"></i>
        </span>
      )}
      <input
        type="text"
        value={currentTask}
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChangeInput}
      />
    </Row>
  );
};
