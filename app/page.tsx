import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import SocialBar from "@/components/SocialBar";
import { getSlideshowMedia, type SlideshowMedia } from "@/lib/getSlideshowMedia";

const fallbackMedia: SlideshowMedia[] = [
  { src: "/images/placeholder-1.png", type: "image" },
];

export const revalidate = 60;

export default async function Home() {
  const media = await getSlideshowMedia();

  return (
    <div className="flex h-dvh flex-col items-center gap-6 bg-black md:gap-0">
      <Header />
      <HeroSlideshow media={media.length > 0 ? media : fallbackMedia} />
      <SocialBar />
    </div>
  );
}
