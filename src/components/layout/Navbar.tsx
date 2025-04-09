"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Location", href: "#location" },
  { name: "Fuel Prices", href: "#fuel-prices" },
  { name: "Store", href: "#store" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center">
      <motion.header
        className={`transition-all duration-500 ease-in-out ${
          scrolled 
            ? `bg-card/${isHovered ? '95' : '75'} backdrop-blur-sm border border-border/10` 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          width: scrolled ? '95%' : '100%',
          maxWidth: scrolled ? '6xl' : 'none',
          borderRadius: scrolled ? 9999 : 0,
          marginTop: scrolled ? 12 : 0,
          boxShadow: scrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : '0 0 0 0 rgba(0, 0, 0, 0)'
        }}
        transition={{ 
          duration: 0.7, 
          ease: [0.22, 1, 0.36, 1], // custom ease curve for smoother transition
          width: { duration: 0.6 },
          borderRadius: { duration: 0.7 },
          marginTop: { duration: 0.7 }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className={`${scrolled ? "px-8" : "container mx-auto px-4"}`}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            layout
            className={`flex items-center ${scrolled ? "flex-col py-3" : "flex-row justify-between py-4"}`}
            transition={{ 
              layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            <motion.div
              layout="position"
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                marginBottom: scrolled ? 16 : 0
              }}
              transition={{ 
                delay: 0.2, 
                marginBottom: { duration: 0.6, ease: "easeInOut" }
              }}
            >
              <a href="#hero" className="text-primary font-bold text-2xl">
                D&D <span className="text-accent-foreground">Gas</span>
              </a>
            </motion.div>

            <motion.nav 
              layout="position"
              className={`hidden md:flex ${scrolled ? "space-x-8" : "space-x-6"}`}
              transition={{ 
                layout: { duration: 0.5 }
              }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`${scrolled ? "text-sm font-medium" : ""} text-foreground hover:text-primary transition-all duration-300`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    fontSize: scrolled ? "0.875rem" : "1rem"
                  }}
                  transition={{ 
                    delay: 0.1 * index,
                    fontSize: { duration: 0.5 }
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>

            <motion.div 
              layout="position"
              className={`md:hidden ${scrolled ? "absolute right-6 top-2" : ""}`}
              transition={{ 
                layout: { duration: 0.5 }
              }}
            >
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-card">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-foreground hover:text-primary py-2 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                          document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                        }}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.header>
    </div>
  );
};

export default Navbar; 