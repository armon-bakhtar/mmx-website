import { LINKS } from '@/shared/constants/links';
import { PATHS } from '@/shared/constants/paths';
import { useAnchorLink } from '@/shared/hooks/use-anchor-link';
import { Instagram, Linkedin, MomentumLogo, Twitter } from '@/shared/icons';
import { CommonTypes } from '@/shared/types/common';
import { Container } from '@/shared/ui/container/container';
import Link from 'next/link';
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
    cnBottomLink,
  } = useClasses({ className });
  const { handleAnchorLink } = useAnchorLink();

  return (
    <footer className={cnRoot}>
      <Container className={cnContainer}>
        <div className={cnTopWrapper}>
          <div className={cnFirstBlock}>
            <MomentumLogo className={cnLogo} />
            <ul className={cnLinkWrapper}>
              {LINKS.map((link) => (
                <li key={link.path}>
                  <button
                    className={cnLink}
                    onClick={() => handleAnchorLink(link.path)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
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
            <a
              className={cnSocialText}
              href="https://www.purrweb.com/"
              rel="dofollow"
            >
              Designed and developed by Purrweb
            </a>
          </div>
        </div>
        <div className={cnBotWrapper}>
          <p className={cnCopyright}>
            © Copyright 2023, All Rights Reserved by Momentum Max
          </p>
          <ul className={cnBottomLinks}>
            <li>
              <Link href={PATHS.PRIVACY_POLICY} className={cnBottomLink}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={PATHS.TERMS} className={cnBottomLink}>
                Terms Of Service
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
