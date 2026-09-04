import { Canvas } from "@react-three/fiber";
import TerrainScene from "./TerrainCore.jsx";

export default function TerrainCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4.4], fov: 42 }} dpr={[1, 1.8]}>
      <TerrainScene />
    </Canvas>
  );
}
