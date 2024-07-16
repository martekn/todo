import { ElementNotFoundError } from "@/js/helper/Errors";

/**
 * Safely queries and returns a DOM element matching the specified selector.
 * Throws an error if the element is not found.
 *
 * @template T - The type of the DOM element being queried.
 * @param  selector - The CSS selector string used to query the DOM element.
 * @param target - The parent node to query within. Defaults to the entire document.
 * @returns The DOM element that matches the specified selector.
 * @throws {ElementNotFoundError} If no element is found matching the specified selector.
 */
export const safeQuerySelector = <T extends Element>(
  selector: string,
  target: ParentNode = document
): T => {
  const element = target.querySelector<T>(selector);

  if (!element) {
    throw new ElementNotFoundError(selector);
  }

  return element;
};
