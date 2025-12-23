import BlogHeader from "@/component/appbar";
import HeroSection from "@/component/landing/hero";
import Navbar from "@/component/landing/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black selection:bg-neutral-400/20 selection:text-neutral-100">
      <div className="container min-h-screen border-x border-dashed border-neutral-800 bg-black">
        <Navbar/>
        <main className="mx-auto max-w-2xl px-4 sm:px-0">
          <BlogHeader />
          <HeroSection/>
        </main>
      </div>
    </div>
  );
}
