import { TIME } from '@/shared/constants';
import { useClientSize } from '@/shared/hooks/use-client-size';

export const preloaderPlusPlanetTime =
  TIME.preloaderTimeInSeconds + TIME.planetDuration;

export const useAnimation = () => {
  const { getIsBreakpoint } = useClientSize();
  const isTablet = getIsBreakpoint('$tablet');

  const titleMotionSpan1 = isTablet
    ? {
        initial: { y: 400, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 1, delay: preloaderPlusPlanetTime + 0.1 },
      }
    : {
        initial: { x: -500 },
        animate: { x: 0 },
        transition: { duration: 1, delay: preloaderPlusPlanetTime + 0.1 },
      };

  const titleMotionSpan2 = isTablet
    ? {
        initial: { y: 400, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 1, delay: preloaderPlusPlanetTime + 0.2 },
      }
    : {
        initial: { x: -500 },
        animate: { x: 0 },
        transition: { duration: 1, delay: preloaderPlusPlanetTime + 0.2 },
      };

  const titleMotionSpan3 = isTablet
    ? {
        initial: { y: 400, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 1, delay: preloaderPlusPlanetTime + 0.3 },
      }
    : {
        initial: { x: -500 },
        animate: { x: 0 },
        transition: { duration: 1, delay: preloaderPlusPlanetTime + 0.3 },
      };

  const buttonMotion = isTablet
    ? {
        initial: { y: 400, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 1, delay: preloaderPlusPlanetTime + 0.4 },
      }
    : {
        initial: { x: -500 },
        animate: { x: 0 },
        transition: { duration: 1, delay: preloaderPlusPlanetTime + 0.4 },
      };

  const infoMotion = isTablet
    ? {
        initial: { x: -1000 },
        animate: { x: 0 },
        transition: { duration: 1, delay: preloaderPlusPlanetTime + 1 },
      }
    : {};

  const itemMotion = isTablet
    ? {}
    : {
        initial: { x: -500 },
        animate: { x: 0 },
      };

  const decorMotion = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: {
      duration: 1,
      delay: preloaderPlusPlanetTime + 0.8,
    },
  };

  return {
    titleMotionSpan1,
    titleMotionSpan2,
    titleMotionSpan3,
    buttonMotion,
    infoMotion,
    itemMotion,
    decorMotion,
  };
};
