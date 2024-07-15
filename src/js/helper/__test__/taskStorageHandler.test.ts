import { describe, it, expect } from "vitest";
import { Task } from "@/js/types/task";
import { taskStorageHandler } from "@/js/helper/taskStorageHandler";

describe("taskStorageHandler", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should get tasks from localStorage", () => {
    const tasks: Task[] = [
      { id: "1", title: "Test Task 1", completed: false },
      { id: "2", title: "Test Task 2", completed: true }
    ];

    localStorage.setItem("tasks", JSON.stringify(tasks));

    const result = taskStorageHandler.get();
    expect(result).toEqual(tasks);
  });

  it("should return an empty array if no tasks are in localStorage", () => {
    const result = taskStorageHandler.get();
    expect(result).toEqual([]);
  });

  it("should set tasks in localStorage", () => {
    const tasks: Task[] = [
      { id: "1", title: "New Task 1", completed: false },
      { id: "2", title: "New Task 2", completed: true }
    ];

    taskStorageHandler.set(tasks);

    const storedTasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");
    expect(storedTasks).toEqual(tasks);
  });
});
