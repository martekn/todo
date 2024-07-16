import { Task } from "@/js/types/task";
import { safeQuerySelector } from "@/js/helper/safeQuerySelector";
import { taskStorageHandler } from "@/js/helper/taskStorageHandler";
import { clearButtonVisible } from "@/js/helper/clearButtonVisible";

/**
 * Represents a task item element in the DOM, extending HTMLElement.
 * Implements the Task interface, with properties for id, completed status, and title.
 *
 * @class
 * @extends {HTMLElement}
 * @implements {Task}
 */
export class TaskItem extends HTMLElement implements Task {
  id: string;
  completed: boolean;
  title: string;

  constructor(id: string, completed: boolean, title: string) {
    super();

    this.id = id;
    this.completed = completed;
    this.title = title;
  }

  connectedCallback() {
    this.render();
  }

  updateStorage(e: Event) {
    const tasks = taskStorageHandler.get();

    const updatedTasks = tasks.map((task) => {
      if (task.id === this.id) {
        task.completed = (e.target as HTMLInputElement).checked;
      }
      return task;
    });

    taskStorageHandler.set(updatedTasks);
  }

  removeTask() {
    const tasks = taskStorageHandler.get();
    const updatedTasks = tasks.filter((task) => task.id !== this.id);
    taskStorageHandler.set(updatedTasks);
    if (updatedTasks.length === 0) {
      clearButtonVisible.hide();
    }
    this.remove();
  }

  render() {
    try {
      const template = safeQuerySelector<HTMLTemplateElement>("#task-item");

      const item: DocumentFragment = template.content.cloneNode(true) as DocumentFragment;
      const listItem = safeQuerySelector<HTMLUListElement>("li", item);
      const label = safeQuerySelector<HTMLLabelElement>("label", item);
      const checkbox = safeQuerySelector<HTMLInputElement>("input", item);
      const deleteButton = safeQuerySelector<HTMLButtonElement>(".delete-button", item);

      listItem.id = this.id;

      label.innerText = this.title;
      label.setAttribute("for", `input-${this.id}`);

      checkbox.checked = this.completed;
      checkbox.id = `input-${this.id}`;
      checkbox.addEventListener("change", this.updateStorage.bind(this));

      deleteButton.addEventListener("click", this.removeTask.bind(this));

      this.appendChild(item);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Caught an unknown error", error);
      }
    }
  }
}

customElements.define("task-item", TaskItem);
