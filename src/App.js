import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';

import Car from './components/Car';
import Showroom from './components/Showroom';
import CeilingLight from './components/lights/CeilingLight';

export default function App() {
  // Use leva controls for color palette selection
  const { color, mattness, rimColor, windowTint } = useControls({
    color: '#d95050',
    mattness: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.001,
    },
    rimColor: '#303030',
    windowTint: {
      value: 0.7,
      min: 0,
      max: 1,
      step: 0.001,
    },
  });

  return (
    <>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 3, -18], fov: 50 }}
        style={{ background: '#202020' }}
      >
        <fog attach="fog" color="#404040" near={15} far={30} />
        <ambientLight intensity={0.5} />
        <CeilingLight />
        <Showroom />
        <Car color={color} mattness={mattness} rimColor={rimColor} windowTint={windowTint} />
        <OrbitControls
          maxDistance={17}
          minDistance={5}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 2.6}
          enablePan={false}
        />
      </Canvas>
      <Leva />
    </>
  );
}
