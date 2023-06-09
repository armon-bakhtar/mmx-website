import throttle from 'lodash/throttle';
import { DependencyList, useEffect, useRef, useState } from 'react';

type Args = {
  extraTopHeight?: number;
  extraBottomHeight?: number;
  deps?: DependencyList;
};

export const usePositionAreas = <
  S extends HTMLElement = HTMLDivElement,
  R extends HTMLElement = HTMLDivElement,
>({
  extraTopHeight = 0,
  extraBottomHeight = 0,
  deps,
}: Args) => {
  const staticRef = useRef<S>(null);
  const relocatableRef = useRef<R>(null);

  const [areas, setAreas] = useState({
    hasTopArea: false,
    hasBottomArea: false,
    hasLeftArea: false,
    hasRightArea: false,
  });

  useEffect(() => {
    const staticElement = staticRef.current;
    const relocatebleElement = relocatableRef.current;

    if (!staticElement || !relocatebleElement) {
      return;
    }

    const handleChangeAreas = throttle(() => {
      const staticPos = staticElement.getBoundingClientRect();
      const relocatablePos = relocatebleElement.getBoundingClientRect();

      const hasTopArea =
        Math.round(staticPos.top - relocatablePos.height - extraTopHeight) >= 0;
      const hasBottomArea =
        Math.round(
          window.innerHeight -
            (staticPos.bottom + relocatablePos.height + extraBottomHeight),
        ) >= 0;
      const hasLeftArea =
        Math.round(staticPos.left - relocatablePos.width) >= 0;
      const hasRightArea =
        Math.round(
          window.innerWidth - (staticPos.right + relocatablePos.width),
        ) >= 0;

      setAreas(() => ({
        hasTopArea,
        hasBottomArea,
        hasLeftArea,
        hasRightArea,
      }));
    }, 150);
    handleChangeAreas();

    window.addEventListener('scroll', handleChangeAreas);
    window.addEventListener('resize', handleChangeAreas);

    return () => {
      window.removeEventListener('scroll', handleChangeAreas);
      window.addEventListener('resize', handleChangeAreas);
    };
  }, [deps]);

  return {
    staticRef,
    relocatableRef,
    ...areas,
  };
};
