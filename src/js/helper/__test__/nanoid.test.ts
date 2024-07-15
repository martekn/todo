import { expect, describe, it } from "vitest";
import { nanoid } from "@/js/helper/nanoid";

describe("nanoid", () => {
  it("should return a string of length 21", () => {
    const id = nanoid();
    expect(id.length).toBe(21);
  });

  it("should only contain characters from the specified alphabet", () => {
    const id = nanoid();
    const alphabet = "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz";
    const isFromAlphabet = [...id].every((char) => alphabet.includes(char));
    expect(isFromAlphabet).toBe(true);
  });
});
