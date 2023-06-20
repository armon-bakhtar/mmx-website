import React, { FC, useState } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import Lottie from 'lottie-react';
import loader from 'public/json/loader.json';
import { useProgress } from '@react-three/drei';
import { Container } from '@/shared/ui/container/container';

export type PreloaderProps = CommonTypes;

const Preloader: FC<PreloaderProps> = ({ className }) => {
  const { cnRoot, cnContent, cnAnimation, cnLoading, cnProgressbar } =
    useClasses({
      className,
    });
  const { progress } = useProgress();

  if (progress === 100) {
    return null;
  }

  return (
    <div className={cnRoot}>
      <Container>
        <div className={cnContent}>
          <Lottie className={cnAnimation} animationData={loader} loop={true} />
          <span className={cnLoading}>{Math.round(progress)}</span>
          <div
            className={cnProgressbar}
            style={{ width: `${Math.round(progress)}%` }}
          ></div>
        </div>
      </Container>
    </div>
  );
};

export default Preloader;
