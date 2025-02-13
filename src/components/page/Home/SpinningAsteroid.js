import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// OBJLoader is part of the examples; in a modern setup, you can import it like so:
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const SpinningAsteroid = () => {
  const canvasRef = useRef(null);
  const asteroidRef = useRef(null); // We'll store a reference to the loaded asteroid object

  useEffect(() => {
    // Ensure we only run on the client (avoid Gatsby SSR issues)
    if (typeof window === "undefined") return;

    // 1) Canvas & Renderer Setup
    const canvas = canvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true, // Enable transparency
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background

    // 2) Create Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 3;

    // 3) Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // 4) Load the OBJ Model
    // Make sure /models/asteroid.obj is in static/models/ in your Gatsby project
    const loader = new OBJLoader();
    loader.load(
      "../models/asteroid.obj",
      (obj) => {
        // Once the OBJ is loaded, store a reference to it for animation
        asteroidRef.current = obj;

        // Optional: If you want to apply a universal material or color
        // to all meshes in the OBJ, traverse and set it here:
        const material = new THREE.MeshPhongMaterial({
          color: 0xaaaaaa, // or any color/texture
          shininess: 15,
          specular: 0x333333,
        });

        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });

        // Scale it down or reposition as needed
        obj.scale.set(1, 1, 1);

        // Add asteroid to the scene
        scene.add(obj);
      },
      undefined,
      (error) => {
        console.error("Error loading the OBJ file:", error);
      }
    );

    // 5) Animation Loop
    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      // If the asteroid is loaded, rotate it
      if (asteroidRef.current) {
        asteroidRef.current.rotation.x += 0.002;
        asteroidRef.current.rotation.y += 0.003;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(reqId);
      renderer.dispose();
    };
  }, []);

  // Tailwind: w-48 h-48 sets a fixed 12rem x 12rem canvas
  return <canvas ref={canvasRef} className="block w-48 h-48" />;
};

export default SpinningAsteroid;
