import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function ConcreteRoom(props) {
  const [colorMap, normalMap] = useLoader(TextureLoader, [
    '/textures/concrete1/concrete_wall_008_diff_4k.jpg',
    '/textures/concrete1/concrete_wall_008_nor_gl_4k.jpg',
  ]);

  // Ställ in texturens wrap- och repeat-egenskaper
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(12, 12); // Justera värdena för att upprepa texturen
  colorMap.anisotropy = 16;

  return (
    <mesh receiveShadow rotation={props.rotation} position={props.position} {...props}>
      <boxGeometry args={props.dimensions} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        normalScale={4}
        receiveShadow
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Showroom(props) {
  return (
    <>
      <ConcreteRoom
        rotation={[-Math.PI / 2, 0, 0]}
        dimensions={[50, 40, 6]}
        position={[0, 3.22, 0]}
      />
    </>
  );
}

export default Showroom;
