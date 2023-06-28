import React, { FC, useEffect, useState } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import Lottie from 'lottie-react';
import loader from 'public/json/loader.json';
import { useProgress } from '@react-three/drei';
import { Container } from '@/shared/ui/container/container';
import { TIME } from '@/shared/constants';
import { useLockScroll } from '@/shared/hooks/use-lock-scroll';
import { useRouter } from 'next/router';

export type PreloaderProps = CommonTypes;

const preloaderTimeInBilliseconds = TIME.preloaderTimeInSeconds * 1000;

const Preloader: FC<PreloaderProps> = ({ className }) => {
  const {
    cnRoot,
    cnContent,
    cnAnimation,
    cnLoading,
    cnProgressbarWrapper,
    cnProgressbar,
  } = useClasses({
    className,
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { disableLockScroll, enableLockScroll } = useLockScroll({});

  const { progress } = useProgress();

  useEffect(() => {
    enableLockScroll();
    setTimeout(() => {
      setIsLoading(false);
      disableLockScroll();
    }, preloaderTimeInBilliseconds);

    const handleStart = (url: string) => {
      setIsLoading(true);
    };

    const handleStop = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, preloaderTimeInBilliseconds);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  if (progress === 100 && !isLoading) {
    return null;
  }

  return (
    <div className={cnRoot}>
      <Container>
        <div className={cnContent}>
          <Lottie className={cnAnimation} animationData={loader} loop={true} />

          <div className={cnProgressbarWrapper}>
            <span className={cnLoading}>{Math.round(progress)}%</span>
            <div
              className={cnProgressbar}
              style={{ width: `${Math.round(progress)}%` }}
            ></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Preloader;
