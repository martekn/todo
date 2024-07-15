export class ElementNotFoundError extends Error {
  constructor(selector: string) {
    super(`Element with selector '${selector}' not found.`);
    this.name = "ElementNotFoundError";
  }
}
