import { describe, it, expect } from "vitest";
import { safeQuerySelector } from "@/js/helper/safeQuerySelector";
import { ElementNotFoundError } from "@/js/helper/Errors";

describe("safeQuerySelector", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="test-container">
        <button id="test-button">Click me</button>
      </div>
    `;
  });

  it("should return the correct element when it exists", () => {
    const button = safeQuerySelector<HTMLButtonElement>("#test-button");
    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.id).toBe("test-button");
    expect(button.textContent).toBe("Click me");
  });

  it("should return the correct element within a given target", () => {
    const container = safeQuerySelector<HTMLDivElement>("#test-container");
    const button = safeQuerySelector<HTMLButtonElement>("#test-button", container);
    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.id).toBe("test-button");
    expect(button.textContent).toBe("Click me");
  });

  it("should throw ElementNotFoundError if the element does not exist", () => {
    expect(() => safeQuerySelector<HTMLButtonElement>("#nonexistent-element")).toThrow(
      ElementNotFoundError
    );
  });

  it("should throw ElementNotFoundError if the element does not exist within the given target", () => {
    const container = safeQuerySelector<HTMLDivElement>("#test-container");
    expect(() => safeQuerySelector<HTMLButtonElement>("#nonexistent-element", container)).toThrow(
      ElementNotFoundError
    );
  });
});
