import { TIME } from '@/shared/constants';
import { useClientSize } from '@/shared/hooks/use-client-size';

export const useAnimation = () => {
  const { getIsBreakpoint } = useClientSize();

  const isTablet = getIsBreakpoint('$tablet');

  const planetAnimation = isTablet
    ? {
        animate: {
          x: [0, 30, 10],
          y: -3,
          z: 10,
          rotateY: 360,
          rotateX: 360,
          rotateZ: 360,
        },
        transition: {
          duration: TIME.planetDuration,
          delay: TIME.preloaderTimeInSeconds,
          ease: 'anticipate',
          rotateY: {
            repeat: Infinity,
            ease: 'linear',
            duration: 1500,
          },
          rotateX: {
            repeat: Infinity,
            ease: 'linear',
            duration: 1500,
          },
          rotateZ: {
            repeat: Infinity,
            ease: 'linear',
            duration: 1500,
          },
        },
      }
    : {
        animate: {
          x: [120, 10, 20],
          y: -5,
          z: 8,
          rotateY: 360,
          rotateX: 360,
          rotateZ: 360,
        },
        transition: {
          duration: TIME.planetDuration,
          delay: TIME.preloaderTimeInSeconds,
          ease: 'anticipate',
          rotateY: {
            repeat: Infinity,
            ease: 'linear',
            duration: 1500,
          },
          rotateX: {
            repeat: Infinity,
            ease: 'linear',
            duration: 1500,
          },
          rotateZ: {
            repeat: Infinity,
            ease: 'linear',
            duration: 1500,
          },
        },
      };

  return { planetAnimation };
};
