'use client';

import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Floating WhatsApp CTA — only renders when NEXT_PUBLIC_WHATSAPP_NUMBER is set.
 * Set the env var to a full number with country code, e.g. 919876543210
 */
export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after short delay
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!number) return null;

  const href = `https://wa.me/${number}?text=Hello%2C%20I%20am%20interested%20in%20Tirth%20Agarbatti%20products.`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 text-white shadow-xl rounded-none"
          style={{ background: '#25D366' }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <MessageCircle size={20} />
          <span className="font-body text-xs font-600 tracking-wide hidden sm:block">WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
