export const ticks = (x1:number,x2:number, count:number) => {
  const step = (x2 - x1) / count;
  const values = Array.from({ length: count + 1 }, (_, i) => x1 + i * step);
  return values;
}