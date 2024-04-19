import { test, expect } from "vitest";
import { scale } from "./scale";

test("scale", () => {
  const s = scale([0, 100], [0, 300]);
  expect(s(0)).toBe(0);
  expect(s(50)).toBe(150);
  expect(s(100)).toBe(300);
});

test("scale d", () => {
  const s = scale([0, 10], [0, 1]);
  expect(s(0)).toBe(0);
  expect(s(5)).toBe(0.5);
  expect(s(10)).toBe(1);

  const s2 = scale([0, 10], [100, 0]);
  expect(s2(0)).toBe(100);
  expect(s2(5)).toBe(50);
  expect(s2(10)).toBe(0);

  const s3 = scale([0, 10], [0, 100]);
});
