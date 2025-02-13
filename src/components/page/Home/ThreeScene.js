import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Make sure we're in the browser
    if (typeof window === "undefined") return;

    // === THREE.JS CODE START ===
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Create a scene
    const scene = new THREE.Scene();

    // 2. Create a camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    // 3. Create a renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    });
    renderer.setSize(width, height);

    // 4. Create a cube mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 5. Animation loop
    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // 6. Handle window resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
    // === THREE.JS CODE END ===
  }, []);

  // Tailwind class for ensuring the canvas uses full screen, for example
  return <canvas ref={canvasRef} className="w-screen h-screen block" />;
};

export default ThreeScene;
