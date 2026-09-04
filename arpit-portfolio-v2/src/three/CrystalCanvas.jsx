import { Canvas } from "@react-three/fiber";
import CrystalScene from "./CrystalCore.jsx";

export default function CrystalCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4.4], fov: 42 }} dpr={[1, 1.8]}>
      <CrystalScene />
    </Canvas>
  );
}
