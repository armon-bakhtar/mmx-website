import classNames from 'classnames/bind';

import classes from '../terms-ui.module.scss';
import { TermsProps } from '../terms-ui';

const cn = classNames.bind(classes);

type PickedTermsProps = Pick<TermsProps, 'className'>;

export const useClasses = ({ className }: PickedTermsProps) => {
  const cnRoot = cn(`privacy-policy-ui`, className);

  const cnContainer = cn('privacy-policy-ui__container');

  const cnPart = cn('privacy-policy-ui__part');

  const cnTitle = cn('privacy-policy-ui__title');

  const cnPartTitle = cn('privacy-policy-ui__part-title');

  const cnText = cn('privacy-policy-ui__text');

  return {
    cnRoot,
    cnContainer,
    cnPart,
    cnTitle,
    cnPartTitle,
    cnText,
  };
};
