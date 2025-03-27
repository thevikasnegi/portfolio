"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export default function ThreeBackground() {
  if(typeof window == undefined) return null;
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const colorScheme = theme === "dark" ? [0.1, 0.1, 0.3] : [0.1, 0.1, 1.0];

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      colors[i] = colorScheme[0] + Math.random() * 0.2;
      colors[i + 1] = colorScheme[1] + Math.random() * 0.2;
      colors[i + 2] = colorScheme[2] + Math.random() * 0.2;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 3;

    let mouseX = 0,
      mouseY = 0,
      scrollY = 0;
    let targetX = 0,
      targetY = 0,
      targetScroll = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: {
      clientX: number;
      clientY: number;
    }) => {
      mouseX = (event.clientX - windowHalfX) / 100;
      mouseY = (event.clientY - windowHalfY) / 100;
    };

    const onDocumentScroll = () => {
      scrollY = window.scrollY / 500; // Adjust sensitivity of scroll effect
    };

    document.addEventListener("mousemove", onDocumentMouseMove);
    window.addEventListener("scroll", onDocumentScroll);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      targetX = mouseX * 0.1;
      targetY = mouseY * 0.1;
      targetScroll = scrollY * 0.5;

      particles.rotation.y += 0.002 + 0.0005 * Math.sin(Date.now() * 0.001);
      particles.rotation.x += 0.001 + 0.0005 * Math.cos(Date.now() * 0.001);

      particles.rotation.y += 0.05 * (targetX - particles.rotation.y);
      particles.rotation.x += 0.05 * (targetY - particles.rotation.x);
      particles.position.z += 0.05 * (targetScroll - particles.position.z);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      window.removeEventListener("scroll", onDocumentScroll);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}
