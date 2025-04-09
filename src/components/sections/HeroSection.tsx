"use client";

import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { Fuel } from "lucide-react";

// Dynamic import with no SSR
const GasStationScene = dynamic(
  () => import("@/components/3d/GasStationModel"),
  { ssr: false, loading: () => <ModelLoadingFallback /> }
);

// Fallback component for when model is loading or errors
const ModelLoadingFallback = () => (
  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-background rounded-lg p-8">
    <div className="text-center">
      <Fuel className="h-16 w-16 text-primary mx-auto mb-4" />
      <p className="text-lg font-medium">Premium Fuel Station</p>
      <p className="text-sm text-muted-foreground mt-2">Experience premium quality</p>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-10" />
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-20 pt-20 pb-16 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Fuel Your Journey at D&D
              <span className="text-primary block mt-2">Gas Station</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 max-w-lg"
            >
              Experience premium fuel, exceptional service, and modern convenience, all in one stop.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="px-8">
                Find Our Location
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                View Fuel Prices
              </Button>
            </motion.div>

            {/* Animated stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              <div className="text-center">
                <motion.p 
                  className="text-3xl font-bold text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  24/7
                </motion.p>
                <p className="text-sm text-muted-foreground">Always Open</p>
              </div>
              <div className="text-center">
                <motion.p 
                  className="text-3xl font-bold text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  10+
                </motion.p>
                <p className="text-sm text-muted-foreground">Years of Service</p>
              </div>
              <div className="text-center">
                <motion.p 
                  className="text-3xl font-bold text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  100%
                </motion.p>
                <p className="text-sm text-muted-foreground">Quality Fuel</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[500px] lg:h-[600px] w-full"
          >
            <GasStationScene />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm mb-2">Scroll to explore</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 