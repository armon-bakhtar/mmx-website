import { useLockScroll } from '@/shared/hooks/use-lock-scroll';
import {
  BurgerMenu,
  Instagram,
  Linkedin,
  MomentumLogo,
  Twitter,
} from '@/shared/icons';
import { CommonTypes } from '@/shared/types/common';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { Container } from '@/shared/ui/container/container';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { LINKS } from '../../shared/constants/links';
import { useClasses } from './lib/use-classes';
import { useClientSize } from '@/shared/hooks/use-client-size';
import { useAnchorLink } from '@/shared/hooks/use-anchor-link';
import { PATHS } from '@/shared/constants/paths';

export interface HeaderProps extends CommonTypes {
  isMenuOpen?: boolean;
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { disableLockScroll, enableLockScroll } = useLockScroll({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { handleAnchorLink } = useAnchorLink();

  const {
    cnRoot,
    cnBurger,
    cnContainer,
    cnNav,
    cnMenu,
    cnMenuItem,
    cnLink,
    cnLogo,
    cnMenuSocialLinks,
    cnSocialLink,
  } = useClasses({
    className,
    isMenuOpen,
  });
  const handleCloseMenu = () => setIsMenuOpen(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  const { getIsBreakpoint } = useClientSize();
  const isTablet = getIsBreakpoint('$tablet');

  useEffect(() => {
    if (!isTablet) {
      isMenuOpen ? enableLockScroll() : disableLockScroll();
    }
  }, [isMenuOpen, enableLockScroll, disableLockScroll]);

  const handleLink = async (path: string) => {
    await handleCloseMenu();
    handleAnchorLink(path);
  };

  return (
    <header className={cnRoot}>
      <Container className={cnContainer}>
        <Link href="/">
          <MomentumLogo className={cnLogo} />
        </Link>
        <nav className={cnNav}>
          <ul className={cnMenu}>
            {LINKS.map((link) => (
              <li key={link.path} className={cnMenuItem}>
                <button
                  className={cnLink}
                  onClick={() => handleLink(link.path)}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li className={cnMenuSocialLinks}>
              <a target="_blank" href="/" className={cnLink}>
                <Linkedin />
              </a>
              <a target="_blank" href="/" className={cnLink}>
                <Twitter />
              </a>
              <a target="_blank" href="/" className={cnLink}>
                <Instagram />
              </a>
            </li>
            <li className={cnMenuItem}>
              <ButtonPrimary onClick={() => handleLink(PATHS.CONTACT)}>
                LET’s TALK
              </ButtonPrimary>
            </li>
          </ul>
        </nav>

        <button className={cnBurger} onClick={() => handleToggleMenu()}>
          <BurgerMenu />
        </button>
      </Container>
    </header>
  );
};

export default Header;
