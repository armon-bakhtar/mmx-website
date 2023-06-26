import React, { FC } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { Dollar, Healthcare, Loan } from '@/shared/icons';
import { motion, Variants } from 'framer-motion';
import { useAnimation } from './lib/use-animation';
import { useClientSize } from '@/shared/hooks/use-client-size';

export type WorkSpheresProps = CommonTypes;

const WorkSpheres: FC<WorkSpheresProps> = ({ className }) => {
  const {
    cnRoot,
    cnContainer,
    cnTitle,
    cnCardWrapper,
    cnCard,
    cnName,
    cnText,
    cnIconWrapper,
    cnIcon,
    cnIconBlur,
    cnBlur,
  } = useClasses({ className });
  const { motionConfig, cardAnimation } = useAnimation();
  const { getIsBreakpoint } = useClientSize();
  const isTabletS = getIsBreakpoint('$tablet-s');

  return (
    <section className={cnRoot}>
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
          <motion.div
            {...motionConfig}
            key={String(isTabletS + '1')}
            custom={1}
            variants={cardAnimation}
            className={cnCard}
          >
            <h3 className={cnName}>Health insurance</h3>
            <p className={cnText}>
              Low cost health insurance for Americans in need.
            </p>
            <div className={cnIconWrapper}>
              <Healthcare className={cnIcon} />
              <span className={cnIconBlur}></span>
            </div>
          </motion.div>

          <motion.div
            {...motionConfig}
            key={String(isTabletS + '2')}
            custom={2}
            variants={cardAnimation}
            className={cnCard}
          >
            <h3 className={cnName}>Medicare</h3>
            <p className={cnText}>
              Federal health insurane for seniors asnd disabled adults.
            </p>
          </motion.div>

          <motion.div
            {...motionConfig}
            key={String(isTabletS + '3')}
            custom={3}
            variants={cardAnimation}
            className={cnCard}
          >
            <h3 className={cnName}>Tax Debt</h3>
            <p className={cnText}>
              Back tax negotitation to pay less than owed.
            </p>
            <div className={cnIconWrapper}>
              <Dollar className={cnIcon} />
              <span className={cnIconBlur}></span>
            </div>
          </motion.div>

          <motion.div
            {...motionConfig}
            key={String(isTabletS + '4')}
            custom={4}
            variants={cardAnimation}
            className={cnCard}
          >
            <h3 className={cnName}>Debt Settlement</h3>
            <p className={cnText}>
              Debt negotitaion to settle outstanding balances for less than
              owed.
            </p>
          </motion.div>

          <motion.div
            {...motionConfig}
            key={String(isTabletS + '5')}
            custom={5}
            variants={cardAnimation}
            className={cnCard}
          >
            <h3 className={cnName}>Personal Loan</h3>
            <p className={cnText}>
              Borrowed money without a bank or credit card.
            </p>
            <div className={cnIconWrapper}>
              <Loan className={cnIcon} />
              <span className={cnIconBlur}></span>
            </div>
          </motion.div>

          <motion.div
            {...motionConfig}
            key={String(isTabletS + '6')}
            custom={6}
            variants={cardAnimation}
            className={cnCard}
          >
            <h3 className={cnName}>Auto Insurance</h3>
            <p className={cnText}>
              Protects you against financial loss in the event of an accident or
              theft.
            </p>
          </motion.div>
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
