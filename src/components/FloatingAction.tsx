"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingAction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tampil setelah scroll melewati area link atas (sekitar 350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Pengecekan awal saat komponen dimuat
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-white shadow-2xl shadow-primary/40 font-bold hover:bg-primary-hover transition-colors"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Order via WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
