import { Maybe } from '@/shared/types/common';
import { MutableRefObject, useEffect } from 'react';

export const useOnClickOutside = (
  ref: MutableRefObject<HTMLElement | null | undefined>,
  callback: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Maybe<Node>)) {
        return;
      }

      callback(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, callback]);
};
