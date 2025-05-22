import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Neon(props) {
  const { nodes, materials } = useGLTF('/models/neon_signs.glb')
  return (
    <group {...props} dispose={null}>
      
      
      <group position={[0, -8.643, 3.436]} rotation={[0, 0, -Math.PI / 2]} scale={2.219}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.blue} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.yellow} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.green} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.material} />
      </group>
      <group position={[0, 4.256, 11.952]} rotation={[0, 0, -Math.PI / 2]} scale={2.594}>
        <mesh geometry={nodes.Object_11.geometry} material={materials.pink} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.blue} />
      </group>
      <group position={[0, 10.628, -1.277]} rotation={[0, 0, -Math.PI / 2]} scale={2.089}>
        <mesh geometry={nodes.Object_14.geometry} material={materials.pink} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.blue} />
      </group>
      <group position={[0, 9.961, -7.847]} rotation={[0, 0, -Math.PI / 2]} scale={1.519}>
        <mesh geometry={nodes.Object_17.geometry} material={materials.pink} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.blue} />
      </group>
      <group position={[0, 4.437, -13.418]} rotation={[0, 0, -Math.PI / 2]} scale={1.683}>
        <mesh geometry={nodes.Object_20.geometry} material={materials.yellow} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.blue} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.orange} />
      </group>
      <group position={[0, 8.343, 5.163]} rotation={[0, 0, -Math.PI / 2]} scale={1.487}>
        <mesh geometry={nodes.Object_25.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.blue} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.green} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.orange} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.yellow} />
      </group>
      <group position={[0, 2.473, 6.481]} rotation={[0, 0, -Math.PI / 2]} scale={1.009}>
        <mesh geometry={nodes.Object_31.geometry} material={materials.pink} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.green} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.yellow} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.blue} />
      </group>
      <group position={[0, 2.495, -0.512]} rotation={[0, 0, -Math.PI / 2]} scale={2.117}>
        <mesh geometry={nodes.Object_36.geometry} material={materials.violet} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.purple} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.orange} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.pink} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.yellow} />
      </group>
      <group position={[0, 5.692, -5.123]} rotation={[0, 0, -Math.PI / 2]} scale={1.09}>
        <mesh geometry={nodes.Object_43.geometry} material={materials.white} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.purple} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.orange} />
      </group>
      <group position={[0, 11.285, -11.876]} rotation={[0, 0, -Math.PI / 2]} scale={0.743}>
        <mesh geometry={nodes.Object_48.geometry} material={materials.green} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.yellow} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.orange} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.material} />
      </group>
      <group position={[0, -3.005, -1.393]} rotation={[-0.375, 0, -Math.PI / 2]} scale={1.197}>
        <mesh geometry={nodes.Object_53.geometry} material={materials.violet} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.blue} />
      </group>
      <group position={[0, 0.712, -12.978]} rotation={[0, 0, -Math.PI / 2]} scale={1.463}>
        <mesh geometry={nodes.Object_56.geometry} material={materials.orange} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.purple} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.yellow} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.blue} />
      </group>
      <group position={[0, -6.074, 8.311]} rotation={[0, 0, -Math.PI / 2]} scale={1.059}>
        <mesh geometry={nodes.Object_62.geometry} material={materials.green} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.blue} />
        <mesh geometry={nodes.Object_64.geometry} material={materials.yellow} />
      </group>
      <group position={[0, -5.51, -2.725]} rotation={[1.652, 0, -Math.PI / 2]} scale={0.857}>
        <mesh geometry={nodes.Object_66.geometry} material={materials.orange} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.green} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.yellow} />
        <mesh geometry={nodes.Object_70.geometry} material={materials.blue} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.white} />
        <mesh geometry={nodes.Object_72.geometry} material={materials.pink} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.orange} position={[1.776, 0, 6.851]} rotation={[Math.PI, -1.489, Math.PI]} />
      </group>
      <group position={[0, -7.01, -9.194]} rotation={[0, 0, -Math.PI / 2]} scale={0.697}>
        <mesh geometry={nodes.Object_76.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_77.geometry} material={materials.blue} />
        <mesh geometry={nodes.Object_78.geometry} material={materials.orange} />
      </group>
      <group position={[0, -7.744, -12.552]} rotation={[0, 0, -Math.PI / 2]} scale={0.59}>
        <group position={[1.591, 0, 0.566]} scale={1.176}>
          <mesh geometry={nodes.Object_82.geometry} material={materials.material} />
          <mesh geometry={nodes.Object_83.geometry} material={materials.blue} />
          <mesh geometry={nodes.Object_84.geometry} material={materials.purple} />
        </group>
        <mesh geometry={nodes.Object_80.geometry} material={materials.green} />
      </group>
      <mesh geometry={nodes.Object_9.geometry} material={materials.pink} position={[0, 12.087, 10.426]} rotation={[0, 0, -Math.PI / 2]} scale={1.986} />
    </group>
  )
}

useGLTF.preload('/models/neon_signs.glb')
