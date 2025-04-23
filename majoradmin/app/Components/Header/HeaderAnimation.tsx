"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderAnimation = () => {
  const [showEnglish, setShowEnglish] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEnglish((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col justify-center text-white">
      <AnimatePresence mode="wait">
        {showEnglish ? (
          <motion.p
            key="english"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="cursor-default font-semibold text-sm sm:text-base md:text-lg tracking-wide"
          >
            National Institute of Technology <br className="md:hidden" />
            Jalandhar
          </motion.p>
        ) : (
          <motion.p
            key="hindi"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="cursor-default font-semibold text-sm sm:text-base md:text-lg tracking-wide"
          >
            राष्ट्रीय प्रौद्योगिकी संस्थान <br className="md:hidden" />
            जालंधर
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderAnimation;
