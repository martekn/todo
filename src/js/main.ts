import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/scss/main.scss";
import { safeQuerySelector } from "@/js/helper/safeQuerySelector";
import { addTask } from "@/js/handlers/addTask";
import { clearTasks } from "@/js/handlers/clearTasks";
import { loadTasks } from "./helper/loadTasks";

loadTasks();

try {
  // Create task form submit event listener
  const button = safeQuerySelector<HTMLButtonElement>("#clear-button");
  button.addEventListener("click", clearTasks);

  // Clear all tasks event listener
  const form = safeQuerySelector<HTMLFormElement>("form");
  form.addEventListener("submit", addTask);
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Caught an unknown error", error);
  }
}
