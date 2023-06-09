import { useCallback } from 'react';

interface UseLockScrollParams {
  selector?: string;
}

let scrollPosition = 0;

export const useLockScroll = ({ selector = `body` }: UseLockScrollParams) => {
  const enableLockScroll = useCallback(() => {
    const scrollContainer = document.querySelector(selector) as HTMLElement;
    scrollPosition = window.pageYOffset;
    scrollContainer.style.overflow = `hidden`;
    scrollContainer.style.position = `fixed`;
    scrollContainer.style.top = `-${scrollPosition}px`;
    scrollContainer.style.width = `100%`;

    console.log(`this.scrollPosition`, scrollPosition);
  }, [selector]);

  const disableLockScroll = useCallback(() => {
    const scrollContainer = document.querySelector(selector) as HTMLElement;
    scrollContainer.style.removeProperty(`overflow`);
    scrollContainer.style.removeProperty(`position`);
    scrollContainer.style.removeProperty(`top`);
    scrollContainer.style.removeProperty(`width`);

    window.scrollTo(0, scrollPosition);
  }, [selector]);

  return {
    enableLockScroll,
    disableLockScroll,
  };
};
