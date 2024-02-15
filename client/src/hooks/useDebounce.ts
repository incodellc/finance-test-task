import { useRef } from "react";

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const timer = useRef<number>();

  return (...args: any[]) => {
    clearTimeout(timer.current);

    timer.current = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
