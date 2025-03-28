import classNames from 'classnames/bind';
import { HeaderProps } from '../header';
import classes from '../header.module.scss';

const cn = classNames.bind(classes);

type PickedHeaderProps = Pick<HeaderProps, 'className' | 'isMenuOpen'>;

export const useClasses = ({ className, isMenuOpen }: PickedHeaderProps) => {
  const cnRoot = cn(`header`, className);

  const cnBurger = cn(`buttonBurger`, { buttonBurger_active: isMenuOpen });

  const cnContainer = cn(`header__container`);

  const cnLogo = cn(`header__logo`);

  const cnNav = cn(`header__navigation`, {
    header__navigation_open: isMenuOpen,
  });

  const cnMenu = cn(`header__menu`);

  const cnLink = cn(`header__link`);

  const cnMenuItem = cn(`header__menu-item`);

  const cnMenuSocialLinks = cn(`header__social-link-wrapper`);

  const cnMenuButton = cn(`header__menu-button`);

  return {
    cnRoot,
    cnBurger,
    cnLogo,
    cnContainer,
    cnNav,
    cnMenu,
    cnMenuItem,
    cnLink,
    cnMenuSocialLinks,
    cnMenuButton,
  };
};
