"use client";

import Image from "next/image";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type HeroSlideshowProps = {
  images: string[];
  intervalMs?: number;
};

export default function HeroSlideshow({
  images,
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
    <div className="flex min-h-0 w-full flex-1 px-6 md:px-10">
      <div className="relative mx-auto h-full w-full max-w-[1328px] overflow-hidden bg-black p-4 md:p-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: intervalMs, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={images.length > 1}
          observer
          observeParents
          onClick={handleSlideClick}
          className="hero-slideshow h-full w-full cursor-pointer"
        >
          {images.map((src, index) => (
            <SwiperSlide key={`${src}-${index}`} className="relative">
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 768px) 1328px, 100vw"
                priority={index === 0}
                className="object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
