import React, { FC } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { motion } from 'framer-motion';
import { useAnimation } from './lib/use-animation';
import { featureCards } from './lib/feature-cards';

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
  const { motionConfig, titleAniamtion, cardAnimation } = useAnimation();

  return (
    <section className={cnRoot}>
      <Container className={cnContainer}>
        <motion.div
          className={cnTextWrapper}
          {...motionConfig}
          variants={titleAniamtion}
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
    </section>
  );
};

export default Features;
