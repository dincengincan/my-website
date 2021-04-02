import { useState, useEffect } from "react";

export const WINDOW_SIZES = {
  MOBILE: "MOBILE",
  DESKTOP: "DESKTOP",
};

const BREAKPOINTS = {
  MOBILE: "800",
};

const useWindowSize = (size) => {
  const getSize = () => {
    if (typeof window === "undefined") {
      return;
    }
    const windowSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    return windowSize;
  };

  const [windowSize, setWindowSize] = useState(getSize());

  const handleResize = () => setWindowSize(getSize());

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const getDefinedWidth = () => {
    if (size && windowSize) {
      if (windowSize.width < BREAKPOINTS.MOBILE)
        return WINDOW_SIZES.MOBILE === size;
      return WINDOW_SIZES.DESKTOP === size;
    }
  };

  return getDefinedWidth();
};

export default useWindowSize;
