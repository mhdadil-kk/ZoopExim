'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import * as THREE from 'three';

// Create a wrapper component that properly handles the ref
const GlobeWrapper = dynamic(
  () => import('react-globe.gl').then((mod) => {
    const Globe = mod.default;
    return ({ forwardedRef, ...props }: any) => <Globe ref={forwardedRef} {...props} />;
  }),
  { 
    ssr: false,
    loading: () => null
  }
);

const Globe3D = () => {
  const globeEl = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  const [markers] = useState([
    { lat: 28.6139, lng: 77.2090, name: 'India' },
    { lat: 13.7563, lng: 100.5018, name: 'Thailand' },
    { lat: -9.189967, lng: -75.015152, name: 'Peru' },
    { lat: -33.4489, lng: -70.6693, name: 'Chile' },
    { lat: 40.7128, lng: -74.006, name: 'USA' },
    { lat: -33.8688, lng: 151.2093, name: 'Australia' },
    { lat: -40.9006, lng: 174.886, name: 'New Zealand' },
  ]);

  const [arcs] = useState(
    markers
      .filter(m => m.name !== 'India')
      .map(m => ({
        startLat: 28.6139,
        startLng: 77.2090,
        endLat: m.lat,
        endLng: m.lng,
        color: ['#00ffcc', '#ff6600'],
      }))
  );

  // Handle resize
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  // Client-side mounting
  useEffect(() => {
    setIsClient(true);
    updateDimensions();
    
    const handleResize = () => updateDimensions();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [updateDimensions]);

  // Globe setup and auto-rotation
  useEffect(() => {
    console.log('🔄 useEffect triggered, isClient:', isClient, 'globeEl.current:', !!globeEl.current);
    
    if (!isClient) {
      console.log('⏸️ Not client-side yet, waiting...');
      return;
    }

    let animationId: number;
    // Initialize rotation angle so India faces the screen (0 degrees = facing forward)
    let rotationAngle = 0; // Start with India facing the screen
    let setupAttempts = 0;

    const setupGlobe = () => {
      setupAttempts++;
      console.log(`🔧 Globe setup attempt #${setupAttempts}...`);
      
      try {
        const globe = globeEl.current;
        
        if (!globe) {
          console.error('❌ Globe ref is null, attempt:', setupAttempts);
          if (setupAttempts < 10) {
            setTimeout(setupGlobe, 500);
          }
          return;
        }

        console.log('✅ Globe ref found:', globe);

        // Set initial view with larger globe (closer altitude) - starting from India
        globe.pointOfView({ lat: 28.6139, lng: 77.2090, altitude: 1.8 }, 0);
        console.log('📍 Initial point of view set with larger globe - starting from India');

        // Enhanced lighting
        const scene = globe.scene();
        if (scene) {
          console.log('🎨 Setting up lighting...');
          // Clear existing lights
          scene.children = scene.children.filter((child: any) => !(child instanceof THREE.AmbientLight || child instanceof THREE.DirectionalLight));
          
          const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
          const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
          directionalLight.position.set(5, 3, 5);
          scene.add(ambientLight);
          scene.add(directionalLight);
          console.log('✅ Lighting setup complete');
        } else {
          console.warn('⚠️ Scene not available, skipping lighting setup');
        }

        console.log('✅ Globe setup complete, starting rotation...');

        // Auto-rotation with user interaction support
        const startRotation = () => {
          let frameCount = 0;
          let lastInteractionTime = 0;
          let isUserInteracting = false;
          
          // Track user interaction
          const handleInteractionStart = () => {
            isUserInteracting = true;
            lastInteractionTime = Date.now();
            console.log('👆 User interaction started - pausing auto-rotation');
          };
          
          const handleInteractionEnd = () => {
            isUserInteracting = false;
            lastInteractionTime = Date.now();
            console.log('✋ User interaction ended - resuming auto-rotation in 2 seconds');
          };
          
          // Add interaction listeners
          const controls = globe.controls();
          if (controls) {
            controls.addEventListener('start', handleInteractionStart);
            controls.addEventListener('end', handleInteractionEnd);
          }
          
          const rotate = () => {
            const currentGlobe = globeEl.current;
            if (currentGlobe) {
              frameCount++;
              
              // Only auto-rotate if user hasn't interacted recently (2 second delay)
              const timeSinceInteraction = Date.now() - lastInteractionTime;
              const shouldAutoRotate = !isUserInteracting && timeSinceInteraction > 2000;
              
              if (shouldAutoRotate) {
                rotationAngle -= 0.3; // Negative for left-to-right rotation
                
                // Calculate new longitude position (left to right) starting from India's longitude
                const indiaLng = 77.2090;
                const newLng = (indiaLng + (rotationAngle * 0.1)) % 360;
                const adjustedLng = newLng > 180 ? newLng - 360 : newLng;
                
                // Log every 60 frames (roughly every second at 60fps)
                if (frameCount % 60 === 0) {
                  console.log(`🌍 Globe auto-rotating - Frame: ${frameCount}, Angle: ${rotationAngle.toFixed(1)}, Lng: ${adjustedLng.toFixed(2)}`);
                }
                
                // Update globe rotation - maintain India's latitude as center
                const currentView = currentGlobe.pointOfView();
                currentGlobe.pointOfView({ 
                  lat: currentView.lat || 28.6139, // Keep India's latitude
                  lng: adjustedLng, 
                  altitude: currentView.altitude || 1.8 // Closer for larger appearance
                }, 0);
              }
              
              animationId = requestAnimationFrame(rotate);
            } else {
              console.error('❌ Globe rotation stopped - globeEl.current is null');
            }
          };
          
          console.log('🚀 Starting auto-rotation with user interaction support...');
          rotate();
        };

        // Start rotation immediately
        startRotation();

      } catch (error) {
        console.error('❌ Globe setup error:', error);
        // Retry setup
        if (setupAttempts < 5) {
          setTimeout(setupGlobe, 1000);
        }
      }
    };

    // Initialize globe setup with delay
    console.log('⏰ Scheduling globe setup in 1000ms...');
    setTimeout(setupGlobe, 1000);

    // Cleanup
    return () => {
      console.log('🧹 Cleaning up globe rotation...');
      if (animationId) {
        cancelAnimationFrame(animationId);
        console.log('✅ Animation frame cancelled');
      }
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <div 
        ref={containerRef}
        className="w-full h-[100vh] min-h-[800px] bg-black flex items-center justify-center"
      >
        <div className="text-white text-xl">Loading Globe...</div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="w-full h-[100vh] min-h-[800px] relative overflow-hidden flex items-center justify-center"
    >
      <div className="w-full h-full flex items-center justify-center">
        <GlobeWrapper
          forwardedRef={globeEl}
          width={dimensions.width || window.innerWidth}
          height={dimensions.height || window.innerHeight}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={markers}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => '#ffaa00'}
        pointAltitude={0.02}
        pointRadius={0.4}
        pointLabel="name"
        arcsData={arcs}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={2}
        arcDashInitialGap={() => Math.random() * 5}
        arcDashAnimateTime={2000}
        labelsData={markers}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelSize={1.5}
        labelDotRadius={0.3}
        labelColor={() => '#ffffff'}
        labelResolution={2}
        showGlobe={true}
        showAtmosphere={true}
        atmosphereColor="#87ceeb"
        atmosphereAltitude={0.15}
        />
      </div>
    </div>
  );
};

export default Globe3D;
