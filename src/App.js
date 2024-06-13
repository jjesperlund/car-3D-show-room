import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';

import Car from './components/Car';
import Showroom from './components/Showroom';
import CeilingLight from './components/lights/CeilingLight';

function PointLight(props) {
  return (
    <>
      <pointLight position={[-8.5, 4.5, -16]} castShadow intensity={30} distance={50} />
      <pointLight position={[-2.5, 4.5, -16]} castShadow intensity={30} distance={50} />
      <pointLight position={[3, 4.5, -16]} castShadow intensity={30} distance={50} />
      <pointLight position={[8, 4.5, -16]} castShadow intensity={30} distance={50} />
    </>
  );
}

export default function App() {
  // Use leva controls for color palette selection
  const { color, mattness } = useControls({
    color: '#d95050',
    mattness: {
      value: 0.5,
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
        camera={{ position: [0, 5, -10], fov: 50 }}
        style={{ background: '#202020' }}
      >
        <fog attach="fog" color="#404040" near={15} far={30} />
        <ambientLight intensity={0.5} />
        <CeilingLight />
        <Showroom />
        <Car color={color} mattness={mattness} />
        <OrbitControls maxDistance={17} minDistance={5} />
      </Canvas>
      <Leva />
    </>
  );
}
