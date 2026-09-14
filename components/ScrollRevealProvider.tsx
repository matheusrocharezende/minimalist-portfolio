"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ScrollRevealContext = createContext(false);

export function useScrollRevealed() {
  return useContext(ScrollRevealContext);
}

export default function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const threshold = 4;
    let lastTouchY = 0;

    const applyDelta = (deltaY: number) => {
      if (deltaY > threshold) setRevealed(true);
      else if (deltaY < -threshold) setRevealed(false);
    };

    const onWheel = (event: WheelEvent) => applyDelta(event.deltaY);

    const onTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY ?? 0;
      applyDelta(lastTouchY - y);
      lastTouchY = y;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <ScrollRevealContext.Provider value={revealed}>
      {children}
    </ScrollRevealContext.Provider>
  );
}
