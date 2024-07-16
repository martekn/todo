import { safeQuerySelector } from "@/js/helper/safeQuerySelector";

/**
 * Object to control the visibility of the clear button.
 * Provides methods to show and hide the button by manipulating its CSS classes.
 */
export const clearButtonVisible = {
  /**
   * Shows the clear button
   * Uses safeQuerySelector to safely select the clear button element.
   *
   * @throws {ElementNotFoundError} If the clear button element is not found.
   */
  show() {
    try {
      const button = safeQuerySelector<HTMLButtonElement>("#clear-button");
      if (button.classList.contains("d-none")) {
        button.classList.remove("d-none");
      }
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Hides the clear button
   * Uses safeQuerySelector to safely select the clear button element.
   *
   * @throws {ElementNotFoundError} If the clear button element is not found.
   */
  hide() {
    try {
      const button = safeQuerySelector<HTMLButtonElement>("#clear-button");
      if (!button.classList.contains("d-none")) {
        button.classList.add("d-none");
      }
    } catch (error) {
      console.log(error);
    }
  }
};
