import classNames from 'classnames/bind';
import { HeaderProps } from '../Header';
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

  const cnButton = cn(`header__button`);

  return {
    cnRoot,
    cnBurger,
    cnLogo,
    cnContainer,
    cnNav,
    cnMenu,
    cnMenuItem,
    cnLink,
    cnButton,
  };
};
