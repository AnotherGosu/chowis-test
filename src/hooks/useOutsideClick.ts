import { RefObject, useEffect } from "react";

export default function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) {
  useEffect(() => {
    const element = ref?.current;
    function handleClickOutside(event: Event) {
      if (element && !element.contains(event.target as Node | null)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
