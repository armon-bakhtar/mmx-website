import { useAnimations, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { TIME } from '@/shared/constants';
import { useAnimation } from './lib/use-animation';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useClientSize } from '@/shared/hooks/use-client-size';

type GLTFResult = GLTF & {
  nodes: any;
  materials: {
    purple_planet_material: THREE.MeshStandardMaterial;
    trail: THREE.MeshStandardMaterial;
    dot: THREE.MeshStandardMaterial;
  };
};

export function Model() {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF(
    '3D/planet.glb',
  ) as GLTFResult;
  const { planetAnimation } = useAnimation();
  const { actions, names } = useAnimations(animations, group);
  const { getIsBreakpoint } = useClientSize();

  const isTablet = getIsBreakpoint('$tablet');

  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play();
  }, []);

  return (
    <motion.group
      ref={group}
      dispose={null}
      {...planetAnimation}
      // key={isTablet + 'planetAnimation'}
      // transition={{ rotateX: {} }}
    >
      <group name="Scene001">
        <mesh
          name="purple_sphere002"
          castShadow
          receiveShadow
          geometry={nodes.purple_sphere002.geometry}
          material={materials.purple_planet_material}
          rotation={[-1.5, 4.5, -1.5]}
          scale={6}
        >
          <mesh
            name="dot006"
            castShadow
            receiveShadow
            geometry={nodes.dot006.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot007"
            castShadow
            receiveShadow
            geometry={nodes.dot007.geometry}
            material={materials.dot}
            position={[0.104, 0.548, 0.779]}
            scale={0.022}
          />
          <mesh
            name="dot008"
            castShadow
            receiveShadow
            geometry={nodes.dot008.geometry}
            material={materials.dot}
            position={[0.253, 0.61, 0.697]}
            scale={0.022}
          />
          <mesh
            name="dot009"
            castShadow
            receiveShadow
            geometry={nodes.dot009.geometry}
            material={materials.dot}
            position={[-0.331, 0.453, 0.781]}
            scale={0.022}
          />
          <mesh
            name="dot010"
            castShadow
            receiveShadow
            geometry={nodes.dot010.geometry}
            material={materials.dot}
            position={[0.182, 0.67, 0.646]}
            scale={0.022}
          />
          <mesh
            name="dot011"
            castShadow
            receiveShadow
            geometry={nodes.dot011.geometry}
            material={materials.dot}
            position={[0.18, 0.479, 0.806]}
            scale={0.022}
          />
          <mesh
            name="dot012"
            castShadow
            receiveShadow
            geometry={nodes.dot012.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot013"
            castShadow
            receiveShadow
            geometry={nodes.dot013.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot014"
            castShadow
            receiveShadow
            geometry={nodes.dot014.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot015"
            castShadow
            receiveShadow
            geometry={nodes.dot015.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot016"
            castShadow
            receiveShadow
            geometry={nodes.dot016.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot017"
            castShadow
            receiveShadow
            geometry={nodes.dot017.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot018"
            castShadow
            receiveShadow
            geometry={nodes.dot018.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot019"
            castShadow
            receiveShadow
            geometry={nodes.dot019.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot020"
            castShadow
            receiveShadow
            geometry={nodes.dot020.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot021"
            castShadow
            receiveShadow
            geometry={nodes.dot021.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot022"
            castShadow
            receiveShadow
            geometry={nodes.dot022.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot023"
            castShadow
            receiveShadow
            geometry={nodes.dot023.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot024"
            castShadow
            receiveShadow
            geometry={nodes.dot024.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot025"
            castShadow
            receiveShadow
            geometry={nodes.dot025.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot026"
            castShadow
            receiveShadow
            geometry={nodes.dot026.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot027"
            castShadow
            receiveShadow
            geometry={nodes.dot027.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot028"
            castShadow
            receiveShadow
            geometry={nodes.dot028.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot029"
            castShadow
            receiveShadow
            geometry={nodes.dot029.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot030"
            castShadow
            receiveShadow
            geometry={nodes.dot030.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot031"
            castShadow
            receiveShadow
            geometry={nodes.dot031.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot032"
            castShadow
            receiveShadow
            geometry={nodes.dot032.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot033"
            castShadow
            receiveShadow
            geometry={nodes.dot033.geometry}
            material={materials.dot}
            position={[0.18, 0.479, 0.806]}
            scale={0.022}
          />
          <mesh
            name="dot034"
            castShadow
            receiveShadow
            geometry={nodes.dot034.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot035"
            castShadow
            receiveShadow
            geometry={nodes.dot035.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot036"
            castShadow
            receiveShadow
            geometry={nodes.dot036.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot037"
            castShadow
            receiveShadow
            geometry={nodes.dot037.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot038"
            castShadow
            receiveShadow
            geometry={nodes.dot038.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot039"
            castShadow
            receiveShadow
            geometry={nodes.dot039.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot040"
            castShadow
            receiveShadow
            geometry={nodes.dot040.geometry}
            material={materials.trail}
            position={[-0.331, 0.453, 0.781]}
            scale={0.005}
          />
          <mesh
            name="dot041"
            castShadow
            receiveShadow
            geometry={nodes.dot041.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot042"
            castShadow
            receiveShadow
            geometry={nodes.dot042.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot043"
            castShadow
            receiveShadow
            geometry={nodes.dot043.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot044"
            castShadow
            receiveShadow
            geometry={nodes.dot044.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot045"
            castShadow
            receiveShadow
            geometry={nodes.dot045.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot046"
            castShadow
            receiveShadow
            geometry={nodes.dot046.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot047"
            castShadow
            receiveShadow
            geometry={nodes.dot047.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot048"
            castShadow
            receiveShadow
            geometry={nodes.dot048.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot049"
            castShadow
            receiveShadow
            geometry={nodes.dot049.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot050"
            castShadow
            receiveShadow
            geometry={nodes.dot050.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot051"
            castShadow
            receiveShadow
            geometry={nodes.dot051.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot052"
            castShadow
            receiveShadow
            geometry={nodes.dot052.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot053"
            castShadow
            receiveShadow
            geometry={nodes.dot053.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot054"
            castShadow
            receiveShadow
            geometry={nodes.dot054.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot055"
            castShadow
            receiveShadow
            geometry={nodes.dot055.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot056"
            castShadow
            receiveShadow
            geometry={nodes.dot056.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot057"
            castShadow
            receiveShadow
            geometry={nodes.dot057.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot058"
            castShadow
            receiveShadow
            geometry={nodes.dot058.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot059"
            castShadow
            receiveShadow
            geometry={nodes.dot059.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot060"
            castShadow
            receiveShadow
            geometry={nodes.dot060.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot061"
            castShadow
            receiveShadow
            geometry={nodes.dot061.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot062"
            castShadow
            receiveShadow
            geometry={nodes.dot062.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot063"
            castShadow
            receiveShadow
            geometry={nodes.dot063.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot064"
            castShadow
            receiveShadow
            geometry={nodes.dot064.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot065"
            castShadow
            receiveShadow
            geometry={nodes.dot065.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot066"
            castShadow
            receiveShadow
            geometry={nodes.dot066.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot067"
            castShadow
            receiveShadow
            geometry={nodes.dot067.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot068"
            castShadow
            receiveShadow
            geometry={nodes.dot068.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot069"
            castShadow
            receiveShadow
            geometry={nodes.dot069.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot070"
            castShadow
            receiveShadow
            geometry={nodes.dot070.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot071"
            castShadow
            receiveShadow
            geometry={nodes.dot071.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot072"
            castShadow
            receiveShadow
            geometry={nodes.dot072.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot073"
            castShadow
            receiveShadow
            geometry={nodes.dot073.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot074"
            castShadow
            receiveShadow
            geometry={nodes.dot074.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot075"
            castShadow
            receiveShadow
            geometry={nodes.dot075.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot076"
            castShadow
            receiveShadow
            geometry={nodes.dot076.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot077"
            castShadow
            receiveShadow
            geometry={nodes.dot077.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot078"
            castShadow
            receiveShadow
            geometry={nodes.dot078.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot079"
            castShadow
            receiveShadow
            geometry={nodes.dot079.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot080"
            castShadow
            receiveShadow
            geometry={nodes.dot080.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot081"
            castShadow
            receiveShadow
            geometry={nodes.dot081.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot082"
            castShadow
            receiveShadow
            geometry={nodes.dot082.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.007}
          />
          <mesh
            name="dot083"
            castShadow
            receiveShadow
            geometry={nodes.dot083.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot084"
            castShadow
            receiveShadow
            geometry={nodes.dot084.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot085"
            castShadow
            receiveShadow
            geometry={nodes.dot085.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot086"
            castShadow
            receiveShadow
            geometry={nodes.dot086.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot087"
            castShadow
            receiveShadow
            geometry={nodes.dot087.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot088"
            castShadow
            receiveShadow
            geometry={nodes.dot088.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot089"
            castShadow
            receiveShadow
            geometry={nodes.dot089.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot090"
            castShadow
            receiveShadow
            geometry={nodes.dot090.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot091"
            castShadow
            receiveShadow
            geometry={nodes.dot091.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot092"
            castShadow
            receiveShadow
            geometry={nodes.dot092.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot093"
            castShadow
            receiveShadow
            geometry={nodes.dot093.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot094"
            castShadow
            receiveShadow
            geometry={nodes.dot094.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot095"
            castShadow
            receiveShadow
            geometry={nodes.dot095.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot096"
            castShadow
            receiveShadow
            geometry={nodes.dot096.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot097"
            castShadow
            receiveShadow
            geometry={nodes.dot097.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot098"
            castShadow
            receiveShadow
            geometry={nodes.dot098.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot099"
            castShadow
            receiveShadow
            geometry={nodes.dot099.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot100"
            castShadow
            receiveShadow
            geometry={nodes.dot100.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot101"
            castShadow
            receiveShadow
            geometry={nodes.dot101.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot102"
            castShadow
            receiveShadow
            geometry={nodes.dot102.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot103"
            castShadow
            receiveShadow
            geometry={nodes.dot103.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot104"
            castShadow
            receiveShadow
            geometry={nodes.dot104.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot105"
            castShadow
            receiveShadow
            geometry={nodes.dot105.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot106"
            castShadow
            receiveShadow
            geometry={nodes.dot106.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot107"
            castShadow
            receiveShadow
            geometry={nodes.dot107.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot108"
            castShadow
            receiveShadow
            geometry={nodes.dot108.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot109"
            castShadow
            receiveShadow
            geometry={nodes.dot109.geometry}
            material={materials.trail}
            position={[0.182, 0.67, 0.646]}
            scale={0.003}
          />
          <mesh
            name="dot110"
            castShadow
            receiveShadow
            geometry={nodes.dot110.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot111"
            castShadow
            receiveShadow
            geometry={nodes.dot111.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot112"
            castShadow
            receiveShadow
            geometry={nodes.dot112.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot113"
            castShadow
            receiveShadow
            geometry={nodes.dot113.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot114"
            castShadow
            receiveShadow
            geometry={nodes.dot114.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot115"
            castShadow
            receiveShadow
            geometry={nodes.dot115.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot116"
            castShadow
            receiveShadow
            geometry={nodes.dot116.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot117"
            castShadow
            receiveShadow
            geometry={nodes.dot117.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot118"
            castShadow
            receiveShadow
            geometry={nodes.dot118.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot119"
            castShadow
            receiveShadow
            geometry={nodes.dot119.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot120"
            castShadow
            receiveShadow
            geometry={nodes.dot120.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot121"
            castShadow
            receiveShadow
            geometry={nodes.dot121.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot122"
            castShadow
            receiveShadow
            geometry={nodes.dot122.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot123"
            castShadow
            receiveShadow
            geometry={nodes.dot123.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot124"
            castShadow
            receiveShadow
            geometry={nodes.dot124.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot125"
            castShadow
            receiveShadow
            geometry={nodes.dot125.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot126"
            castShadow
            receiveShadow
            geometry={nodes.dot126.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot127"
            castShadow
            receiveShadow
            geometry={nodes.dot127.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot128"
            castShadow
            receiveShadow
            geometry={nodes.dot128.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot129"
            castShadow
            receiveShadow
            geometry={nodes.dot129.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot130"
            castShadow
            receiveShadow
            geometry={nodes.dot130.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot131"
            castShadow
            receiveShadow
            geometry={nodes.dot131.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot132"
            castShadow
            receiveShadow
            geometry={nodes.dot132.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot133"
            castShadow
            receiveShadow
            geometry={nodes.dot133.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot134"
            castShadow
            receiveShadow
            geometry={nodes.dot134.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot135"
            castShadow
            receiveShadow
            geometry={nodes.dot135.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot136"
            castShadow
            receiveShadow
            geometry={nodes.dot136.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot137"
            castShadow
            receiveShadow
            geometry={nodes.dot137.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot138"
            castShadow
            receiveShadow
            geometry={nodes.dot138.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot139"
            castShadow
            receiveShadow
            geometry={nodes.dot139.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot140"
            castShadow
            receiveShadow
            geometry={nodes.dot140.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot141"
            castShadow
            receiveShadow
            geometry={nodes.dot141.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot142"
            castShadow
            receiveShadow
            geometry={nodes.dot142.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot143"
            castShadow
            receiveShadow
            geometry={nodes.dot143.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot144"
            castShadow
            receiveShadow
            geometry={nodes.dot144.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot145"
            castShadow
            receiveShadow
            geometry={nodes.dot145.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot146"
            castShadow
            receiveShadow
            geometry={nodes.dot146.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot147"
            castShadow
            receiveShadow
            geometry={nodes.dot147.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot148"
            castShadow
            receiveShadow
            geometry={nodes.dot148.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot149"
            castShadow
            receiveShadow
            geometry={nodes.dot149.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot150"
            castShadow
            receiveShadow
            geometry={nodes.dot150.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot151"
            castShadow
            receiveShadow
            geometry={nodes.dot151.geometry}
            material={materials.trail}
            position={[0.18, 0.479, 0.806]}
            scale={0.005}
          />
          <mesh
            name="dot152"
            castShadow
            receiveShadow
            geometry={nodes.dot152.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot153"
            castShadow
            receiveShadow
            geometry={nodes.dot153.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot154"
            castShadow
            receiveShadow
            geometry={nodes.dot154.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot155"
            castShadow
            receiveShadow
            geometry={nodes.dot155.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot156"
            castShadow
            receiveShadow
            geometry={nodes.dot156.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot157"
            castShadow
            receiveShadow
            geometry={nodes.dot157.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot158"
            castShadow
            receiveShadow
            geometry={nodes.dot158.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot159"
            castShadow
            receiveShadow
            geometry={nodes.dot159.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot160"
            castShadow
            receiveShadow
            geometry={nodes.dot160.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot161"
            castShadow
            receiveShadow
            geometry={nodes.dot161.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot162"
            castShadow
            receiveShadow
            geometry={nodes.dot162.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot163"
            castShadow
            receiveShadow
            geometry={nodes.dot163.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot164"
            castShadow
            receiveShadow
            geometry={nodes.dot164.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot165"
            castShadow
            receiveShadow
            geometry={nodes.dot165.geometry}
            material={materials.dot}
            position={[0.253, 0.61, 0.697]}
            scale={0.022}
          />
          <mesh
            name="dot166"
            castShadow
            receiveShadow
            geometry={nodes.dot166.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot167"
            castShadow
            receiveShadow
            geometry={nodes.dot167.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot168"
            castShadow
            receiveShadow
            geometry={nodes.dot168.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot169"
            castShadow
            receiveShadow
            geometry={nodes.dot169.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot170"
            castShadow
            receiveShadow
            geometry={nodes.dot170.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot171"
            castShadow
            receiveShadow
            geometry={nodes.dot171.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot172"
            castShadow
            receiveShadow
            geometry={nodes.dot172.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot173"
            castShadow
            receiveShadow
            geometry={nodes.dot173.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot174"
            castShadow
            receiveShadow
            geometry={nodes.dot174.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot175"
            castShadow
            receiveShadow
            geometry={nodes.dot175.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot176"
            castShadow
            receiveShadow
            geometry={nodes.dot176.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot177"
            castShadow
            receiveShadow
            geometry={nodes.dot177.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot178"
            castShadow
            receiveShadow
            geometry={nodes.dot178.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot179"
            castShadow
            receiveShadow
            geometry={nodes.dot179.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot180"
            castShadow
            receiveShadow
            geometry={nodes.dot180.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot181"
            castShadow
            receiveShadow
            geometry={nodes.dot181.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot182"
            castShadow
            receiveShadow
            geometry={nodes.dot182.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot183"
            castShadow
            receiveShadow
            geometry={nodes.dot183.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot184"
            castShadow
            receiveShadow
            geometry={nodes.dot184.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot185"
            castShadow
            receiveShadow
            geometry={nodes.dot185.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot186"
            castShadow
            receiveShadow
            geometry={nodes.dot186.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot187"
            castShadow
            receiveShadow
            geometry={nodes.dot187.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot188"
            castShadow
            receiveShadow
            geometry={nodes.dot188.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot189"
            castShadow
            receiveShadow
            geometry={nodes.dot189.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot190"
            castShadow
            receiveShadow
            geometry={nodes.dot190.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot191"
            castShadow
            receiveShadow
            geometry={nodes.dot191.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot192"
            castShadow
            receiveShadow
            geometry={nodes.dot192.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot193"
            castShadow
            receiveShadow
            geometry={nodes.dot193.geometry}
            material={materials.trail}
            position={[0.253, 0.61, 0.697]}
            scale={0.006}
          />
          <mesh
            name="dot194"
            castShadow
            receiveShadow
            geometry={nodes.dot194.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot195"
            castShadow
            receiveShadow
            geometry={nodes.dot195.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot196"
            castShadow
            receiveShadow
            geometry={nodes.dot196.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot197"
            castShadow
            receiveShadow
            geometry={nodes.dot197.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot198"
            castShadow
            receiveShadow
            geometry={nodes.dot198.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot199"
            castShadow
            receiveShadow
            geometry={nodes.dot199.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot200"
            castShadow
            receiveShadow
            geometry={nodes.dot200.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot201"
            castShadow
            receiveShadow
            geometry={nodes.dot201.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot202"
            castShadow
            receiveShadow
            geometry={nodes.dot202.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot203"
            castShadow
            receiveShadow
            geometry={nodes.dot203.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot204"
            castShadow
            receiveShadow
            geometry={nodes.dot204.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot205"
            castShadow
            receiveShadow
            geometry={nodes.dot205.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot206"
            castShadow
            receiveShadow
            geometry={nodes.dot206.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot207"
            castShadow
            receiveShadow
            geometry={nodes.dot207.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot208"
            castShadow
            receiveShadow
            geometry={nodes.dot208.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot209"
            castShadow
            receiveShadow
            geometry={nodes.dot209.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot210"
            castShadow
            receiveShadow
            geometry={nodes.dot210.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot211"
            castShadow
            receiveShadow
            geometry={nodes.dot211.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot212"
            castShadow
            receiveShadow
            geometry={nodes.dot212.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot213"
            castShadow
            receiveShadow
            geometry={nodes.dot213.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot214"
            castShadow
            receiveShadow
            geometry={nodes.dot214.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot215"
            castShadow
            receiveShadow
            geometry={nodes.dot215.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot216"
            castShadow
            receiveShadow
            geometry={nodes.dot216.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot217"
            castShadow
            receiveShadow
            geometry={nodes.dot217.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot218"
            castShadow
            receiveShadow
            geometry={nodes.dot218.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot219"
            castShadow
            receiveShadow
            geometry={nodes.dot219.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot220"
            castShadow
            receiveShadow
            geometry={nodes.dot220.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot221"
            castShadow
            receiveShadow
            geometry={nodes.dot221.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot222"
            castShadow
            receiveShadow
            geometry={nodes.dot222.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot223"
            castShadow
            receiveShadow
            geometry={nodes.dot223.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot224"
            castShadow
            receiveShadow
            geometry={nodes.dot224.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot225"
            castShadow
            receiveShadow
            geometry={nodes.dot225.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot226"
            castShadow
            receiveShadow
            geometry={nodes.dot226.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot227"
            castShadow
            receiveShadow
            geometry={nodes.dot227.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot228"
            castShadow
            receiveShadow
            geometry={nodes.dot228.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot229"
            castShadow
            receiveShadow
            geometry={nodes.dot229.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot230"
            castShadow
            receiveShadow
            geometry={nodes.dot230.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot231"
            castShadow
            receiveShadow
            geometry={nodes.dot231.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot232"
            castShadow
            receiveShadow
            geometry={nodes.dot232.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
          <mesh
            name="dot233"
            castShadow
            receiveShadow
            geometry={nodes.dot233.geometry}
            material={materials.trail}
            position={[0.104, 0.548, 0.779]}
            scale={0.004}
          />
        </mesh>
      </group>
    </motion.group>
  );
}

// useGLTF.preload("/planet.glb");
export default Model;
