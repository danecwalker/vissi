import { Stylesheet } from "../types/stylesheet";

export const style =(stylesheet: Stylesheet, ...styles: Stylesheet[]): string => {
  const style = styles.reduce((acc, s) => {
    return {
      ...acc,
      ...s,
    };
  }, stylesheet);
  return (<any>Object).entries(style).reduce((acc: string, [key, value]: [string, Stylesheet[string]]) => {
    return `${acc}${key.replace(/([A-Z])/, '-$1').toLowerCase()}:${value};`;
  }, "");
}