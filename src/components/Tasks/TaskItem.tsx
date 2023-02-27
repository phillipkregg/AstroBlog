import type { Dispatch, SetStateAction } from "react";
import type { Task } from "./Task";

const TaskItem = ({
  task,
  setTask,
  updateTask,
  deleteTask,
}: {
  task: Task;
  setTask: Dispatch<SetStateAction<Task>>;
  updateTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}) => {
  return (
    <li>
      <div>
        <span className="text-lg text-gray-500 mr-4">Task # {task.id}</span>
        <input
          className="py-2 px-4 border border-gray-300"
          type="text"
          placeholder="Enter task name"
          value={task.name}
          onChange={(e) => {
            debugger;
            updateTask({
              id: task.id,
              name: e.target.value,
            });
          }}
        />
        <button className="ml-4">Edit</button>
        <button onClick={() => deleteTask(task.name)} className="ml-4">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
