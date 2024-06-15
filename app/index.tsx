import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber/native'
import { useGLTF } from '@react-three/drei/native'
import modelPath from '../assets/dog.glb'

function Model(props) {
  const gltf = useGLTF(modelPath)
  return <primitive {...props} object={gltf.scene} />
}

export default function Index() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
  )
}