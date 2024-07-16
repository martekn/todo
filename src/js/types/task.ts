/**
 * Represents a task in the to-do list.
 */
export interface Task {
  /**
   * The unique identifier for the task.
   */
  id: string;

  /**
   * The title or description of the task.
   */
  title: string;

  /**
   * Indicates whether the task has been completed.
   * @type {boolean}
   */
  completed: boolean;
}
