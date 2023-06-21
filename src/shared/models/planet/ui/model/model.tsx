import { useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { TIME } from '@/shared/constants';
import { planetAnimation } from './lib/animation';

const Model = (props: any) => {
  const { scene } = useGLTF('3D/planet.glb');

  return (
    <motion.group {...planetAnimation}>
      <primitive {...props} animation={true} object={scene} />
    </motion.group>
  );
};

export default Model;
