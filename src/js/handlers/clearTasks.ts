import { safeQuerySelector } from "@/js/helper/safeQuerySelector";
import { taskStorageHandler } from "@/js/helper/taskStorageHandler";
import { clearButtonVisible } from "@/js/helper/clearButtonVisible";

/**
 * Clears all tasks from the task container and local storage.
 * Uses the taskStorageHandler to clear tasks and safeQuerySelector to select the task container.
 * Hides the clear button after clearing tasks.
 *
 * @throws {ElementNotFoundError} If the task container element is not found.
 */
export const clearTasks = () => {
  try {
    taskStorageHandler.clear();
    const list = safeQuerySelector("#task-container");
    list.innerHTML = "";
    clearButtonVisible.hide();
  } catch (error) {
    console.error(error);
  }
};
