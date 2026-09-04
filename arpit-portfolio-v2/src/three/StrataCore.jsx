import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const LAYERS = [
  { h: 0.55, color: "#3a2b1f" },
  { h: 0.4, color: "#7a4b23" },
  { h: 0.32, color: "#c85a34" },
  { h: 0.45, color: "#d78a3f" },
  { h: 0.3, color: "#8c6a3e" },
  { h: 0.5, color: "#52b8ab" },
  { h: 0.36, color: "#2f3d3a" },
];

function CoreSample() {
  const group = useRef();
  const target = useRef({ x: 0, y: 0 });

  const total = useMemo(() => LAYERS.reduce((s, l) => s + l.h, 0), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.22;
    target.current.x = (state.pointer.y * 0.18);
    target.current.y = (state.pointer.x * 0.35);
    group.current.rotation.x += (target.current.x - group.current.rotation.x) * 0.04;
    group.current.rotation.z += (target.current.y * 0.15 - group.current.rotation.z) * 0.04;
  });

  let y = -total / 2;
  const meshes = LAYERS.map((layer, i) => {
    const cy = y + layer.h / 2;
    y += layer.h;
    return (
      <mesh key={i} position={[0, cy, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.85, 0.85, layer.h, 48, 1, false]} />
        <meshStandardMaterial
          color={layer.color}
          roughness={0.55}
          metalness={0.12}
          emissive={layer.color}
          emissiveIntensity={0.06}
        />
      </mesh>
    );
  });

  return (
    <group ref={group} rotation={[0.15, 0.6, 0]}>
      {meshes}
      {/* thin contour rings around the core to read as survey markers */}
      {[0.55, 0, -0.55].map((yy, i) => (
        <mesh key={`ring-${i}`} position={[0, yy, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.98, 0.006, 8, 64]} />
          <meshBasicMaterial color="#eef1f5" transparent opacity={0.25} />
        </mesh>
      ))}
    </group>
  );
}

export default function StrataScene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 2]} intensity={1.4} color="#f6e6d0" />
      <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#52b8ab" />

      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
        <CoreSample />
      </Float>

      <Sparkles count={70} scale={[4.5, 4.5, 4.5]} size={2.4} speed={0.25} color="#d78a3f" opacity={0.5} />
      <fog attach="fog" args={["#0a0c10", 4, 9]} />
    </>
  );
}
