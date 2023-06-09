import { useCallback, useEffect, useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    setIsActive(initialState);
  }, [initialState]);

  const toggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const open = useCallback(() => {
    setIsActive(true);
  }, [setIsActive]);

  const close = useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);

  return {
    isActive,
    toggle,
    open,
    close,
  };
};
