"use client";

import { Float, MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function OrbitalCore() {
  const group = useRef<THREE.Group>(null!);
  const core = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        state.pointer.y * 0.12,
        0.025,
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        -state.pointer.x * 0.12,
        0.025,
      );
    }
    if (core.current) core.current.rotation.y += delta * 0.22;
  });

  return (
    <group ref={group}>
      <Float speed={1.25} rotationIntensity={0.35} floatIntensity={0.65}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.18, 5]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            emissive="#312e81"
            emissiveIntensity={0.75}
            roughness={0.16}
            metalness={0.72}
            distort={0.34}
            speed={1.8}
          />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2.7, 0.2, 0.25]}>
        <torusGeometry args={[1.8, 0.012, 16, 180]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.8} />
      </mesh>
      <mesh rotation={[0.9, 0.7, -0.35]}>
        <torusGeometry args={[2.12, 0.008, 12, 180]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.55} />
      </mesh>

      <Float speed={2} floatIntensity={1.1}>
        <mesh position={[1.95, 0.72, 0.2]}>
          <octahedronGeometry args={[0.13, 0]} />
          <meshStandardMaterial color="#67e8f9" emissive="#0891b2" emissiveIntensity={1.4} metalness={0.6} />
        </mesh>
      </Float>
      <Float speed={1.7} floatIntensity={0.8}>
        <mesh position={[-1.8, -0.85, 0.35]}>
          <icosahedronGeometry args={[0.1, 1]} />
          <meshStandardMaterial color="#c4b5fd" emissive="#7c3aed" emissiveIntensity={1.2} />
        </mesh>
      </Float>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.4], fov: 42 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.75} />
        <pointLight position={[4, 3, 5]} intensity={28} color="#a78bfa" />
        <pointLight position={[-4, -2, 3]} intensity={16} color="#22d3ee" />
        <OrbitalCore />
        <Stars radius={48} depth={28} count={1100} factor={2.4} saturation={0.25} fade speed={0.35} />
        <Sparkles count={55} scale={7} size={2.1} speed={0.28} color="#c4b5fd" />
      </Canvas>
    </div>
  );
}
