import type { Task } from "./Task";

export default interface IRepository {
  //getById(id: string): Promise<T | null>;
  getAll(): Promise<Task[]>;
  create(task: Task): Promise<Task>;
  //update(id: string, data: T): Promise<T | null>;
  //delete(id: string): Promise<boolean>;
}
