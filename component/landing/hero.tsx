export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#87CEEB] font-sans">
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/1200x/24/90/37/249037e8d6daa355b289ea8e8a6db766.jpg"
          alt="Umbra Sky Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-0 bg-transparent"></div>
      </div>

      <nav className="absolute top-0 left-0 p-8 z-20 hidden md:block">
        <a href="/" className="block transition-transform hover:scale-105">
          <img
            src="/logo.png"
            className="w-16 h-16 lg:w-20 lg:h-20"
          />
        </a>
      </nav>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pt-12 md:pt-0">
        <div className="mb-4 md:mb-10 animate-fade-in-up">
           <a href="/" className="inline-block transition-transform hover:scale-105 cursor-pointer">
            <img
              src="/logo.png"
              alt="Umbra Icon"
              className="w-32 h-32 md:w-32 md:h-32 "
            />
          </a>
        </div>

        <h1 className="text-center font-normal text-white  tracking-tight mb-10 md:mb-12">
          <div className="block text-[48px] font-serif md:text-[80px] lg:text-[105.6px]">
            Execution gated Capital
          </div>
          <div className="block font-serif text-[48px] md:text-[80px] lg:text-[105.6px]">
            On Solana
          </div>
        </h1>

        
      </div>

      <div className="absolute bottom-8 left-0 right-0 w-full px-6 md:px-12 z-20 flex flex-col md:flex-row justify-between items-center text-gray-50 text-sm md:text-[16.8px] font-medium gap-4">
        <a 
          href="https://x.com/milestonedotfun"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <span>Follow on</span>
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/db152321-d045-41b8-a835-86af80fecc29-umbraprivacy-com/assets/images/6926cf463980cb3f607d741d_twitter-1.avif" 
            alt="Twitter" 
            className="w-5 h-5 object-contain opacity-80"
          />
        </a>
      </div>
    </section>
  );
}
