import { Data } from "../types/data";

export const domain = (data: Data) => {
  const x = data.map((d) => d.x);
  const y = data.reduce((acc: number[], d) => {
    if (Array.isArray(d.y)) {
      acc.push(...d.y);
    } else {
      acc.push(d.y);
    }
    return acc;
  }, [])
  return {
    x1: Math.min(...x),
    x2: Math.max(...x),
    y1: Math.min(...y),
    y2: Math.max(...y),
  };
}