import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const SIZE = 4.4;
const SEG = 64;

function elevation(x, y, t) {
  return (
    Math.sin(x * 1.3 + t * 0.5) * Math.cos(y * 1.1 - t * 0.35) * 0.34 +
    Math.sin(x * 2.6 - t * 0.28 + y * 0.6) * 0.16 +
    Math.cos(x * 0.55 + y * 2.0 + t * 0.4) * 0.2
  );
}

const LOW = new THREE.Color("#152233");
const MID = new THREE.Color("#d78a3f");
const HIGH = new THREE.Color("#6fd0c2");

function elevationColor(h, out) {
  const t = THREE.MathUtils.clamp((h + 0.7) / 1.4, 0, 1);
  if (t < 0.5) out.copy(LOW).lerp(MID, t / 0.5);
  else out.copy(MID).lerp(HIGH, (t - 0.5) / 0.5);
}

function Terrain() {
  const group = useRef();
  const target = useRef({ x: 0, y: 0 });

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array((SEG + 1) * (SEG + 1) * 3), 3));
    return geo;
  }, []);

  const tmpColor = useMemo(() => new THREE.Color(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const pos = geometry.attributes.position;
    const col = geometry.attributes.color;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const h = elevation(x, y, t);
      pos.setZ(i, h);
      elevationColor(h, tmpColor);
      col.setXYZ(i, tmpColor.r, tmpColor.g, tmpColor.b);
    }
    pos.needsUpdate = true;
    col.needsUpdate = true;
    geometry.computeVertexNormals();

    if (group.current) {
      group.current.rotation.y += delta * 0.08;
      target.current.x = state.pointer.y * 0.1;
      target.current.y = state.pointer.x * 0.16;
      group.current.rotation.x += (-1.32 + target.current.x - group.current.rotation.x) * 0.04;
      group.current.rotation.z += (target.current.y * 0.3 - group.current.rotation.z) * 0.04;
    }
  });

  return (
    <group ref={group} position={[1.5, -0.4, -0.6]} scale={0.85} rotation={[-1.32, 0.3, 0]}>
      <mesh geometry={geometry}>
        <meshStandardMaterial vertexColors roughness={0.55} metalness={0.1} />
      </mesh>
      <mesh geometry={geometry} scale={1.004}>
        <meshBasicMaterial color="#eef1f5" wireframe transparent opacity={0.14} />
      </mesh>

      {[
        [-1.1, 0.32, 0.9],
        [1.3, 0.4, -0.6],
        [0.1, 0.5, 1.4],
      ].map((p, i) => (
        <Float key={i} speed={1.6} rotationIntensity={0.4} floatIntensity={1.1}>
          <mesh position={p}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshStandardMaterial
              color={i === 1 ? "#6fd0c2" : "#d78a3f"}
              emissive={i === 1 ? "#6fd0c2" : "#d78a3f"}
              emissiveIntensity={1.4}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function TerrainScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 2]} intensity={1.5} color="#f6e6d0" />
      <directionalLight position={[-4, 1, -3]} intensity={0.55} color="#52b8ab" />

      <Terrain />

      <Sparkles count={70} scale={[4.5, 3, 4.5]} size={2.2} speed={0.22} color="#d78a3f" opacity={0.45} />
      <fog attach="fog" args={["#0a0c10", 4, 9]} />
    </>
  );
}
