import React, { FC, useRef } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAnimation } from './lib/use-animation';
import { featureCards } from './lib/feature-cards';
import { useClientSize } from '@/shared/hooks/use-client-size';

export type FeaturesProps = CommonTypes;

const Features: FC<FeaturesProps> = ({ className }) => {
  const {
    cnRoot,
    cnContainer,
    cnTextWrapper,
    cnTitle,
    cnSubTitle,
    cnText,
    cnCardWrapper,
    cnCard,
    cnIcon,
    cnName,
    cnDescription,
    cnBlur,
  } = useClasses({ className });

  const { getIsBreakpoint } = useClientSize();

  const isLaptop = getIsBreakpoint('$laptop');

  const { motionConfig, textWrapperAniamtion, cardAnimation } = useAnimation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['60% end', '50% start'],
  });

  const textWrapperY = useTransform(
    scrollYProgress,
    [0, 1],
    isLaptop ? ['0px', '750px'] : ['0', '0'],
  );

  return (
    <motion.section className={cnRoot} ref={ref} id="advantages">
      <Container className={cnContainer}>
        <motion.div
          className={cnTextWrapper}
          {...motionConfig}
          variants={textWrapperAniamtion}
          style={{ y: textWrapperY }}
        >
          <h2 className={cnTitle}>
            All about <br /> Momentum Max
          </h2>
          <h3 className={cnSubTitle}>
            Your partner for effective Pay Per Call solutions
          </h3>
          <p className={cnText}>
            At Momentum Max, we’re more than just a Pay Per Call advertising
            agency. We’re your trusted partner in driving results and maximizing
            your marketing ROI. With a deep understanding of the industry and a
            commitment to excellence, we deliver tailored solutions that meet
            the unique needs of your business.
          </p>
        </motion.div>
        <div className={cnCardWrapper}>
          {featureCards.map((card, index) => (
            <motion.div
              key={index + 1}
              className={cnCard}
              {...motionConfig}
              variants={cardAnimation}
            >
              <card.icon className={cnIcon} />
              <div>
                <h3 className={cnName}>{card.name}</h3>
                <p className={cnDescription}>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className={cnBlur}></div>
      </Container>
    </motion.section>
  );
};

export default Features;
