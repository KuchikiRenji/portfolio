"use client";

import { Canvas } from "@react-three/fiber";
import { useState, useEffect, ReactNode } from "react";
import type { CanvasProps } from "@react-three/fiber";

interface SafeCanvasProps extends CanvasProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function SafeCanvas({ children, fallback, ...props }: SafeCanvasProps) {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  // Don't render on server
  if (!isClient) {
    return null;
  }

  // Show fallback if no WebGL
  if (!hasWebGL) {
    return <>{fallback || null}</>;
  }

  return (
    <Canvas
      {...props}
      onCreated={(state) => {
        // Additional validation
        if (!state.gl.getContext()) {
          setHasWebGL(false);
        }
        if (props.onCreated) {
          props.onCreated(state);
        }
      }}
    >
      {children}
    </Canvas>
  );
}
