"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const customerReviews = [
  {
    id: 1,
    name: "Icha Cahya Pangesti",
    role: "Local Guide",
    review: 'Porsinya gedee untuk harga 15k. Makan western food ga perlu mahal, rasa bisa bersaing. Saus mushroom nya juaraaa! Ga heran paling cepet abisss :")',
    rating: 5,
  },
  {
    id: 2,
    name: "Rayhan Adyatma",
    role: "Pelanggan",
    review: "Besttt bangett, harga terjangkau tapi rasa bisa di aduuu.",
    rating: 5,
  },
  {
    id: 3,
    name: "Erviana Allegra",
    role: "Local Guide",
    review: "Rasa enak, pelayanan ramah, harga terjangkau. Recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Februar Barkah",
    role: "Local Guide",
    review: "Kualitasnya juara dan melebihi ekspektasi! Cordon bleu besar, renyah di luar, empuk & juicy di dalam. Cheese ball-nya lumer, harga terjangkau, dan pelayanan ramah. Sangat direkomendasikan!",
    rating: 5,
  },
  {
    id: 5,
    name: "Agung Frisky",
    role: "Pelanggan",
    review: "Iseng cobain ternyata rasanya enak, porsinya banyak untuk harga 15k an udah bisa bikin kenyang. Cheese ball nya sih yang gaada lawan, worth it banget!",
    rating: 5,
  },
];

export function Reviews() {
  // Duplicate the array to create a seamless looping effect
  const loopingReviews = [...customerReviews, ...customerReviews];

  return (
    <div className="w-full mx-auto my-12 relative z-10 overflow-hidden">
      <h2 className="text-xl font-bold mb-8 text-center tracking-tight">Apa Kata Mereka?</h2>

      {/* Masked Marquee Wrapper */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Marquee Container */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loopingReviews.map((item, index) => (
            <div key={`${item.id}-${index}`} className="px-3">
              <motion.div whileHover={{ scale: 1.02 }} className="w-72 sm:w-80 glass-card p-6 rounded-2xl flex flex-col h-full shadow-lg border border-black/5 dark:border-white/5 whitespace-normal">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < item.rating ? "fill-primary text-primary" : "text-gray-300"}`} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-foreground/80 mb-6 flex-grow italic">&quot;{item.review}&quot;</p>

                {/* User Info */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary shrink-0">{item.name.charAt(0)}</div>
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
