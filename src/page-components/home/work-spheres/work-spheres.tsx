import React, { FC, useRef, useState } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { motion } from 'framer-motion';
import { useAnimation } from './lib/use-animation';
import { useClientSize } from '@/shared/hooks/use-client-size';
import { sphereCards } from './lib/sphereCards';
import Lottie from 'react-lottie';

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
    cnAnimationWrapper,
    cnIcon,
    cnIconBlur,
    cnBlur,
  } = useClasses({ className });
  const { motionConfig, cardAnimation } = useAnimation();
  const { getIsBreakpoint } = useClientSize();
  const isTabletS = getIsBreakpoint('$tablet-s');
  const ref = useRef(null);

  const handleAnimation = (anim: any) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: anim,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return { defaultOptions };
  };

  const [lottie1, setLottie1] = useState(false);
  const [lottie2, setLottie2] = useState(false);
  const [lottie3, setLottie3] = useState(false);

  const handleAnimationStart = (index: number) => {
    if (index === 1) {
      setLottie1(true);

      setTimeout(() => {
        setLottie1(false);
      }, 5000);
    } else if (index === 3) {
      setLottie2(true);

      setTimeout(() => {
        setLottie2(false);
      }, 5000);
    } else if (index === 5) {
      setLottie3(true);

      setTimeout(() => {
        setLottie3(false);
      }, 5000);
    }
  };

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
            const { defaultOptions } = handleAnimation(card.animation);
            let isStopped;
            if (index + 1 === 1) {
              isStopped = !lottie1;
            } else if (index + 1 === 3) {
              isStopped = !lottie2;
            } else if (index + 1 === 5) {
              isStopped = !lottie3;
            }

            return (
              <motion.div
                {...motionConfig}
                key={String(isTabletS + String(index + 1))}
                custom={index + 1}
                variants={cardAnimation}
                className={cnCard}
                onMouseEnter={() => handleAnimationStart(index + 1)}
              >
                <h3 className={cnName}>{card.name}</h3>
                <p className={cnText}>{card.text}</p>
                {card.animation && card.icon && (
                  <div className={cnIconWrapper}>
                    <div className={cnAnimationWrapper}>
                      <Lottie
                        options={defaultOptions}
                        isStopped={isStopped}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '150%',
                          height: '150%',
                          transform: 'translate(-50%,-50%)',
                        }}
                      />
                    </div>
                    <card.icon className={cnIcon} />
                    <span className={cnIconBlur}></span>
                  </div>
                )}
              </motion.div>
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
