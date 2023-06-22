import { useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { TIME } from '@/shared/constants';
import { useAnimation } from './lib/use-animation';

const Model = (props: any) => {
  const { scene } = useGLTF('3D/planet.glb');
  const { planetAnimation } = useAnimation();
  return (
    <motion.group {...planetAnimation}>
      <primitive {...props} animation={true} object={scene} />
    </motion.group>
  );
};

export default Model;
