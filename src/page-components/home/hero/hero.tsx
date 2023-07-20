import React, { FC, useEffect, useState } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { useClientSize } from '@/shared/hooks/use-client-size';
import { Planet } from '@/shared/models/planet';
import { motion } from 'framer-motion';
import { TIME } from '@/shared/constants';
import { preloaderPlusPlanetTime, useAnimation } from './lib/use-animation';
import { useSafari } from '@/shared/hooks/use-safari';
import { useProgress } from '@react-three/drei';
import { useAnchorLink } from '@/shared/hooks/use-anchor-link';
import { PATHS } from '@/shared/constants/paths';
export interface HeroProps extends CommonTypes {
  itemActive?: number;
  isSafari?: boolean;
}

const preloaderTimeInBillseconds = TIME.preloaderTimeInSeconds * 1000;
const activeItemDelay = 2000;

const Hero: FC<HeroProps> = ({ className }) => {
  const [itemActive, setItemActive] = useState(2);
  const { isSafari } = useSafari();
  const { progress } = useProgress();
  const {
    cnRoot,
    cnContainer,
    cnTitle,
    cnSubTitle,
    cnButton,
    cnInfoWrapper,
    cnInfoDecor,
    cnInfoItem,
    cnBlur,
  } = useClasses({ className, itemActive, isSafari });
  const {
    titleMotionSpan1,
    titleMotionSpan2,
    titleMotionSpan3,
    subTitleMotionSpan1,
    subTitleMotionSpan2,
    subTitleMotionSpan3,
    buttonMotion,
    decorMotion,
    infoMotion,
    itemMotion,
  } = useAnimation();

  const { handleAnchorLink } = useAnchorLink();

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
  const isMobileM = getIsBreakpoint('$mobile-m');
  const isTablet = getIsBreakpoint('$tablet');
  const isLaptop = getIsBreakpoint('$laptop');

  if (progress !== 100) {
    return (
      <section className={cnRoot}>
        <Planet />;
      </section>
    );
  }

  return (
    <section className={cnRoot}>
      <Container className={cnContainer}>
        <h2 className={cnTitle}>
          <motion.span
            key={String(isTablet + 'titleMotionSpan1')}
            {...titleMotionSpan1}
          >
            Quality&nbsp;
          </motion.span>
          <motion.span
            key={String(isTablet + 'titleMotionSpan2')}
            {...titleMotionSpan2}
          >
            Inbound&nbsp;
          </motion.span>
          {isTablet && <br />}
          <motion.span
            key={String(isTablet + 'titleMotionSpan2-2')}
            {...titleMotionSpan2}
          >
            Calls&nbsp;
          </motion.span>
          <motion.span
            key={String(isTablet + 'titleMotionSpan3')}
            {...titleMotionSpan3}
          >
            and Leads
          </motion.span>
        </h2>
        <h3 className={cnSubTitle}>
          <motion.span
            key={String(isTablet + 'subTitleMotionSpan1')}
            {...subTitleMotionSpan1}
          >
            Maximize Conversions&nbsp;
            <br />
          </motion.span>
          <motion.span
            key={String(isTablet + 'subTitleMotionSpan2')}
            {...subTitleMotionSpan2}
          >
            and Accelerate Business&nbsp;
            {isMobileM && <br />}
          </motion.span>
          <motion.span
            key={String(isTablet + 'titleMotionSpan3')}
            {...subTitleMotionSpan3}
          >
            Growth
          </motion.span>
        </h3>
        <motion.div {...buttonMotion} key={String(isTablet + 'buttonMotion')}>
          <ButtonPrimary
            className={cnButton}
            onClick={() => handleAnchorLink(PATHS.CONTACT)}
          >
            START NOW
          </ButtonPrimary>
        </motion.div>
        <motion.div
          className={cnInfoWrapper}
          key={String(isTablet + 'infoMotion')}
          {...infoMotion}
        >
          <motion.div
            className={cnInfoItem}
            key={String(isTablet + 'itemMotion')}
            {...itemMotion}
            transition={{
              duration: 1,
              delay: preloaderPlusPlanetTime + 0.5,
            }}
          >
            <p>Call sold</p>
            <b>1 500 000+</b>
          </motion.div>
          <motion.div
            className={cnInfoItem}
            key={String(isTablet + 'itemMotion2')}
            {...itemMotion}
            transition={{
              duration: 1,
              delay: preloaderPlusPlanetTime + 0.6,
            }}
          >
            <p>Leads Generated</p>
            <b>1,000,000+</b>
          </motion.div>
          <motion.div
            className={cnInfoItem}
            key={String(isTablet + 'itemMotion3')}
            {...itemMotion}
            transition={{
              duration: 1,
              delay: preloaderPlusPlanetTime + 0.7,
            }}
          >
            <p>Team Members</p>
            <b>22</b>
          </motion.div>
          <motion.div className={cnInfoDecor} {...decorMotion}></motion.div>
        </motion.div>

        <div className={cnBlur}></div>
      </Container>
      <Planet />
    </section>
  );
};

export default Hero;
