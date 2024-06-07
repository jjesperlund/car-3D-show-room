import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect } from 'react';

function Plane(props) {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#808080" />
    </mesh>
  );
}

function Cube(props) {
  return (
    <mesh castShadow {...props}>
      <boxGeometry />
      <meshLambertMaterial color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ position: [-5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <directionalLight
        angle={0.25}
        penumbra={0.5}
        position={[10, 10, 10]}
        castShadow
        intensity={1.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Plane position={[0, 0, 0]} />
      <Cube position={[0, 1, 0]} />
      <Cube position={[1, 2, 0]} />
      <Cube position={[-1, 3, 0]} />
      <OrbitControls />
    </Canvas>
  );
}
