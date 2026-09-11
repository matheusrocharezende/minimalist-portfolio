"use client";

import Image from "next/image";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { SlideshowMedia } from "@/lib/getSlideshowMedia";

import "swiper/css";
import "swiper/css/pagination";

type HeroSlideshowProps = {
  media: SlideshowMedia[];
  intervalMs?: number;
};

export default function HeroSlideshow({
  media,
  intervalMs = 5000,
}: HeroSlideshowProps) {
  const handleSlideClick = (
    swiper: SwiperInstance,
    event: MouseEvent | TouchEvent | PointerEvent,
  ) => {
    const target = event.target as HTMLElement;
    if (target.closest(".swiper-pagination-bullet")) return;
    swiper.slideNext();
  };

  return (
    <div className="flex min-h-0 w-full flex-1 md:px-4">
      <div className="relative mx-auto h-full w-full max-w-[952px] overflow-hidden bg-black p-4 md:p-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: intervalMs, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={media.length > 1}
          observer
          observeParents
          onClick={handleSlideClick}
          className="hero-slideshow h-full w-full cursor-pointer"
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
    </div>
  );
}
