import FloatingNavBar from "@/components/FloatingNavBar";
import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import { getSlideshowMedia, type SlideshowMedia } from "@/lib/getSlideshowMedia";

const fallbackMedia: SlideshowMedia[] = [
  { src: "/images/placeholder-1.png", type: "image" },
];

export const revalidate = 60;

export default async function Home() {
  const media = await getSlideshowMedia();

  return (
    <ScrollRevealProvider>
      <div className="flex h-dvh flex-col items-center gap-6 bg-black md:gap-0">
        <Header />
        <HeroSlideshow media={media.length > 0 ? media : fallbackMedia} />
      </div>
      <FloatingNavBar />
    </ScrollRevealProvider>
  );
}
