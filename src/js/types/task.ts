/**
 * Represents a task in the to-do list.
 * @property id - The unique identifier for the task.
 * @property title - The title or description of the task.
 * @property completed - Indicates whether the task has been completed.
 */
export interface Task {
  id: string;
  title: string;
  completed: boolean;
}
