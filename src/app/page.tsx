"use client";

import { motion } from "framer-motion";
import { MessageCircle, Utensils, MapPin, Star } from "lucide-react";
import { FoodMenu } from "@/components/FoodMenu";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";

const socialLinks = [
  {
    name: "Lihat Menu Kami",
    url: "#menu",
    icon: <Utensils className="w-6 h-6" />,
    color: "group-hover:text-primary",
  },
  // {
  //   name: "Review Pelanggan",
  //   url: "#reviews",
  //   icon: <Star className="w-6 h-6" />,
  //   color: "group-hover:text-yellow-500",
  // },
  {
    name: "Lokasi Kami",
    url: "#location",
    icon: <MapPin className="w-6 h-6" />,
    color: "group-hover:text-primary",
  },
  {
    name: "Chat via WhatsApp",
    url: "https://wa.me/6281234567890",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "group-hover:text-green-500",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/goldenbleu",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    color: "group-hover:text-pink-500",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@goldenbleu",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.66a6.33 6.33 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    color: "group-hover:text-black dark:group-hover:text-white",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center py-12 px-6 sm:px-12 relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Profile Avatar / Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-amber-300 p-1 mb-6 shadow-2xl shadow-primary/30 relative">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden relative">
            {/* Note: User will provide logo here later */}
            <Utensils className="w-12 h-12 text-primary absolute" />
            <div className="w-full h-full bg-black/5 flex items-center justify-center backdrop-blur-sm z-10" />
          </div>
        </motion.div>

        {/* Brand Name & Slogan */}
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight text-center">Golden Bleu</h1>
        <p className="text-foreground/70 text-center mb-10 font-medium text-lg">&quot;Kelezatan Premium Di Setiap Gigitan&quot;</p>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-4 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group flex items-center p-4 rounded-2xl glass-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              <div className={`mr-4 text-foreground/80 transition-colors duration-300 ${link.color} relative z-10`}>{link.icon}</div>
              <span className="font-semibold text-lg relative z-10">{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Horizontal Food Menu Carousel */}
        <div id="menu" className="w-full scroll-mt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <FoodMenu />
          </motion.div>
        </div>

        {/* Reviews Section */}
        <div id="reviews" className="w-full scroll-mt-24 overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}>
            <Reviews />
          </motion.div>
        </div>

        {/* Location Section */}
        <div id="location" className="w-full scroll-mt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <Location />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
