import { useEffect } from "react";

const useKeyDown = (key: string, onKeyDown: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) onKeyDown();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [key]);
};

export default useKeyDown;