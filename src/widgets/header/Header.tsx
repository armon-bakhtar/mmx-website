import { useLockScroll } from '@/shared/hooks/use-lock-scroll';
import { useScroll } from '@/shared/hooks/use-scroll';
import { BurgerMenu, MomentumLogo } from '@/shared/icons';
import { CommonTypes } from '@/shared/types/common';
import { ButtonPrimary } from '@/shared/ui/buttons/button-primary';
import { Container } from '@/shared/ui/container/container';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { useClasses } from './lib/use-classes';
export interface HeaderProps extends CommonTypes {
  isMenuOpen?: boolean;
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { disableLockScroll, enableLockScroll } = useLockScroll({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUnderlineVisible, setIsUnderlineVisible] = useState(false);
  const {
    cnRoot,
    cnBurger,
    cnContainer,
    cnNav,
    cnMenu,
    cnMenuItem,
    cnLink,
    cnButton,
    cnLogo,
  } = useClasses({
    className,
    isMenuOpen,
  });
  const handleCloseMenu = () => setIsMenuOpen(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const { scrollY } = useScroll();
  useEffect(() => {
    if (scrollY > 50) {
      setIsUnderlineVisible(true);
    } else {
      setIsUnderlineVisible(false);
    }
  }, [scrollY]);
  useEffect(() => {
    isMenuOpen ? enableLockScroll() : disableLockScroll();
  }, [isMenuOpen, enableLockScroll, disableLockScroll]);

  return (
    <header className={cnRoot}>
      <Container className={cnContainer}>
        <Link href="/">
          <MomentumLogo className={cnLogo} />
        </Link>
        <nav className={cnNav}>
          <ul className={cnMenu}>
            <li className={cnMenuItem}>
              <Link href="/">
                <MomentumLogo className={cnLogo} />
              </Link>
            </li>
            <li className={cnMenuItem}>
              <a target="_blank" href="/" className={cnLink}>
                Services
              </a>
            </li>
            <li className={cnMenuItem}>
              <a target="_blank" href="/" className={cnLink}>
                Advantages
              </a>
            </li>
            <li className={cnMenuItem}>
              <a target="_blank" href="/" className={cnLink}>
                Reviews
              </a>
            </li>
            <li className={cnMenuItem}>
              <a target="_blank" href="/" className={cnLink}>
                Contact
              </a>
            </li>
            <li className={cnMenuItem}>
              <ButtonPrimary>LET’s TALK</ButtonPrimary>
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
