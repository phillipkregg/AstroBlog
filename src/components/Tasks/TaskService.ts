import type IRepository from "./IRepository";
import type { Task } from "./Task";
import { Container, Service } from "typedi";
import TaskRepository from "./TaskRespository";

@Service()
export default class TaskService {
  constructor(public taskRepository: TaskRepository) {}

  async getAllTasks(): Promise<Task[]> {
    const repository = Container.get(TaskRepository);
    return await repository.getAll();
  }

  async createTask(task: Task): Promise<Task> {
    const repository = Container.get(TaskRepository);
    return repository.create(task);
  }

  //   async getTaskById(id: string): Promise<Task | null> {
  //     return this.taskRepository.getById(id);
  //   }

  //   async updateTask(id: string, data: Task): Promise<Task | null> {
  //     return this.taskRepository.update(id, data);
  //   }

  //   async deleteTask(id: string): Promise<boolean> {
  //     return this.taskRepository.delete(id);
  //   }
}
