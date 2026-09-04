import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const SHARDS = [
  { pos: [1.4, 0.5, -0.3], scale: 0.28, color: "#d78a3f", speed: 1.1 },
  { pos: [-1.3, -0.6, 0.4], scale: 0.22, color: "#52b8ab", speed: 1.4 },
  { pos: [0.9, -1.1, -0.6], scale: 0.18, color: "#c85a34", speed: 0.9 },
  { pos: [-1.1, 1.0, 0.2], scale: 0.2, color: "#52b8ab", speed: 1.2 },
  { pos: [0.2, 1.4, 0.5], scale: 0.16, color: "#d78a3f", speed: 1.6 },
];

function CrystalCluster() {
  const group = useRef();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x += delta * 0.05;
    target.current.x = state.pointer.y * 0.2;
    target.current.y = state.pointer.x * 0.3;
  });

  return (
    <group ref={group} position={[1.55, 0.1, -0.4]} scale={0.5}>
      {/* core glassy icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#d78a3f"
          roughness={0.15}
          metalness={0.4}
          transparent
          opacity={0.28}
          emissive="#d78a3f"
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* outer wireframe shell */}
      <mesh scale={1.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#eef1f5" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#52b8ab" wireframe transparent opacity={0.35} />
      </mesh>

      {SHARDS.map((s, i) => (
        <Float key={i} speed={s.speed} rotationIntensity={1.2} floatIntensity={1.4}>
          <mesh position={s.pos} scale={s.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={s.color}
              emissive={s.color}
              emissiveIntensity={0.5}
              roughness={0.3}
              metalness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function CrystalScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 2]} intensity={1.5} color="#f6e6d0" />
      <directionalLight position={[-4, -2, -3]} intensity={0.6} color="#52b8ab" />
      <pointLight position={[0, 0, 2]} intensity={0.6} color="#d78a3f" />

      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.5}>
        <CrystalCluster />
      </Float>

      <Sparkles count={90} scale={[5, 5, 5]} size={2} speed={0.2} color="#d78a3f" opacity={0.5} />
      <fog attach="fog" args={["#0a0c10", 4, 9]} />
    </>
  );
}
