import { useState, useEffect } from 'react';

// Este hook utiliza las mismas medidas de los breakpoints de boostrap

const useMediaQueryScreen = () => {
  const getSizes = () => ({
    isxSmall: window.innerWidth < 576,
    isSmall: window.innerWidth >= 576 && window.innerWidth < 767,
    isMedium: window.innerWidth >= 767 && window.innerWidth < 992,
    isLarge: window.innerWidth >= 992 && window.innerWidth < 1200,
    isLargeXl: window.innerWidth >= 1200 && window.innerWidth < 1400,
    isLargeXXl: window.innerWidth >= 1400
  });

  const [screenSize, setScreenSize] = useState(getSizes);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getSizes());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [ screenSize.isxSmall, screenSize.isSmall, screenSize.isMedium, screenSize.isLarge, screenSize.isLargeXl, screenSize.isLargeXXl ];
};

export default useMediaQueryScreen;