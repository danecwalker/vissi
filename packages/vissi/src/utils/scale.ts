export const scale = (domain: [number, number], range: [number, number]) => {
  const [domainMin, domainMax] = domain;
  const [rangeMin, rangeMax] = range;
  const domainLength = domainMax - domainMin;
  const rangeLength = rangeMax - rangeMin;
  return (value: number) => {
    if (domainLength === 0) {
      return rangeMin;
    }
    return rangeMin + ((value - domainMin) / domainLength) * rangeLength;
  };
};
