import { ElementNotFoundError } from "@/js/helper/Errors";

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
