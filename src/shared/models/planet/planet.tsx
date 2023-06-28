import React, { FC, Suspense } from 'react';
import { CommonTypes } from 'src/shared/types/common';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from './ui/model/model';
import { useClasses } from './lib/use-classes';

export type PlanetProps = CommonTypes;

const Planet: FC<PlanetProps> = ({ className, ...props }) => {
  const { cnRoot, cnCanvas } = useClasses({ className });

  return (
    <div className={cnRoot}>
      <Canvas
        className={cnCanvas}
        gl={{ antialias: true }}
        camera={{
          position: [-30, 0, 0],
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
