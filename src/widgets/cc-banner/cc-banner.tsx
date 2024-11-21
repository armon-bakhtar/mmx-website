import { useEffect, useRef } from 'react';
import { FC } from 'react';

export const CCBannerComponent: FC = () => {
  const hasEffectRun = useRef(false);

  useEffect(() => {
    if (!hasEffectRun.current) {
      hasEffectRun.current = true;
      const script = document.createElement('script');
      script.src = 'https://mmxdevlab.com/moment/cc-cookie-banner.js';
      script.async = true;
      script.setAttribute(
        'access-token',
        'b7b14ddc-6b78-462e-820f-732631695ded',
      );
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default CCBannerComponent;
