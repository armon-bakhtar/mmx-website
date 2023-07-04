import classNames from 'classnames/bind';
import { FooterProps } from '../footer';
import classes from '../footer.module.scss';

const cn = classNames.bind(classes);

type PickedFooterProps = Pick<FooterProps, 'className'>;

export const useClasses = ({ className }: PickedFooterProps) => {
  const cnRoot = cn('footer', className);

  const cnContainer = cn('footer__container');

  const cnTopWrapper = cn('footer__top-wrapper');

  const cnFirstBlock = cn('footer__first-block');

  const cnLogo = cn('footer__logo');

  const cnLinkWrapper = cn('footer__link-wrapper');

  const cnLink = cn('footer__link');

  const cnSecondBlock = cn('footer__second-block');

  const cnSocialLinkWrapper = cn('footer__social-link-wrapper');

  const cnSocialLink = cn('footer__social-link');

  const cnSocialText = cn('footer__social-text');

  const cnBotWrapper = cn('footer__bottom-wrapper');

  const cnCopyright = cn('footer__copyright');

  const cnBottomLinks = cn('footer__bottom-links');

  const cnBottomLink = cn('footer__bottom-link');

  return {
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
  };
};
