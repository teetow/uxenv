import { DependencyList, RefObject, useEffect } from "react";

const useClickOutside = (
  trigger: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const triggerElem = trigger.current;

    const handleClick = (event: MouseEvent) => {
      if (!triggerElem?.contains(event.target as HTMLElement)) {
        callback();
      }
    };

    if (triggerElem) {
      document.addEventListener("click", handleClick, { capture: true });
    }

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  });
};

export default useClickOutside;
