import classNames from 'classnames/bind';
import { PlanetProps } from '../planet';

import classes from '../planet.module.scss';

type PickedPlanetProps = Pick<PlanetProps, 'className'>;

const cn = classNames.bind(classes);

export const useClasses = ({ className }: PickedPlanetProps) => {
  const cnRoot = cn(`planet`, className);
  const cnCanvas = cn(`planet__canvas`);

  return { cnRoot, cnCanvas };
};
