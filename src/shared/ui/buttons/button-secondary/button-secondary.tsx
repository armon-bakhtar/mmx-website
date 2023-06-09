import { FC } from 'react';
import Base, { BaseProps } from '../base/base';

import { useClasses } from './lib/use-classes';

const ButtonSecondary: FC<BaseProps> = ({ className, ...props }) => {
  const { cnRoot } = useClasses({ className });

  return <Base className={cnRoot} {...props} />;
};

export default ButtonSecondary;
