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

  const { motionConfig, titleAniamtion, cardAnimation } = useAnimation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['80% end', '50% start'],
  });

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    isLaptop ? ['0px', '380px'] : ['0', '0'],
  );

  return (
    <motion.section className={cnRoot} ref={ref}>
      <Container className={cnContainer}>
        <motion.div
          className={cnTextWrapper}
          {...motionConfig}
          variants={titleAniamtion}
          style={{ y: titleY }}
        >
          <h2 className={cnTitle}>Why Momentum Max</h2>
          <p className={cnText}>
            Momentum Max lets you decide what you want to put aside for your
            family with flexible, fast, and easy plans that you can tailor to
            your specific needs!
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
