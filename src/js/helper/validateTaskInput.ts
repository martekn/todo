/**
 * Interface representing the validation result.
 */
interface Validation {
  /**
   * Indicates whether the input is valid.
   */
  isValid: boolean;
  /**
   * An optional error message if the input is invalid.
   */
  error?: string;
}

/**
 * Validates the task input string.
 *
 * @param value - The input string to validate.
 * @returns The validation result.
 */
export const validateTaskInput = (value: string): Validation => {
  if (value.length === 0) {
    return { isValid: false, error: "Input cannot be empty" };
  }

  if (value.length > 150) {
    return { isValid: false, error: "You have exceeded the maximum number of 150 characters" };
  }
  return { isValid: true };
};
