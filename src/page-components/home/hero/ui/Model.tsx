import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AmbientLight } from 'three';
export const Lights = () => {
  return (
    <>
      <spotLight
        position={[7.6, -3.0, 0.8]}
        angle={0.4}
        penumbra={1.25}
        intensity={2.15}
        color="white"
        distance={8.2}
      />
      <spotLight
        position={[-0.4, -2.8, -2.6]}
        angle={-1.7}
        penumbra={1.7}
        intensity={0.15}
        color="white"
        distance={11.0}
      />
      <spotLight
        position={[-1.8, -1.2, -5.8]}
        angle={-2.9}
        penumbra={0.7}
        intensity={0.3}
        color="white"
        distance={15.0}
      />
    </>
  );
};

const Model = (props: any) => {
  const { scene } = useGLTF('planet.glb');
  return <primitive {...props} object={scene} />;
};

const ModelContainer = (props: any) => {
  return (
    <Canvas {...props} style={{ width: '100%', height: '100%' }}>
      <Suspense>
        <Model />
        <Lights />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelContainer;
