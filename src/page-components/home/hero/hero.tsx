import React, { FC } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { useClientSize } from '@/shared/hooks/use-client-size';
import ModelContainer from './ui/Model';

export type HeroProps = CommonTypes;

const Hero: FC<HeroProps> = ({ className }) => {
  const {
    cnRoot,
    cnContainer,
    cnTitle,
    cnButton,
    cnInfoWrapper,
    cnInfoDecor,
    cnInfoItem,
    cnCanvas,
  } = useClasses({ className });

  const { getIsBreakpoint } = useClientSize();
  const isTablet = getIsBreakpoint('$tablet');
  const isLaptop = getIsBreakpoint('$laptop');

  return (
    <section className={cnRoot}>
      <Container className={cnContainer}>
        <h2 className={cnTitle}>
          <b>We Generate Leads {isTablet && !isLaptop && <br />}& Calls</b> for
          Insurance
        </h2>
        <ButtonPrimary className={cnButton}>Let’s talk</ButtonPrimary>
        <div className={cnInfoWrapper}>
          <div className={cnInfoItem}>
            <p>Call sold</p>
            <b>2 500 000</b>
          </div>
          <div className={cnInfoItem}>
            <p>Leads Generated</p>
            <b>2,400,000</b>
          </div>
          <div className={cnInfoItem}>
            <p>Team Members</p>
            <b>1600</b>
          </div>
          <div className={cnInfoDecor}></div>
        </div>
        <canvas className={cnCanvas} />
        <ModelContainer className={cnCanvas} />
      </Container>
    </section>
  );
};

export default Hero;
