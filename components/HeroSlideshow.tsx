"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { SlideshowMedia } from "@/lib/getSlideshowMedia";
import { useScrollRevealed } from "./ScrollRevealProvider";

import "swiper/css";
import "swiper/css/effect-fade";

type HeroSlideshowProps = {
  media: SlideshowMedia[];
  intervalMs?: number;
};

export default function HeroSlideshow({
  media,
  intervalMs = 5000,
}: HeroSlideshowProps) {
  const revealed = useScrollRevealed();
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(
    null,
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideClick = (swiper: SwiperInstance) => {
    swiper.slideNext();
  };

  return (
    <div className="flex min-h-0 w-full flex-1 md:px-4">
      <div
        className={`relative mx-auto flex h-full w-full max-w-[952px] flex-col overflow-hidden bg-black px-4 pt-4 transition-[filter] duration-300 ease-out md:px-8 md:pt-8 ${
          revealed ? "blur-lg" : "blur-none"
        }`}
      >
        <div className="relative min-h-0 flex-1">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={800}
            autoplay={{ delay: intervalMs, disableOnInteraction: false }}
            loop={media.length > 1}
            observer
            observeParents
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onClick={handleSlideClick}
            className="hero-slideshow size-full cursor-pointer"
          >
            {media.map((item, index) => (
              <SwiperSlide key={`${item.src}-${index}`} className="relative">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 size-full object-contain"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 1328px, 100vw"
                    priority={index === 0}
                    className="object-contain"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex h-4 shrink-0 items-center justify-center gap-2 md:h-8">
          {media.length > 1 &&
            media.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ir para o slide ${index + 1}`}
                onClick={() => swiperInstance?.slideToLoop(index)}
                className={`size-2 shrink-0 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
