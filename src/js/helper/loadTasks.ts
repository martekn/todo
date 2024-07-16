import { safeQuerySelector } from "@/js/helper/safeQuerySelector";
import { TaskItem } from "@/js/components/TaskItem";
import { clearButtonVisible } from "@/js/helper/clearButtonVisible";
import { ErrorAlert } from "@/js/components/ErrorAlert";
import { taskStorageHandler } from "./taskStorageHandler";

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

    const tasks = taskStorageHandler.get();

    for (const task of tasks) {
      const { id, completed, title } = task;
      const taskItem = new TaskItem(id, completed, title);
      list.appendChild(taskItem);
    }
    if (tasks.length > 0) {
      clearButtonVisible.show();
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Caught an unknown error", error);
    }

    safeQuerySelector("#task-container").append(
      new ErrorAlert("Unable to load tasks, please try again later", "load-error")
    );
  }
};
