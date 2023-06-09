import { Instagram, Linkedin, MomentumLogo, Twitter } from '@/shared/icons';
import { CommonTypes } from '@/shared/types/common';
import { TextButtonPrimary } from '@/shared/ui/buttons/text-button-primary';
import { TextButtonSecondary } from '@/shared/ui/buttons/text-button-secondary';
import { Container } from '@/shared/ui/container/container';
import React, { FC } from 'react';
import { useClasses } from './lib/use-classes';

export type FooterProps = CommonTypes;

const Footer: FC<FooterProps> = ({ className }) => {
  const {
    cnRoot,
    cnContainer,
    cnTopWrapper,
    cnFirstBlock,
    cnLogo,
    cnLinkWrapper,
    cnLink,
    cnSecondBlock,
    cnSocialLinkWrapper,
    cnSocialLink,
    cnSocialText,
    cnBotWrapper,
    cnCopyright,
    cnBottomLinks,
  } = useClasses({ className });
  return (
    <footer className={cnRoot}>
      <Container className={cnContainer}>
        <div className={cnTopWrapper}>
          <div className={cnFirstBlock}>
            <MomentumLogo className={cnLogo} />
            <ul className={cnLinkWrapper}>
              <li>
                <a target="_blank" href="/" className={cnLink}>
                  Services
                </a>
              </li>
              <li>
                <a target="_blank" href="/" className={cnLink}>
                  Advantages
                </a>
              </li>
              <li>
                <a target="_blank" href="/" className={cnLink}>
                  Reviews
                </a>
              </li>
              <li>
                <a target="_blank" href="/" className={cnLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={cnSecondBlock}>
            <div className={cnSocialLinkWrapper}>
              <a target="_blank" href="/" className={cnSocialLink}>
                <Linkedin />
              </a>
              <a target="_blank" href="/" className={cnSocialLink}>
                <Twitter />
              </a>
              <a target="_blank" href="/" className={cnSocialLink}>
                <Instagram />
              </a>
            </div>
            <p className={cnSocialText}>Designed and developed by Purrweb</p>
          </div>
        </div>
        <div className={cnBotWrapper}>
          <p className={cnCopyright}>
            © Copyright 2023, All Rights Reserved by Momentum Max
          </p>
          <ul className={cnBottomLinks}>
            <li>
              <TextButtonSecondary>Privacy Policy</TextButtonSecondary>
            </li>
            <li>
              <TextButtonSecondary>Cookie Policy</TextButtonSecondary>
            </li>
            <li>
              <TextButtonSecondary>Terms Of Service</TextButtonSecondary>
            </li>
            <li>
              <TextButtonSecondary>Terms of Use</TextButtonSecondary>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
