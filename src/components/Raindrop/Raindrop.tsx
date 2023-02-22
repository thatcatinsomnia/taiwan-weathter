/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/raindrop.glb -t -p6 -k -r
*/

// import { useSpring, SpringValue, animated } from '@react-spring/three';
import { useRef, forwardRef } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    raindrop: THREE.Mesh;
  };
  materials: {
    lightblue: THREE.MeshStandardMaterial;
  };
};

type Props = JSX.IntrinsicElements['group'] & {
  x?: number;
  y?: number;
  z?: number;
};

export default function Raindrop({ scale = 0.1, x = 0, y = 0, z = 0, ...props}: Props) {
  const { nodes, materials } = useGLTF( '/raindrop.glb') as unknown as GLTFResult;
  const raindropRef = useRef<THREE.Group>(null);
  
  return (
    <group
      {...props}
      name="raindrop"
      ref={raindropRef}
      scale={scale}
      position-x={x}
      position-y={y}
      position-z={z}
      rotation-x={Math.PI / 2}
    >
      <mesh
        geometry={nodes.raindrop.geometry}
        material={materials.lightblue}
      />
    </group>
  );
}

useGLTF.preload('/raindrop.glb');