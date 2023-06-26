import classNames from 'classnames/bind';
import { RequestSentProps } from '../request-sent';

import classes from '../request-sent.module.scss';

type PickedRequestSentProps = Pick<RequestSentProps, 'className'>;

const cn = classNames.bind(classes);

export const useClasses = ({ className }: PickedRequestSentProps) => {
  const cnRoot = cn(`request-sent`, className);

  const cnIcon = cn(`request-sent__icon`);

  const cnTitle = cn(`request-sent__title`);

  const cnText = cn(`request-sent__text`);

  const cnButton = cn(`request-sent__button`);

  return {
    cnRoot,
    cnIcon,
    cnTitle,
    cnText,
    cnButton,
  };
};
