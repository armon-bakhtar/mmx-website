import classNames from 'classnames/bind';

import classes from '../contact-us.module.scss';
import { ContactUsProps } from '../contact-us';

const cn = classNames.bind(classes);

type PickedContactUsProps = Pick<ContactUsProps, 'className'>;

export const useClasses = ({ className }: PickedContactUsProps) => {
  const cnRoot = cn(`contact-us`, className);

  const cnContainer = cn('contact-us__container');

  const cnFormWrapper = cn('contact-us__form-wrapper');

  const cnTextWrapper = cn('contact-us__text-wrapper');

  const cnTitle = cn('contact-us__title');

  const cnContacts = cn('contact-us__contacts');

  const cnAdress = cn('contact-us__adress');

  const cnForm = cn('contact-us__form');

  const cnText = cn('contact-us__text');

  const cnInput = cn('contact-us__input');

  const cnButton = cn('contact-us__button');

  const cnAlert = cn('contact-us__alert');

  const cnIconWrapper = cn('contact-us__icon-wrapper');

  const cnIcon = cn('contact-us__icon');

  const cnBlur = cn('contact-us__blur');

  return {
    cnRoot,
    cnContainer,
    cnFormWrapper,
    cnTextWrapper,
    cnTitle,
    cnContacts,
    cnAdress,
    cnForm,
    cnText,
    cnInput,
    cnButton,
    cnAlert,
    cnIconWrapper,
    cnIcon,
    cnBlur,
  };
};
