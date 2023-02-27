import { prisma } from "../../pages/api/db";
import type { Task } from "./Task";
import type IRepository from "./IRepository";

import { Service } from "typedi";

@Service()
export default class TaskRepository implements IRepository {
  async getAll(): Promise<Task[]> {
    return await prisma.task.findMany();
  }

  async create(task: Task): Promise<Task> {
    await prisma.task.create({
      data: task,
    });

    return task;
  }

  // async getById(id: string): Promise<Task | null> {
  //   const result = this.tasks.find((item) => item.id === id);
  //   return result ? { ...result } : null;
  // }

  // async getAll(): Promise<Task[]> {
  //   return prisma.task.findMany();
  // }

  // async update(id: string, data: T): Promise<T | null> {
  //   const index = this.data.findIndex((item) => item.id === id);
  //   if (index === -1) return null;
  //   this.data[index] = { ...data };
  //   return this.data[index];
  // }

  // async delete(id: string): Promise<boolean> {
  //   const index = this.data.findIndex((item) => item.id === id);
  //   if (index === -1) return false;
  //   this.data.splice(index, 1);
  //   return true;
  // }
}
