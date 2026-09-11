import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import SocialBar from "@/components/SocialBar";

const slideshowImages = [
  "/images/placeholder-1.png",
  "/images/placeholder-1.png",
  "/images/placeholder-1.png",
];

export default function Home() {
  return (
    <div className="flex h-dvh flex-col items-center gap-10 bg-black md:gap-16">
      <Header />
      <HeroSlideshow images={slideshowImages} />
      <SocialBar />
    </div>
  );
}
