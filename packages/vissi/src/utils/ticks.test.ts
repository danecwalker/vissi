import { expect, test } from "vitest";
import { ticks } from "./ticks";

test("ticks", () => {
  const s = ticks(0, 100, 10);
  expect(s).toEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

  const s2 = ticks(0, 10, 5);

  expect(s2).toEqual([0, 2, 4, 6, 8, 10]);

  const s3 = ticks(0, 10, 1);

  expect(s3).toEqual([0, 10]);
})