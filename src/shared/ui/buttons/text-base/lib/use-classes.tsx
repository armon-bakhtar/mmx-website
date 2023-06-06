import classNames from 'classnames/bind';

import { TextBaseProps } from '../text-base';
import classes from '../text-base.module.scss';

const cn = classNames.bind(classes);

type PickedTextBaseProps = Pick<
  TextBaseProps,
  'className' | 'contentCSS' | 'isLoading'
>;
export const useClasses = ({
  className,
  contentCSS,
  isLoading,
}: PickedTextBaseProps) => {
  const cnRoot = cn(`text-button`, { loading: isLoading }, className);

  const cnContent = cn(
    `text-button__content`,
    { loading: isLoading },
    contentCSS,
  );

  return {
    cnRoot,
    cnContent,
  };
};
