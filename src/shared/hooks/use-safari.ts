import { useEffect, useState } from 'react';

export const useSafari = () => {
  const [isSafari, setIsSafari] = useState<boolean>();
  useEffect(() => {
    setIsSafari(
      /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent),
    );
  }, []);
  return { isSafari };
};
