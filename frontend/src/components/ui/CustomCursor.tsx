"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50" aria-hidden="true">
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-red-500/40 pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? "rgba(245, 158, 11, 0.8)" : "rgba(220, 38, 38, 0.3)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.1 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-red-600 rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      />
    </div>
  );
}
