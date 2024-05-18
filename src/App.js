import { Center, ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./Model";

function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 1.1], fov: 50 }} shadows>
      <ambientLight intensity={2} />
      <spotLight
        position={[1, 3, 0.5]}
        angle={0.2}
        penumbra={1}
        intensity={50}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <spotLight
        position={[-3, 3, 1.5]}
        angle={0.3}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight
        position={[1, 1, -1]}
        angle={0.3}
        penumbra={1}
        intensity={30}
        castShadow={true}
        shadow-mapSize={[256, 256]}
        color="#ffffc0"
      />

      <Suspense>
        <Center>
          <Model />
          <ContactShadows
            frames={1}
            blur={1}
            rotateX={0.5}
            position={[0, -0.33, 0]}
          />
        </Center>
      </Suspense>
      <Environment preset="sunset" blur={0.3} />
    </Canvas>
  );
}

export default App;
