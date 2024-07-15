/**
 * Represents a task in the to-do list.
 */
export interface Task {
  /**
   * The unique identifier for the task.
   * @type {string}
   */
  id: string;

  /**
   * The title or description of the task.
   * @type {string}
   */
  title: string;

  /**
   * Indicates whether the task has been completed.
   * @type {boolean}
   */
  completed: boolean;
}
