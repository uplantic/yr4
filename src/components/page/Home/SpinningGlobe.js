import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SpinningGlobe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1) Get canvas size from CSS (Tailwind w-72 h-72)
    const canvas = canvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // 2) Create scene, camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5.5;

    // 3) Renderer with transparent background
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0); // Transparent
    renderer.setSize(width, height);

    // 4) Simple lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // 5) Globe geometry + material + texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("../images/world.jpg");
    const geometry = new THREE.SphereGeometry(2.5, 62, 62);
    const material = new THREE.MeshBasicMaterial({ map: earthTexture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // 6) Mouse Interactivity State
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let autoSpinSpeed = 0.001;

    const onPointerDown = (e) => {
      isDragging = true;
      previousMousePosition.x = e.clientX;
      previousMousePosition.y = e.clientY;
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;

      // Calculate the mouse movement delta
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      // Rotate the globe around its axes
      globe.rotation.y += deltaX * 0.005;
      globe.rotation.x += deltaY * 0.005;

      previousMousePosition.x = e.clientX;
      previousMousePosition.y = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    // Add event listeners to the canvas for pointer interactions
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    // Also handle "pointerleave" if user drags off the canvas
    canvas.addEventListener("pointerleave", onPointerUp);

    // 7) Animation (auto-spin + re-render)
    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      // Auto-spin only when not dragging
      if (!isDragging) {
        globe.rotation.y += autoSpinSpeed;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 8) Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();

      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  // The w-72 h-72 sets the size to 18rem x 18rem.
  // With alpha: true and setClearColor(0,0), the background is transparent.
  return <canvas ref={canvasRef} className="block w-72 h-72" />;
};

export default SpinningGlobe;
