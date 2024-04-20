export const fn = (f: (x: number) => number, range: number[]) => {
  return range.map(f).map((y, i) => ({ x: range[i]!, y }));
};
