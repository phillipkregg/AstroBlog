import { useState } from "react";
import TaskItem from "./TaskItem";
import type { Task } from "./Task";
import type { GetTasksType } from "../../pages/api/tasks.json";

/* The Create Task button absolutely will not work with the following imports enabled */
//import Container from "typedi";
//import TaskService from "./TaskService";

const TaskListContainer = ({ tasks }: { tasks: GetTasksType[] }) => {
  console.log("Task List Container component === data ======> ", tasks);

  const [task, setTask] = useState<Task>();
  const [taskList, setTaskList] = useState(tasks);

  const reFetch = async () => {
    const response = await fetch("http://localhost:3000/api/tasks.json");
    const data = await response.json();
    setTaskList(data);
  };

  const createTask = () => {
    console.log("Task List Container !!! Create Task Clicked");

    const tempTask: Task = { name: "asdfasdfasdf", completed: false };

    fetch("http://localhost:3000/api/tasks.json", {
      method: "POST",
      body: JSON.stringify({ data: tempTask }),
    })
      .then((response) => response.json())
      .then((response) => {
        reFetch();
      });
  };

  const updateTask = () => {};

  const deleteTask = (task: Task) => {};

  return (
    <div>
      <h2 className="text-2xl mb-6">Task List</h2>
      <button
        onClick={createTask}
        className="py-2 px-4 border rounded-md border-blue-800 bg-blue-500 text-white"
      >
        Create Task
      </button>
      <ul className="mt-8">
        {taskList.map((task, idx) => (
          <TaskItem
            key={idx}
            task={task}
            setTask={setTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskListContainer;
