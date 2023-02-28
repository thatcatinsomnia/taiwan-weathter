import * as THREE from 'three';
import type { Dispatch, SetStateAction } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { animated, useSpring } from '@react-spring/three';
import Taiwan from '../Taiwan';

const AnimatedPerspectiveCamera = animated(PerspectiveCamera);

type CameraSpring = {
  position: [x: number, y: number, z: number];
  rotationX: number;
};

type Props = {
  setLocation: Dispatch<SetStateAction<string>>;
  wxCode?: string;
}

export default function Experience({ setLocation, wxCode }: Props) {
  const [springs, api] = useSpring<CameraSpring>(() => ({
    position: [0, 0, 3.8],
    rotationX: 0
  }));

  return (
    <div className="fixed inset-0 dark:bg-gray-800">
      <Canvas>
        <AnimatedPerspectiveCamera position={springs.position} rotation-x={springs.rotationX} makeDefault />
        <ambientLight intensity={0.2} />
        <directionalLight position={[0, 0, 10]} intensity={0.5} />

        <Suspense fallback={null}>
          <Taiwan cameraApi={api} setLocation={setLocation} wxCode={wxCode} />
        </Suspense>
      </Canvas>
    </div>
  );
}
