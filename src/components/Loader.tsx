'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const MIN_DISPLAY_TIME = 2500; // 2.5 seconds minimum display time
    
    const hideLoader = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);
      
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = 'auto';
      }, remainingTime);
    };

    const handleLoad = () => {
      // Check if all images are loaded
      const images = Array.from(document.images);
      const totalImages = images.length;
      let loadedImages = 0;

      if (totalImages === 0) {
        // No images on page, wait for minimum display time
        hideLoader();
        return;
      }

      const imageLoaded = () => {
        loadedImages++;
        if (loadedImages >= totalImages) {
          hideLoader();
        }
      };

      // Check if images are already loaded
      images.forEach(img => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener('load', imageLoaded);
          img.addEventListener('error', imageLoaded);
        }
      });

      // Fallback in case some images don't fire load events
      const fallbackTimer = setTimeout(hideLoader, 5000); // Max 5 seconds wait

      return () => {
        clearTimeout(fallbackTimer);
        images.forEach(img => {
          img.removeEventListener('load', imageLoaded);
          img.removeEventListener('error', imageLoaded);
        });
      };
    };

    // Initial check
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="w-48 h-48 relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0.8, rotate: -5 }}
              animate={{ 
                scale: [0.95, 1.05, 0.95],
                opacity: [0.8, 1, 0.8],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-full h-full origin-center"
            >
              <img 
                src="/logo.svg" 
                alt="ZoopExim Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
