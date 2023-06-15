import classNames from 'classnames/bind';

import classes from '../contact-us-quick.module.scss';
import { ContactUsQuickProps } from '../contact-us-quick';

const cn = classNames.bind(classes);

type PickedContactUsQuickProps = Pick<ContactUsQuickProps, 'className'>;

export const useClasses = ({ className }: PickedContactUsQuickProps) => {
  const cnRoot = cn(`contact-us-quick`, className);

  const cnContainer = cn('contact-us-quick__container');

  const cnFormWrapper = cn('contact-us-quick__form-wrapper');

  const cnTitle = cn('contact-us-quick__title');

  const cnText = cn('contact-us-quick__text');

  const cnForm = cn('contact-us-quick__form');

  const cnIcon = cn('contact-us-quick__icon');

  const cnButton = cn('contact-us-quick__button');

  return {
    cnRoot,
    cnContainer,
    cnFormWrapper,
    cnTitle,
    cnText,
    cnForm,
    cnIcon,
    cnButton,
  };
};
