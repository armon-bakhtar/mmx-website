import { useClientSize } from '@/shared/hooks/use-client-size';
import { Variants } from 'framer-motion';

export const useAnimation = () => {
  const { getIsBreakpoint } = useClientSize();
  const isTabletS = getIsBreakpoint('$tablet-s');
  const motionConfig = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  const cardAnimation: Variants = !isTabletS
    ? {
        hidden: {
          x: -200,
          opacity: 0,
        },
        visible: (custom) => ({
          x: 0,
          opacity: 1,
          transition: { ease: 'linear' },
        }),
      }
    : {
        hidden: {
          y: 200,
          opacity: 0,
        },
        visible: (custom) => ({
          y: 0,
          opacity: 1,
          transition: { delay: custom * 0.05, ease: 'easeInOut' },
        }),
      };

  return { motionConfig, cardAnimation };
};
