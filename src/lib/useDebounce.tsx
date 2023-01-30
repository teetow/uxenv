import { useEffect } from "react";

const useDebounce = (callback: () => void, timeout: number) => {
  useEffect(() => {
    const handle = setTimeout(callback, timeout);
    return () => clearTimeout(handle);
  }, [timeout, callback]);
};

export default useDebounce;
