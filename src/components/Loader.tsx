'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const MIN_DISPLAY_TIME = 2500; // 2.5 seconds minimum display time
    
    const hideLoader = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);
      
      setTimeout(() => {
        setIsLoading(false);
        // Add a small delay before hiding to allow exit animation to complete
        setTimeout(() => {
          setIsVisible(false);
          onLoadingComplete();
        }, 500);
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

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <motion.div 
              className="w-48 h-48 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              exit={{ 
                scale: 0.9, 
                opacity: 0,
                transition: {
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.9, 1, 0.9],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2.5,
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
