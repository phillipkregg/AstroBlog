import type { APIRoute } from "astro";
import TaskService from "../../components/Tasks/TaskService";
import { Container } from "typedi";

export interface GetTasksType {
  name: string;
  completed: boolean;
}

export async function get({ params }: any) {
  const taskService = Container.get(TaskService);
  const tasks = await taskService.getAllTasks();

  return {
    body: JSON.stringify(tasks),
  };
}

export const post: APIRoute = async ({ request }) => {
  const taskService = Container.get(TaskService);

  const response = await request.json();
  const task = response.data;

  const createdTask = await taskService.createTask(task);
  console.log("Tasks API - Request Body =====> ", task);
  return {
    body: JSON.stringify({
      message: `Task saved: ${task}`,
    }),
  };
};

// export const del: APIRoute = ({ request }) => {
//   return {
//     body: JSON.stringify({
//       message: "This was a DELETE!",
//     }),
//   };
// };
