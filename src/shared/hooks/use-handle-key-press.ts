import { useEffect } from 'react';

type UseHandleKeyPressArgs = {
  key?: string;
  callback: () => void;
};

export const useHandleKeyPress = ({
  key = `Escape`,
  callback,
}: UseHandleKeyPressArgs) => {
  useEffect(() => {
    const onKeydown = (event: globalThis.KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };

    document.addEventListener(`keydown`, onKeydown);

    return () => {
      document.removeEventListener(`keydown`, onKeydown);
    };
  }, [callback]);
};
