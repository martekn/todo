import { Task } from "@/js/types/task";

/**
 * A handler for storing and retrieving tasks from localStorage.
 */
export const taskStorageHandler = {
  /**
   * Retrieves the list of tasks from localStorage.
   *
   * @returns {Task[]} The list of tasks stored in localStorage. If no tasks are found, an empty array is returned.
   */
  get(): Task[] {
    const tasksJson = localStorage.getItem("tasks") ?? "[]";
    const tasks: Task[] = JSON.parse(tasksJson);

    return tasks;
  },
  /**
   * Stores the list of tasks in localStorage.
   *
   * @param {Task[]} tasks - The list of tasks to store in localStorage.
   */
  set(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },
  /**
   * Clears the list of tasks in localStorage
   */
  clear() {
    localStorage.setItem("tasks", JSON.stringify([]));
  }
};
