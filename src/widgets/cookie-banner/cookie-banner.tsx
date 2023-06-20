import React, { FC, useState } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { Container } from '@/shared/ui/container/container';
import { useClasses } from './lib/use-classes';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { ButtonSecondary } from '@/shared/ui/buttons/button-secondary';
import SecureStoreServices, {
  WebSecureStorageKeys,
} from '@/shared/services/SecureStoreServices';

export interface CookieBannerProps extends CommonTypes {
  cookie?: string;
}

const CookieBanner: FC<CookieBannerProps> = ({ className, cookie }) => {
  const [isAcceptCookie, setIsAcceptCookie] = useState<boolean>();
  const { cnRoot, cnContainer, cnContent, cnText, cnButtonWrapper } =
    useClasses({
      className,
    });

  const handleAccept = () => {
    SecureStoreServices.setItem(WebSecureStorageKeys.Cookie, 'accept', null);
    setIsAcceptCookie(true);
  };

  const handleDecline = () => {
    SecureStoreServices.setItem(WebSecureStorageKeys.Cookie, 'reject');
    setIsAcceptCookie(true);
  };

  if (cookie || isAcceptCookie) {
    return null;
  }

  return (
    <div className={cnRoot}>
      <Container className={cnContainer}>
        <div className={cnContent}>
          <p className={cnText}>
            This website uses cookies to ensure you get the best experience on
            our website. They also allow us to analyze user behavior in order to
            constantly improve the website for you.
          </p>
          <div className={cnButtonWrapper}>
            <ButtonPrimary onClick={handleAccept}>Accept</ButtonPrimary>
            <ButtonSecondary onClick={handleDecline}>Reject</ButtonSecondary>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CookieBanner;
