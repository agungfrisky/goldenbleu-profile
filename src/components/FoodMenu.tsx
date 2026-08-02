"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  {
    id: 1,
    name: "Classic",
    price: "Rp 17.000",
    image: "/menu/classic.png",
    description: "Ayam renyah isi keju lumer dengan kentang goreng hangat & saus BBQ/Spicy. Klasik & selalu memuaskan!",
  },
  {
    id: 2,
    name: "Deluxe",
    price: "Rp 22.000",
    image: "/menu/deluxe.png",
    description: "Cordon Bleu dengan porsi kentang melimpah & siraman saus Mushroom atau Cream Cheese yang gurih creamy.",
  },
  {
    id: 3,
    name: "Combo",
    price: "Rp 22.000",
    image: "/menu/combo.png",
    description: "Paket puas Cordon Bleu renyah, kentang goreng hangat, dan 2 Cheese Ball lumer lengkap dengan saus.",
  },
  {
    id: 4,
    name: "Chicken Over Rice",
    price: "Rp 25.000",
    image: "/menu/cor.png",
    description: "Nasi putih hangat dengan topping ayam krispi renyah dan paduan 3 varian saus spesial yang lezat.",
  },
  {
    id: 5,
    name: "Fries & Chicken",
    price: "Rp 27.000",
    image: "/menu/fnc.png",
    description: "Kombinasi seru ayam goreng krispi dan kentang goreng gurih dengan siraman 3 varian saus pilihan.",
  },
  {
    id: 6,
    name: "Mac & Chicken",
    price: "Rp 30.000",
    image: "/menu/mnc.png",
    description: "Makaroni saus keju creamy dipadukan dengan ayam krispi renyah dan siraman 3 varian saus gurih.",
  },
  {
    id: 7,
    name: "Cheese Ball",
    price: "Rp 15.000",
    image: "/menu/cb.png",
    description: "6 bola keju emas yang renyah di luar dan lumer sempurna di dalam. Camilan favorit untuk berbagi!",
  },
  {
    id: 8,
    name: "Mix Plater",
    price: "Rp 20.000",
    image: "/menu/mp.png",
    description: "Paket sharing komplit! 2 Cheese Ball lumer, sosis gurih, dan kentang goreng renyah plus saus pilihan.",
  },
  {
    id: 9,
    name: "Mac & Cheese",
    price: "Rp 20.000",
    image: "/menu/mc.png",
    description: "Makaroni rebus lembut dalam balutan saus keju yang gurih dan creamy lumer. Sajian klasik yang lezat!",
  },
  {
    id: 10,
    name: "French Fries",
    price: "Rp 10.000",
    image: "/menu/ff.png",
    description: "Kentang goreng keemasan yang garing di luar dan lembut di dalam, lengkap dengan cocolan saus gurih.",
  },
];

export function FoodMenu() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-md mx-auto my-8 relative">
      <h2 className="text-xl font-bold mb-10 text-center tracking-tight">Our Premium Menu</h2>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" ref={emblaRef}>
        <div className="flex touch-pan-y items-end pb-8">
          {menuItems.map((item, index) => {
            const isActive = selectedIndex === index;

            return (
              <div className="flex-[0_0_90%] sm:flex-[0_0_85%] min-w-0 px-3 pt-16" key={item.id}>
                <motion.div className="relative rounded-[2rem] group cursor-grab active:cursor-grabbing glass-card flex flex-col items-center pb-8 px-6 text-center shadow-lg border border-black/5 dark:border-white/5">
                  {/* Decorative background shape at top (curved) */}
                  <div className="absolute top-0 left-0 right-0 h-28 bg-primary/20 dark:bg-primary/10 rounded-t-[2rem] rounded-b-[50%] -z-10" />

                  {/* Food Image Container (Transparent) */}
                  <div className="relative z-10 w-54 h-50 -mt-20 -mb-2 drop-shadow-2xl shrink-0">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      animate={{
                        scale: isActive ? 1.1 : 0.9,
                        rotate: isActive ? 3 : 0,
                        opacity: isActive ? 1 : 0.8,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: isActive ? 0.25 : 0,
                      }}
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-2 text-foreground tracking-tight line-clamp-1">{item.name}</h3>

                  {/* Price */}
                  <div className="bg-primary/10 dark:bg-primary/20 text-primary font-bold px-5 py-1.5 rounded-full mb-4 text-lg">{item.price}</div>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 mb-2 line-clamp-3">{item.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-[-10px] top-[55%] -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-zinc-800 shadow-xl text-primary hover:scale-110 transition-transform z-10 border border-primary/20"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-[-10px] top-[55%] -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-zinc-800 shadow-xl text-primary hover:scale-110 transition-transform z-10 border border-primary/20"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
