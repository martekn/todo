import { safeQuerySelector } from "@/js/helper/safeQuerySelector";
import { taskStorageHandler } from "@/js/helper/taskStorageHandler";
import { clearButtonVisible } from "@/js/helper/clearButtonVisible";
import { ErrorAlert } from "@/js/components/ErrorAlert";

/**
 * Clears all tasks from the task container and local storage.
 * Uses the taskStorageHandler to clear tasks and safeQuerySelector to select the task container.
 * Hides the clear button after clearing tasks.
 *
 * @throws {ElementNotFoundError} If the task container element is not found.
 */
export const clearTasks = () => {
  try {
    // Not using safeQuerySelector to take advantage
    // the defaults ability to return null
    const clearError = document.querySelector("#clear-error");

    if (clearError) {
      clearError.remove();
    }

    taskStorageHandler.clear();
    const list = safeQuerySelector("#task-container");
    list.innerHTML = "";
    clearButtonVisible.hide();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Caught an unknown error", error);
    }

    safeQuerySelector("#task-container").append(
      new ErrorAlert("Unable clear tasks. Please try again later", "clear-error")
    );
  }
};
