import Hero from "@/components/Hero";
import Manifest from "@/components/Manifest";
import TwoWorlds from "@/components/TwoWorlds";
import StoryGallery from "@/components/StoryGallery";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifest />
      <TwoWorlds />
      <StoryGallery />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
