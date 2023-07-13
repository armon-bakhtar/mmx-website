import classNames from 'classnames/bind';

import classes from '../privacy-policy-ui.module.scss';
import { PrivacyPolicyProps } from '../privacy-policy-ui';

const cn = classNames.bind(classes);

type PickedPrivacyPolicyProps = Pick<PrivacyPolicyProps, 'className'>;

export const useClasses = ({ className }: PickedPrivacyPolicyProps) => {
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
