import { Ref, RefObject, useEffect } from "react";

function useClickOutside(ref: RefObject<HTMLDivElement>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current !== event.target) {
        callback();
      }
    }

    if (ref.current) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [ref, callback]);
}

export default useClickOutside;
