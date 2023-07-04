import React, { FC, useState } from 'react';
import { useClasses } from './lib/useClasses';
import { motion } from 'framer-motion';
import { useAnimation } from '../../lib/use-animation';
import Lottie from 'react-lottie';
import { useClientSize } from '@/shared/hooks/use-client-size';
import { CommonTypes } from '@/shared/types/common';

export interface WorkSpheresCardProps extends CommonTypes {
  card: any;
  index: number;
  animation: any;
}

const WorkSpheresCard: FC<WorkSpheresCardProps> = ({
  card,
  index,
  animation,
}) => {
  const [isStopped, setIsStopped] = useState(true);
  const {
    cnRoot,
    cnName,
    cnText,
    cnIconWrapper,
    cnAnimationWrapper,
    cnIcon,
    cnIconBlur,
  } = useClasses({});
  const { motionConfig, cardAnimation } = useAnimation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { getIsBreakpoint } = useClientSize();
  const isTabletS = getIsBreakpoint('$tablet-s');

  const handleAnimationStart = () => {
    if (!isStopped) {
      return;
    }
    setIsStopped(false);

    setTimeout(() => {
      setIsStopped(true);
    }, 5000);
  };

  return (
    <motion.div
      {...motionConfig}
      key={String(isTabletS + String(index))}
      custom={index}
      variants={cardAnimation}
      className={cnRoot}
      onMouseEnter={() => handleAnimationStart()}
    >
      <h3 className={cnName}>{card.name}</h3>
      <p className={cnText}>{card.text}</p>
      {card.animation && card.icon && (
        <div className={cnIconWrapper}>
          <div className={cnAnimationWrapper}>
            <Lottie
              options={defaultOptions}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '150%',
                height: '150%',
                transform: 'translate(-50%,-50%)',
              }}
              isStopped={isStopped}
            />
          </div>
          <card.icon className={cnIcon} />
          <span className={cnIconBlur}></span>
        </div>
      )}
    </motion.div>
  );
};

export default WorkSpheresCard;
