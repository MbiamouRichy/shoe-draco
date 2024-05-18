import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export function Model(props) {
  let ref = useRef();
  const { nodes, materials } = useGLTF("/shoe-draco.glb");
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      0.1 + Math.cos(t / 4.5) / 10,
      Math.sin(t / 4) / 4,
      0.3 - (1 + Math.sin(t / 4)) / 8
    );
    ref.current.position.y = (1 + Math.sin(t / 2)) / 25;
  });
  return (
    <group ref={ref} scale={0.2} {...props} dispose={null}>
      <group
        position={[-0.162, 0, -0.224]}
        rotation={[-Math.PI / 2, -0.2, -1.472]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_115.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_119.geometry}
            material={materials["Material.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/shoe-draco.glb");