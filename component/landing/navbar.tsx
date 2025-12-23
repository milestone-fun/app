import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex h-16 items-center justify-between border-b border-dashed border-neutral-800">
      {/* Profile Logo - Left */}
      <a href="/" className="block">
    <Image
    src="/logo.png"
    width={96}
    height={96}
    alt=''
    />
      </a>

      {/* Navigation Links - Right */}
      <div className="flex gap-2 p-2 ">
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
    </nav>
  );
};

export default Navbar;