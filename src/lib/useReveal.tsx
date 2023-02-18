import { RefObject, useState } from "react";
import useClickOutside from "./useClickOutside";

const useReveal = (trigger: RefObject<HTMLElement>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(-1);

  useClickOutside(trigger, () => setIsOpen(false));

  return [activeId, setActiveId, isOpen, setIsOpen] as const;
};

export default useReveal;
