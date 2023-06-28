import React, { FC, Suspense } from 'react';
import { CommonTypes } from 'src/shared/types/common';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from './ui/model/model';
import { useClasses } from './lib/use-classes';
import { useClientSize } from '@/shared/hooks/use-client-size';

export type PlanetProps = CommonTypes;

const Planet: FC<PlanetProps> = ({ className, ...props }) => {
  const { cnRoot, cnCanvas } = useClasses({ className });
  const { getIsBreakpoint } = useClientSize();
  const isTablet = getIsBreakpoint('$tablet');

  return (
    <div className={cnRoot}>
      <Canvas
        className={cnCanvas}
        gl={{ antialias: true }}
        camera={{
          position: isTablet ? [-30, 0, 0] : [-40, 0, 0],
          fov: 45,
        }}
      >
        <Suspense>
          <Model />
          <Environment
            files="3D/spiaggia_di_mondello_1k.hdr"
            near={100}
            far={1000}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Planet;
