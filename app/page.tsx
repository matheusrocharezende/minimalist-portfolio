import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import SocialBar from "@/components/SocialBar";
import { getSlideshowImages } from "@/lib/getSlideshowImages";

const fallbackImages = ["/images/placeholder-1.png"];

export const revalidate = 60;

export default async function Home() {
  const images = await getSlideshowImages();

  return (
    <div className="flex h-dvh flex-col items-center gap-10 bg-black md:gap-16">
      <Header />
      <HeroSlideshow images={images.length > 0 ? images : fallbackImages} />
      <SocialBar />
    </div>
  );
}
