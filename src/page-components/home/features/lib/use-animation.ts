import { Variants } from 'framer-motion';

export const useAnimation = () => {
  const motionConfig = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  const textWrapperAniamtion: Variants = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: 'easeInOut' },
    },
  };

  const cardAnimation: Variants = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: 'easeInOut' },
    },
  };

  return { motionConfig, textWrapperAniamtion, cardAnimation };
};
