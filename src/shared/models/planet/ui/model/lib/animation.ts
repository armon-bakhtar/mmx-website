import { TIME } from '@/shared/constants';

export const planetAnimation = {
  initial: {
    x: 120,
    y: 0,
    z: 0,
    scale: 1.2,
    rotateY: 0,
    rotateX: 0,
    rotateZ: 0,
  },
  animate: {
    x: [120, 10, 20],
    y: -5,
    z: 8,
    scale: 1,
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
      type: 'tween',
      ease: 'linear',
      duration: 1500,
    },
    rotateX: {
      repeat: Infinity,
      type: 'tween',
      ease: 'linear',
      duration: 1500,
    },
    rotateZ: {
      repeat: Infinity,
      type: 'tween',
      ease: 'linear',
      duration: 1500,
    },
  },
};
