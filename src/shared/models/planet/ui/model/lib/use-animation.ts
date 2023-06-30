import { TIME } from '@/shared/constants';
import { useClientSize } from '@/shared/hooks/use-client-size';

export const useAnimation = () => {
  const { getIsBreakpoint } = useClientSize();

  const isTablet = getIsBreakpoint('$tablet');
  const isDesktop = getIsBreakpoint('$desktop');
  let planetAnimation;
  if (isDesktop) {
    planetAnimation = {
      animate: {
        x: [5, 50, 0],
        y: [2, -3],
        z: 10,
        rotateY: [0, 0.2, -0.6, 0.2, 0],
        rotateZ: 6.5,
      },
      transition: {
        duration: TIME.planetDuration,
        delay: TIME.planetDelay,
        ease: 'easeInOut',
        rotateY: {
          repeat: Infinity,
          ease: 'easeInOut',
          duration: 20,
        },
      },
    };
  } else if (isTablet) {
    planetAnimation = {
      animate: {
        x: [5, 50, 10],
        y: [2, -3],
        z: 10,
        rotateY: [0, 0.2, -0.6, 0.2, 0],
        rotateZ: 6.5,
      },
      transition: {
        duration: TIME.planetDuration,
        delay: TIME.planetDelay,
        ease: 'easeInOut',
        rotateY: {
          repeat: Infinity,
          ease: 'easeInOut',
          duration: 20,
        },
      },
    };
  } else {
    planetAnimation = {
      animate: {
        x: [5, 50, 5],
        y: [2, -5],
        z: 7.2,
        rotateY: [0, 0.2, -0.6, 0.2, 0],
        rotateZ: 6.5,
      },
      transition: {
        duration: TIME.planetDuration,
        delay: TIME.planetDelay,
        ease: 'easeInOut',
        rotateY: {
          repeat: Infinity,
          ease: 'easeInOut',
          duration: 20,
        },
      },
    };
  }

  return { planetAnimation };
};
