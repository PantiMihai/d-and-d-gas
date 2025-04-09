"use client";

import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { Text, OrbitControls, Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

// Main component with canvas
const GasStationScene = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Canvas
        shadows
        camera={{ position: [8, 4, 8], fov: 40 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <spotLight 
            position={[5, 10, 7.5]} 
            angle={0.3} 
            penumbra={1} 
            intensity={1.2} 
            castShadow 
            shadow-mapSize={[2048, 2048]}
          />
          <directionalLight
            position={[-5, 5, -5]}
            intensity={0.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <DetailedFuelStation />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

const DetailedFuelStation = () => {
  const group = useRef<THREE.Group>(null);
  
  // Colors
  const colors = {
    asphalt: '#020718',
    building: '#e0e0e0',
    roof: '#d32f2f',
    pumpIsland: '#cccccc',
    pump: '#424242',
    pumpDetails: '#212121',
    signBlue: '#1976d2',
    signYellow: '#ffeb3b',
    metal: '#9e9e9e',
    glass: '#b3e5fc',
    white: '#ffffff',
    green: '#4caf50'
  };

  useFrame((state) => {
    if (group.current) {
      // Faster rotation for display
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });
  
  // Create a pump with hose and nozzle
  const GasPump = ({ position }: { position: [number, number, number] }) => {
    return (
      <group position={position}>
        {/* Main pump body */}
        <mesh castShadow position={[0, 0.5, 0]}>
          <boxGeometry args={[0.8, 1, 0.6]} />
          <meshStandardMaterial color={colors.pump} />
        </mesh>
        
        {/* Pump display */}
        <mesh position={[0, 0.7, 0.31]}>
          <planeGeometry args={[0.6, 0.4]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        {/* Pump buttons */}
        <mesh position={[0, 0.3, 0.31]}>
          <boxGeometry args={[0.6, 0.3, 0.05]} />
          <meshStandardMaterial color={colors.pumpDetails} />
        </mesh>
        
        {/* Nozzle holder */}
        <mesh position={[0, 0.5, 0.35]}>
          <boxGeometry args={[0.4, 0.2, 0.1]} />
          <meshStandardMaterial color={colors.pumpDetails} />
        </mesh>
        
        {/* Hose */}
        <mesh position={[0.25, 0.3, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
          <meshStandardMaterial color="#000000" />
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.4, 8]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        </mesh>
        
        {/* Nozzle */}
        <mesh position={[0.5, 0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.08, 0.04, 0.3, 8]} />
          <meshStandardMaterial color={position[0] < 0 ? colors.green : colors.signYellow} />
        </mesh>
      </group>
    );
  };
  
  return (
    <group ref={group}>
      {/* Main building */}
      <group position={[0, 0, -3]}>
        {/* Building structure */}
        <mesh castShadow receiveShadow position={[0, 1, 0]}>
          <boxGeometry args={[5, 2, 3]} />
          <meshStandardMaterial color={colors.building} />
        </mesh>
        
        {/* Roof */}
        <mesh castShadow position={[0, 2.1, 0]}>
          <boxGeometry args={[5.4, 0.2, 3.4]} />
          <meshStandardMaterial color={colors.roof} />
        </mesh>
        
        {/* Door */}
        <mesh position={[0, 0.9, 1.51]}>
          <planeGeometry args={[1, 1.8]} />
          <meshStandardMaterial color={colors.glass} transparent opacity={0.7} />
        </mesh>
        
        {/* Windows */}
        <mesh position={[-1.5, 1, 1.51]}>
          <planeGeometry args={[1.5, 1]} />
          <meshStandardMaterial color={colors.glass} transparent opacity={0.6} />
        </mesh>
        <mesh position={[1.5, 1, 1.51]}>
          <planeGeometry args={[1.5, 1]} />
          <meshStandardMaterial color={colors.glass} transparent opacity={0.6} />
        </mesh>
      </group>
      
      {/* Gas pump canopy */}
      <group position={[0, 0, 1]}>
        {/* Canopy roof */}
        <mesh castShadow position={[0, 3, 0]}>
          <boxGeometry args={[6, 0.2, 4]} />
          <meshStandardMaterial color={colors.roof} />
        </mesh>
        
        {/* Canopy underside */}
        <mesh position={[0, 2.9, 0]}>
          <boxGeometry args={[5.8, 0.1, 3.8]} />
          <meshStandardMaterial color={colors.white} />
        </mesh>
        
        {/* Canopy border */}
        <mesh castShadow position={[0, 2.7, 0]}>
          <boxGeometry args={[6, 0.4, 4]} />
          <meshStandardMaterial color={colors.signBlue} />
        </mesh>
        
        {/* Columns - all white */}
        <mesh castShadow position={[-2.5, 1.5, -1.5]}>
          <boxGeometry args={[0.4, 3, 0.4]} />
          <meshStandardMaterial color={colors.white} />
        </mesh>
        <mesh castShadow position={[2.5, 1.5, -1.5]}>
          <boxGeometry args={[0.4, 3, 0.4]} />
          <meshStandardMaterial color={colors.white} />
        </mesh>
        <mesh castShadow position={[-2.5, 1.5, 1.5]}>
          <boxGeometry args={[0.4, 3, 0.4]} />
          <meshStandardMaterial color={colors.white} />
        </mesh>
        <mesh castShadow position={[2.5, 1.5, 1.5]}>
          <boxGeometry args={[0.4, 3, 0.4]} />
          <meshStandardMaterial color={colors.white} />
        </mesh>
      </group>
      
      {/* Gas pump islands */}
      <mesh castShadow receiveShadow position={[0, 0, 1]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[4, 1, 0.1]} />
        <meshStandardMaterial color={colors.pumpIsland} />
      </mesh>
      
      {/* Gas pumps */}
      <GasPump position={[-1.2, 0, 1]} />
      <GasPump position={[1.2, 0, 1]} />
      
      {/* Drive path markings */}
      <mesh position={[0, 0.01, 3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 0.3]} />
        <meshStandardMaterial color={colors.white} emissive={colors.white} emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 0.01, -1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 0.3]} />
        <meshStandardMaterial color={colors.white} emissive={colors.white} emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
};

export default GasStationScene; 