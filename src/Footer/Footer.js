import React from "react";
import { Row } from "../Row/Row";
import "./Footer.css";

export const Footer = ({
  listLength,
  footerInputs,
  currentStatus,
  onStatusChange,
  deleteAllTasks,
}) => {
  const completedText =
    listLength > 1 ? `${listLength} items left` : `${listLength} item left`;

  return (
    <Row>
      <div className="footer">
        <div className="itemsLeft">{completedText}</div>
        <div className="tasksStatus">
          {footerInputs.map((statusText) => {
            return (
              <div
                className="eachStatus"
                onClick={() => onStatusChange(statusText)}
              >
                <input
                  type="radio"
                  id={statusText}
                  checked={currentStatus === statusText}
                  onClick={() => onStatusChange(statusText)}
                />
                <label>{statusText}</label>
              </div>
            );
          })}
        </div>
        <div className="clearCompleted" onClick={deleteAllTasks}>
          Clear Completed
        </div>
      </div>
    </Row>
  );
};
