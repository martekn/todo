import { describe, it, expect } from "vitest";
import { validateTaskInput } from "@/js/helper/validateTaskInput";

describe("validateTaskInput", () => {
  it("should return invalid with error when input is empty", () => {
    const result = validateTaskInput("");
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Input cannot be empty");
  });

  it("should return invalid with error when input exceeds 150 characters", () => {
    const longString = "a".repeat(151);
    const result = validateTaskInput(longString);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("You have exceeded the maximum number of 150 characters");
  });

  it("should return valid when input is within valid length", () => {
    const validString = "This is a valid task input";
    const result = validateTaskInput(validString);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });
});
