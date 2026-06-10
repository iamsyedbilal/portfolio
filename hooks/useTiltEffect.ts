"use client";

import { useRef, type MouseEvent } from "react";

export function useTiltEffect() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02,1.02,1.02)
    `;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)";
    }
  };

  return { ref, onMouseMove, reset };
}
