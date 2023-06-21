import React, { FC, useEffect, useState } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { useClientSize } from '@/shared/hooks/use-client-size';
import { Planet } from '@/shared/models/planet';
import { motion } from 'framer-motion';
import {
  buttonMotion,
  decorMotion,
  itemMotion1,
  itemMotion2,
  itemMotion3,
  titleMotion,
} from './lib/animation';
import { TIME } from '@/shared/constants';

export interface HeroProps extends CommonTypes {
  itemActive?: number;
}

const preloaderTimeInBillseconds = TIME.preloaderTimeInSeconds * 1000;
const activeItemDelay = 2000;

const Hero: FC<HeroProps> = ({ className }) => {
  const [itemActive, setItemActive] = useState(2);
  const {
    cnRoot,
    cnContainer,
    cnTitle,
    cnButton,
    cnInfoWrapper,
    cnInfoDecor,
    cnInfoItem,
  } = useClasses({ className, itemActive });

  useEffect(() => {
    setTimeout(() => {
      if (itemActive === 0)
        setTimeout(() => {
          setItemActive(1);
        }, activeItemDelay);
      if (itemActive === 1)
        setTimeout(() => {
          setItemActive(2);
        }, activeItemDelay);
      if (itemActive === 2)
        setTimeout(() => {
          setItemActive(0);
        }, activeItemDelay);
    }, preloaderTimeInBillseconds);
  }, [itemActive]);

  const { getIsBreakpoint } = useClientSize();
  const isTablet = getIsBreakpoint('$tablet');
  const isLaptop = getIsBreakpoint('$laptop');

  return (
    <section className={cnRoot}>
      <Container className={cnContainer}>
        <motion.h2 className={cnTitle} {...titleMotion}>
          <b>We Generate Leads {isTablet && !isLaptop && <br />}& Calls</b> for
          Insurance
        </motion.h2>
        <motion.div {...buttonMotion}>
          <ButtonPrimary className={cnButton}>Let’s talk</ButtonPrimary>
        </motion.div>
        <div className={cnInfoWrapper}>
          <motion.div className={cnInfoItem} {...itemMotion1}>
            <p>Call sold</p>
            <b>2 500 000</b>
          </motion.div>
          <motion.div className={cnInfoItem} {...itemMotion2}>
            <p>Leads Generated</p>
            <b>2,400,000</b>
          </motion.div>
          <motion.div className={cnInfoItem} {...itemMotion3}>
            <p>Team Members</p>
            <b>1600</b>
          </motion.div>
          <motion.div className={cnInfoDecor} {...decorMotion}></motion.div>
        </div>
      </Container>
      <Planet />
    </section>
  );
};

export default Hero;
