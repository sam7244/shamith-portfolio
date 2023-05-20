import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const BlackHoleAnimation = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Stars />
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </Canvas>
  );
};

const BlackHole = () => {
  return (
    <div className="App">
      <BlackHoleAnimation />
    </div>
  );
};
export default BlackHole;
