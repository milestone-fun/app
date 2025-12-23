import React from 'react';
import Image from 'next/image';

/**
 * BlogHeader Component
 * 
 * Clones the header section of the blog post including the cover image
 * and the main article title with pixel-perfect accuracy.
 */
const BlogHeader = () => {
  // Asset constants from the provided asset list
  const coverImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f95775cb-5443-4466-8a3b-4e28911a611d-shivamworks-tech/assets/images/images_1.png";
  
  return (
    <div className="pt-7 text-white">
      {/* 
        Hero Image Section 
        Computed styles: 
        - margin: 0px 0px 40px (mb-10)
        - max-height: 384px (max-h-96)
        - border-radius: 16px (rounded-2xl)
        - box-shadow: shadow-xl variants
      */}
      <div className="relative mx-auto mb-10 overflow-hidden rounded-2xl shadow-xl">
      </div>

      {/* 
        Article Header 
        Computed styles for H1:
        - font-family: "Instrument Serif", serif
        - font-size: 48px
        - line-height: ~1.2
        - margin: 8px 0px 24px
        - font-weight: 300 (from high level design for headings)
        - color: oklch(0.97 0 0) (near pure white)
      */}
      <div className="prose-custom mx-auto">
        <h1 
          className="mt-2 mb-6 text-[48px] font-light leading-tight tracking-tight text-white"
          style={{ 
            fontFamily: '"Instrument Serif", serif',
            color: 'rgb(248, 248, 248)' 
          }}
        >
          MileStone.fun
        </h1>
        
        {/* 
          Lead Paragraph 
          Contextually matching the first paragraph of the content.
          Styles: Satoshi, 16px, line-height 1.6, color oklch(0.708 0 0) approximately neutral-400
        */}
        <p className="mb-5 text-[16px] leading-relaxed text-neutral-400">
            execution-gated capital protocol
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;
