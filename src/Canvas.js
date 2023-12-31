import React from "react";
import { Canvas } from "@react-three/fiber";

export const App = () => {
  return (
    <Canvas>
      <Shirt />
    </Canvas>
  )
};

function Shirt() {
  return (
    <mesh>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshNormalMaterial />
    </mesh>
  )
}