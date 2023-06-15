import React, { FC } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { Dollar, Healthcare, Loan } from '@/shared/icons';

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

  return (
    <section className={cnRoot}>
      <Container className={cnContainer}>
        <h2 className={cnTitle}>
          Lead generation services <span>that win clients</span>
        </h2>

        <div className={cnCardWrapper}>
          <div className={cnCard}>
            <h3 className={cnName}>Health insurance</h3>
            <p className={cnText}>
              Low cost health insurance for Americans in need.
            </p>
            <div className={cnIconWrapper}>
              <Healthcare className={cnIcon} />
              <span className={cnIconBlur}></span>
            </div>
          </div>

          <div className={cnCard}>
            <h3 className={cnName}>Medicare</h3>
            <p className={cnText}>
              Federal health insurane for seniors asnd disabled adults.
            </p>
          </div>

          <div className={cnCard}>
            <h3 className={cnName}>Tax Debt</h3>
            <p className={cnText}>
              Back tax negotitation to pay less than owed.
            </p>
            <div className={cnIconWrapper}>
              <Dollar className={cnIcon} />
              <span className={cnIconBlur}></span>
            </div>
          </div>

          <div className={cnCard}>
            <h3 className={cnName}>Debt Settlement</h3>
            <p className={cnText}>
              Debt negotitaion to settle outstanding balances for less than
              owed.
            </p>
          </div>

          <div className={cnCard}>
            <h3 className={cnName}>Personal Loan</h3>
            <p className={cnText}>
              Borrowed money without a bank or credit card.
            </p>
            <div className={cnIconWrapper}>
              <Loan className={cnIcon} />
              <span className={cnIconBlur}></span>
            </div>
          </div>

          <div className={cnCard}>
            <h3 className={cnName}>Auto Insurance</h3>
            <p className={cnText}>
              Protects you against financial loss in the event of an accident or
              theft.
            </p>
          </div>
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
