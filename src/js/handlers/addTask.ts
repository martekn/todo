import { safeQuerySelector } from "@/js/helper/safeQuerySelector";
import { TaskItem } from "@/js/components/TaskItem";
import { nanoid } from "@/js/helper/nanoid";
import { validateTaskInput } from "@/js/helper/validateTaskInput";
import { clearButtonVisible } from "@/js/helper/clearButtonVisible";
import { Task } from "@/js/types/task";
import { taskStorageHandler } from "../helper/taskStorageHandler";

/**
 * Sets the invalid state for the task input, including updating the DOM to reflect the error.
 *
 * @param error - The error message to display.
 * @throws {ElementNotFoundError} If any required DOM elements (input container, task input, input error) are not found.
 */
const setInvalidState = (error: string) => {
  const inputContainer = safeQuerySelector<HTMLDivElement>("#input-container");
  const input = safeQuerySelector<HTMLInputElement>("#task-input", inputContainer);
  input.classList.add("is-invalid");
  inputContainer.classList.add("is-invalid");
  const errorElement = safeQuerySelector<HTMLDivElement>("#input-error");
  errorElement.innerText = error;
};

/**
 * Adds a new task to the task container and local storage.
 * Validates the input value before adding the task.
 *
 * @param e - The event object from the form submission.
 * @throws {ElementNotFoundError} If any required DOM elements (input container, task input, task container, input error) are not found.
 */
export const addTask = (e: Event) => {
  try {
    e.preventDefault();

    const inputContainer = safeQuerySelector<HTMLDivElement>("#input-container");
    const input = safeQuerySelector<HTMLInputElement>("#task-input", inputContainer);
    const list = safeQuerySelector("#task-container");

    input.classList.remove("is-invalid");
    inputContainer.classList.remove("is-invalid");

    const value = input.value.trim();
    const validation = validateTaskInput(value);
    if (!validation.isValid) {
      setInvalidState(validation.error ?? "");
      return;
    }

    const task: Task = { id: nanoid(), completed: false, title: value };
    const { id, completed, title } = task;
    const taskItem: TaskItem = new TaskItem(id, completed, title);

    list.appendChild(taskItem);
    const tasks = taskStorageHandler.get();
    tasks.push(task);
    taskStorageHandler.set(tasks);
    input.value = "";
    clearButtonVisible.show();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Caught an unknown error", error);
    }

    setInvalidState("Unable to add task, please try again");
  }
};
