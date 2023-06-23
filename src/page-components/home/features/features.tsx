import React, { FC } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { Bulb, Clock, GrowSales, Notebook } from '@/shared/icons';

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

  return (
    <section className={cnRoot}>
      <Container className={cnContainer}>
        <div className={cnTextWrapper}>
          <h2 className={cnTitle}>Why Momentum Max</h2>
          <p className={cnText}>
            Momentum Max lets you decide what you want to put aside for your
            family with flexible, fast, and easy plans that you can tailor to
            your specific needs!
          </p>
        </div>
        <div className={cnCardWrapper}>
          <div className={cnCard}>
            <Bulb className={cnIcon} />
            <div>
              <h3 className={cnName}>Specialist in enterprise</h3>
              <p className={cnDescription}>
                Leveling up each team member’s skill set, and using cutting-edge
                tools.
              </p>
            </div>
          </div>

          <div className={cnCard}>
            <Clock className={cnIcon} />
            <div>
              <h3 className={cnName}>Time saving</h3>
              <p className={cnDescription}>
                Within 15 minutes you will receive a qualified answer.
              </p>
            </div>
          </div>

          <div className={cnCard}>
            <GrowSales className={cnIcon} />
            <div>
              <h3 className={cnName}>Grow sales</h3>
              <p className={cnDescription}>
                By utilizing a mix of proven and new techniques we can deliver
                best solutions.
              </p>
            </div>
          </div>

          <div className={cnCard}>
            <Notebook className={cnIcon} />
            <div>
              <h3 className={cnName}>Transparency</h3>
              <p className={cnDescription}>
                Once a month you receive a report where all our actions are
                indicated.
              </p>
            </div>
          </div>
        </div>
        <div className={cnBlur}></div>
      </Container>
    </section>
  );
};

export default Features;
