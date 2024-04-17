import { expect, test } from "vitest";
import { range } from "./range";

test("range", () => {
  expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  expect(range(3, 5)).toEqual([3, 4]);
  expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
});
