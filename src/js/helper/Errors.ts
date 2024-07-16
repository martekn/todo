/**
 * Custom error class for handling cases where a DOM element is not found.
 *
 * @class
 * @extends {Error}
 */
export class ElementNotFoundError extends Error {
  constructor(selector: string) {
    super(`Element with selector '${selector}' not found.`);
    this.name = "ElementNotFoundError";
  }
}
