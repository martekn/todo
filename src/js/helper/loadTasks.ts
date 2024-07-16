import { safeQuerySelector } from "@/js/helper/safeQuerySelector";
import { TaskItem } from "@/js/components/TaskItem";
import { Task } from "@/js/types/task";
import { clearButtonVisible } from "@/js/helper/clearButtonVisible";

/**
 * Loads tasks from local storage and appends them to the task container in the DOM.
 * If any tasks are found, makes the clear button visible.
 *
 * Uses the safeQuerySelector function to safely select the task container.
 *
 * @throws {ElementNotFoundError} If the task container element is not found.
 */
export const loadTasks = () => {
  try {
    const list = safeQuerySelector<HTMLUListElement>("#task-container");

    const tasksJson = localStorage.getItem("tasks") ?? "[]";
    const tasks: Task[] = JSON.parse(tasksJson);

    for (const task of tasks) {
      const { id, completed, title } = task;
      const taskItem: TaskItem = new TaskItem(id, completed, title);
      list.appendChild(taskItem);
    }
    if (tasks.length > 0) {
      clearButtonVisible.show();
    }
  } catch (error) {
    console.error(error);
  }
};
