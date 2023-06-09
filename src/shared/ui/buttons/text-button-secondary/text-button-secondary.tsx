import { FC } from 'react';
import TextBase, { TextBaseProps } from '../text-base/text-base';

import { useClasses } from './lib/use-classes';

const TextButtonSecondary: FC<TextBaseProps> = ({ className, ...props }) => {
  const { cnRoot } = useClasses({ className });

  return <TextBase className={cnRoot} {...props} />;
};

export default TextButtonSecondary;
