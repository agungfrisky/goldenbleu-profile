"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const dummyReviews = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Local Guide",
    review: "Rasa ayamnya benar-benar premium, sausnya juara! Sangat merekomendasikan menu classic-nya.",
    rating: 5,
  },
  {
    id: 2,
    name: "Siska Amelia",
    role: "Pelanggan Setia",
    review: "Steak Wagyu-nya empuk banget, rasanya tidak kalah dengan restoran bintang lima.",
    rating: 5,
  },
  {
    id: 3,
    name: "Andi Wijaya",
    role: "Food Blogger",
    review: "Truffle Beef Bowl terbaik yang pernah saya coba. Wangi trufflenya sangat pas dan bikin nagih.",
    rating: 5,
  },
  {
    id: 4,
    name: "Maya Sari",
    role: "Local Guide",
    review: "Harganya sangat sepadan dengan kualitas rasanya. Porsinya juga mengenyangkan!",
    rating: 4,
  },
];

export function Reviews() {
  // Duplicate the array to create a seamless looping effect
  const loopingReviews = [...dummyReviews, ...dummyReviews];

  return (
    <div className="w-full mx-auto my-12 relative z-10 overflow-hidden">
      <h2 className="text-xl font-bold mb-8 text-center tracking-tight">Apa Kata Mereka?</h2>
      
      {/* Masked Marquee Wrapper */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Marquee Container */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loopingReviews.map((item, index) => (
            <div key={`${item.id}-${index}`} className="px-3">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-72 sm:w-80 glass-card p-6 rounded-2xl flex flex-col h-full shadow-lg border border-black/5 dark:border-white/5 whitespace-normal"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < item.rating ? 'fill-primary text-primary' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-sm text-foreground/80 mb-6 flex-grow italic">
                  &quot;{item.review}&quot;
                </p>
                
                {/* User Info */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{item.name}</h4>
                    <p className="text-xs text-foreground/50">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
