import React, { FC } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { motion } from 'framer-motion';
import { useAnimation } from './lib/use-animation';
import { useClientSize } from '@/shared/hooks/use-client-size';
import { sphereCards } from './lib/sphereCards';
import WorkSpheresCard from './ui/work-spheres-card/work-spheres-card';

export type WorkSpheresProps = CommonTypes;

const WorkSpheres: FC<WorkSpheresProps> = ({ className }) => {
  const { cnRoot, cnContainer, cnTitle, cnCardWrapper, cnBlur } = useClasses({
    className,
  });
  const { motionConfig, cardAnimation } = useAnimation();
  const { getIsBreakpoint } = useClientSize();
  const isTabletS = getIsBreakpoint('$tablet-s');

  return (
    <section className={cnRoot} id="services">
      <Container className={cnContainer}>
        <motion.h2
          {...motionConfig}
          variants={cardAnimation}
          key={String(isTabletS + 'h2')}
          className={cnTitle}
        >
          Lead generation services <span>that win clients</span>
        </motion.h2>

        <div className={cnCardWrapper}>
          {sphereCards.map((card, index) => {
            return (
              <WorkSpheresCard
                key={index + 1}
                card={card}
                animation={card.animation}
                index={index + 1}
              />
            );
          })}
        </div>

        <div>
          <div className={cnBlur}></div>
          <div className={cnBlur}></div>
        </div>
      </Container>
    </section>
  );
};

export default WorkSpheres;
