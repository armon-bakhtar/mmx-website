import { Breakpoints } from '@/shared/assets/styles/mixins/breakpoints';
import throttle from 'lodash/throttle';
import { useEffect, useState } from 'react';

type BreakpointsKeys = keyof typeof Breakpoints;
type Positions = 'min' | 'max';

export const useClientSize = () => {
  const [width, setWidth] = useState<number>();

  const getIsBreakpoint = (
    breakpoint: BreakpointsKeys,
    position: Positions = 'min',
  ) => {
    if (!width) {
      return false;
    }

    const breakpointWidth = Breakpoints[breakpoint];

    const isMinWidth = width >= breakpointWidth;
    const isMaxWidth = width < breakpointWidth;

    if (position === 'max') {
      return isMaxWidth;
    }

    return isMinWidth;
  };

  useEffect(() => {
    const handleResize = throttle(() => {
      setWidth(document.documentElement.clientWidth || undefined);
    }, 150);
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    getIsBreakpoint,
  };
};
