"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 80;
const CONNECTION_DISTANCE = 2.8;
const MOUSE_INFLUENCE = 0.6;

function NetworkMesh() {
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);
    const spread = 8;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2;
      velocities[i * 3] = (Math.random() - 0.5) * 0.003;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    return { positions, velocities };
  }, []);

  const lineGeometry = useMemo(() => {
    const maxLines = PARTICLE_COUNT * PARTICLE_COUNT;
    const positions = new Float32Array(maxLines * 6);
    const colors = new Float32Array(maxLines * 6);
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geom.setDrawRange(0, 0);
    return geom;
  }, []);

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    []
  );

  // Set up pointer tracking
  useMemo(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("pointermove", onPointerMove);
      }
    };
  }, [onPointerMove]);

  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;

    const posAttr = meshRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const pos = posAttr.array as Float32Array;
    const vel = particles.velocities;

    // Mouse world position
    const mx = mouseRef.current.x * viewport.width * 0.5;
    const my = mouseRef.current.y * viewport.height * 0.5;

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      // Mouse influence
      const dx = mx - pos[ix];
      const dy = my - pos[iy];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 3) {
        const force = (1 - dist / 3) * MOUSE_INFLUENCE * 0.01;
        pos[ix] += dx * force;
        pos[iy] += dy * force;
      }

      pos[ix] += vel[ix];
      pos[iy] += vel[iy];
      pos[iz] += vel[iz];

      // Boundary wrap
      if (pos[ix] > 10) pos[ix] = -10;
      if (pos[ix] < -10) pos[ix] = 10;
      if (pos[iy] > 6) pos[iy] = -6;
      if (pos[iy] < -6) pos[iy] = 6;
    }
    posAttr.needsUpdate = true;

    // Draw connections
    const linePos = lineGeometry.attributes.position
      .array as Float32Array;
    const lineCol = lineGeometry.attributes.color.array as Float32Array;
    let lineIdx = 0;

    // Accent color: #C45D3E → normalized
    const r = 196 / 255;
    const g = 93 / 255;
    const b = 62 / 255;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx2 = pos[i * 3] - pos[j * 3];
        const dy2 = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz2 = pos[i * 3 + 2] - pos[j * 3 + 2];
        const d = Math.sqrt(dx2 * dx2 + dy2 * dy2 + dz2 * dz2);

        if (d < CONNECTION_DISTANCE) {
          const alpha = 1 - d / CONNECTION_DISTANCE;
          const li = lineIdx * 6;
          linePos[li] = pos[i * 3];
          linePos[li + 1] = pos[i * 3 + 1];
          linePos[li + 2] = pos[i * 3 + 2];
          linePos[li + 3] = pos[j * 3];
          linePos[li + 4] = pos[j * 3 + 1];
          linePos[li + 5] = pos[j * 3 + 2];

          lineCol[li] = r * alpha;
          lineCol[li + 1] = g * alpha;
          lineCol[li + 2] = b * alpha;
          lineCol[li + 3] = r * alpha;
          lineCol[li + 4] = g * alpha;
          lineCol[li + 5] = b * alpha;

          lineIdx++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx * 2);
    (
      lineGeometry.attributes.position as THREE.BufferAttribute
    ).needsUpdate = true;
    (
      lineGeometry.attributes.color as THREE.BufferAttribute
    ).needsUpdate = true;
  });

  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles.positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#C45D3E"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  );
}

export default function BackgroundCanvas() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <NetworkMesh />
      </Canvas>
    </div>
  );
}
