import "./App.css";
import { Input } from "./Input/Input";
import { useState } from "react";
import { TasksList } from "./TasksList/TasksList";
import { Footer } from "./Footer/Footer";

function App() {
  const footerInputs = ["All", "Active", "Completed"];
  const [footerStatus, setFooterStatus] = useState("All");
  const [tasks, setTasks] = useState([]);

  const addListItem = (listItem) => {
    const newTasks = [...tasks, listItem];
    setTasks(newTasks);
  };

  const removeTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleOnStatusChange = (status) => {
    setFooterStatus(status);
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isActive = !task.isActive;
        task.shouldStrike = !task.shouldStrike;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleCompleteAllTasks = () => {
    const updatedTasks = tasks.map((task) => {
      task.isActive = false;
      task.shouldStrike = true;
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleClearCompletedTasks = () => {
    const activeTasks = tasks.filter((task) => task.isActive);
    setTasks(activeTasks);
  };

  return (
    <div className="App">
      <Input
        onAddListItem={addListItem}
        hasActiveTask={tasks && tasks.length > 0}
        completeAllTasks={handleCompleteAllTasks}
      />
      {tasks.length > 0 && (
        <>
          <TasksList
            tasks={tasks}
            removeTask={removeTask}
            completeTask={handleCompleteTask}
            showCompleted={footerStatus === "Completed"}
            showActive={footerStatus === "Active"}
            showAll={footerStatus === "All"}
          />
          <Footer
            listLength={tasks.length}
            footerInputs={footerInputs}
            onStatusChange={handleOnStatusChange}
            currentStatus={footerStatus}
            deleteAllTasks={() => handleClearCompletedTasks()}
          />
        </>
      )}
    </div>
  );
}

export default App;
