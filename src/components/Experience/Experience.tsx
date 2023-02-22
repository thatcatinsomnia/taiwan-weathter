import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Stats } from '@react-three/drei';
import { animated, useSpring } from '@react-spring/three';
import Taiwan from '../Taiwan';

const AnimatedPerspectiveCamera = animated(PerspectiveCamera);

type CameraSpring = {
  position: [x: number, y: number, z: number];
  rotationX: number;
};

export default function Experience() {
  const [springs, api] = useSpring<CameraSpring>(() => ({
    position: [0, 0, 5],
    rotationX: 0
  }));

  return (
    <Canvas style={{ position: 'fixed', inset: 0 }}>
      <Stats />
      <AnimatedPerspectiveCamera position={springs.position} rotation-x={springs.rotationX} makeDefault />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 10]} intensity={0.5} />

      <Suspense fallback={null}>
        <Taiwan cameraApi={api}/>
      </Suspense>
    </Canvas>
  );
}