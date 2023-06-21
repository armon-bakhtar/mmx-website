import { TIME } from '@/shared/constants';

const preloaderPlusPlanetTime =
  TIME.preloaderTimeInSeconds + TIME.planetDuration;

export const titleMotion = {
  initial: { x: -500 },
  animate: { x: 0 },
  transition: {
    duration: 1,
    delay: preloaderPlusPlanetTime + 0.1,
  },
};

export const buttonMotion = {
  initial: { x: -500 },
  animate: { x: 0 },
  transition: { duration: 1, delay: preloaderPlusPlanetTime + 0.2 },
};

export const itemMotion1 = {
  initial: { x: -500 },
  animate: { x: 0 },
  transition: {
    duration: 1,
    delay: preloaderPlusPlanetTime + 0.4,
  },
};

export const itemMotion2 = {
  initial: { x: -500 },
  animate: { x: 0 },
  transition: {
    duration: 1,
    delay: preloaderPlusPlanetTime + 0.5,
  },
};

export const itemMotion3 = {
  initial: { x: -500 },
  animate: { x: 0 },
  transition: {
    duration: 1,
    delay: preloaderPlusPlanetTime + 0.6,
  },
};

export const decorMotion = {
  initial: { x: -500 },
  animate: { x: 0 },
  transition: {
    duration: 1,
    delay: preloaderPlusPlanetTime + 0.4,
  },
};
