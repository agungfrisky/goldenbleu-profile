"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export function Location() {
  return (
    <div className="w-full max-w-md mx-auto mt-4 mb-16 relative z-10 px-2 sm:px-0">
      <h2 className="text-xl font-bold mb-6 text-center tracking-tight">Visit Us</h2>

      <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-[2rem] overflow-hidden glass-card p-6 shadow-lg border border-black/5 dark:border-white/5 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
          <MapPin className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-bold mb-3">Golden Bleu</h3>
        
        {/* Garis Pembatas */}
        <div className="w-16 h-1 bg-primary rounded-full mb-4 opacity-80" />
        
        {/* Alamat Lengkap */}
        <h3 className="text-m font-medium">Benteng Vastenburg</h3>
        <p className="text-sm font-medium text-foreground mb-3 px-4">Jl. Jend. Sudirman, Kedung Lumbu, Kec. Ps. Kliwon, Kota Surakarta, Jawa Tengah 57133</p>

        <p className="text-sm text-foreground/70 mb-6">Kunjungi kami secara langsung dan rasakan pengalaman kelezatan premium di tempat.</p>

        <a
          href="https://maps.app.goo.gl/1FNgQi5nJ75jZSxFA"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 px-6 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:bg-primary-hover transition-colors"
        >
          <Navigation className="w-5 h-5" />
          Buka di Google Maps
        </a>
      </motion.div>
    </div>
  );
}
