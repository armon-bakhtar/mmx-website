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
        x: [-10, 30, 0],
        y: -3,
        z: 10,
        rotateY: 6,
        rotateX: [0, 0.2, -0.2, 0.3, -0.3, 0],
        rotateZ: [0, 0.2, 0.2, -0.3, 0.3, 0],
      },
      transition: {
        duration: TIME.planetDuration,
        delay: TIME.preloaderTimeInSeconds,
        ease: 'easeInOut',
        rotateX: {
          repeat: Infinity,
          ease: 'easeInOut',
          duration: 10,
          delay: TIME.preloaderTimeInSeconds + 1,
        },
        rotateZ: {
          repeat: Infinity,
          ease: 'easeInOut',
          duration: 10,
          delay: TIME.preloaderTimeInSeconds + 1,
        },
      },
    };
  } else if (isTablet) {
    planetAnimation = {
      animate: {
        x: [-10, 30, 10],
        y: -3,
        z: 10,
        rotateY: 6,
        rotateX: [0, 0.2, -0.2, 0.3, -0.3, 0],
        rotateZ: [0, 0.2, 0.2, -0.3, 0.3, 0],
      },
      transition: {
        duration: TIME.planetDuration,
        delay: TIME.preloaderTimeInSeconds,
        ease: 'easeInOut',
        rotateX: {
          repeat: Infinity,
          ease: 'easeInOut',
          duration: 10,
          delay: TIME.preloaderTimeInSeconds + 1,
        },
        rotateZ: {
          repeat: Infinity,
          ease: 'easeInOut',
          duration: 10,
          delay: TIME.preloaderTimeInSeconds + 1,
        },
      },
    };
  } else {
    planetAnimation = {
      animate: {
        x: [120, 10, 20],
        y: -5,
        z: 8,
        rotateY: 6,
        rotateX: [0, 0.3, -0.2, 0.3, -0.3, 0],
        rotateZ: [0, 0.3, 0.2, -0.3, 0.3, 0],
      },
      transition: {
        duration: TIME.planetDuration,
        delay: TIME.preloaderTimeInSeconds,
        ease: 'easeInOut',
        rotateX: {
          repeat: Infinity,
          ease: 'easeInOut',
          duration: 10,
          delay: TIME.preloaderTimeInSeconds + 1,
        },
        rotateZ: {
          repeat: Infinity,
          ease: 'easeInOut',
          duration: 10,
          delay: TIME.preloaderTimeInSeconds + 1,
        },
      },
    };
  }

  return { planetAnimation };
};
