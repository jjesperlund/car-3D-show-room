import React from 'react';

const CeilingLight = (props) => {
  const width = 14;
  const height = 7;
  const position = [0, 6.2, 0];
  const color = '#ffffff';

  return (
    <>
      <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial emissive={color} emissiveIntensity={1} color={color} />
      </mesh>
      <rectAreaLight
        position={position}
        width={width}
        height={height}
        color={color}
        intensity={2}
      />
      <spotLight
        position={[position[0] - 6, position[1], position[2]]}
        intensity={50}
        distance={30}
        angle={Math.PI / 3}
        penumbra={1}
        castShadow
      />
      <spotLight
        position={[position[0] + 6, position[1], position[2]]}
        intensity={50}
        castShadow
        angle={Math.PI / 3}
        distance={30}
        penumbra={1}
      />
      <spotLight
        position={[position[0], position[1], position[2] + 4]}
        intensity={50}
        castShadow
        angle={Math.PI / 3}
        distance={30}
        penumbra={1}
      />
      <spotLight
        position={[position[0], position[1], position[2] - 4]}
        intensity={50}
        castShadow
        angle={Math.PI / 3}
        distance={30}
        penumbra={1}
      />
    </>
  );
};

export default CeilingLight;
