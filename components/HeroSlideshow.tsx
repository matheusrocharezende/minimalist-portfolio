"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroSlideshowProps = {
  images: string[];
  intervalMs?: number;
};

export default function HeroSlideshow({
  images,
  intervalMs = 5000,
}: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className="flex min-h-0 w-full flex-1 px-6 md:px-10">
      <div className="relative mx-auto h-full w-full max-w-[1328px] overflow-hidden bg-black p-4 md:p-8">
        <div className="relative h-full w-full">
          {images.map((src, index) => (
            <Image
              key={`${src}-${index}`}
              src={src}
              alt=""
              fill
              sizes="(min-width: 768px) 1328px, 100vw"
              priority={index === 0}
              className={`object-contain transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
