import { Canvas } from "@react-three/fiber";
import StrataScene from "./StrataCore.jsx";

export default function StrataCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4.4], fov: 42 }} dpr={[1, 1.8]}>
      <StrataScene />
    </Canvas>
  );
}
