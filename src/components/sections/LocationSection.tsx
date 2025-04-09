"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Days of the week with operating hours
const operatingHours = [
  { day: "Monday", hours: "24 Hours" },
  { day: "Tuesday", hours: "24 Hours" },
  { day: "Wednesday", hours: "24 Hours" },
  { day: "Thursday", hours: "24 Hours" },
  { day: "Friday", hours: "24 Hours" },
  { day: "Saturday", hours: "24 Hours" },
  { day: "Sunday", hours: "24 Hours" },
];

const LocationSection = () => {
  return (
    <section id="location" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Find <span className="text-primary">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Conveniently located and open 24/7 to serve you whenever you need us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardHeader className="pb-0">
                <h3 className="text-xl font-medium">Location Map</h3>
              </CardHeader>
              <CardContent>
                {/* Google Maps embedded iframe */}
                <div className="relative w-full h-[400px] rounded-md overflow-hidden bg-card border border-border">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10872.52187907531!2d21.889861723193242!3d47.05729093831265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474647cd033860ab%3A0xce41a949e6764755!2zSW_ImWlhLCBPcmFkZWE!5e0!3m2!1sro!2sro!4v1744232568999!5m2!1sro!2sro" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                
                <div className="mt-4 flex justify-center">
                  <Button size="sm" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Address and Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-xl font-medium">Contact & Hours</h3>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Address:</h4>
                      <p className="text-muted-foreground">
                        123 Fuel Lane
                        <br />
                        Cityville, ST 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone:</h4>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <h4 className="font-medium">Operating Hours:</h4>
                  </div>

                  <div className="border-t border-border">
                    {operatingHours.map((item, index) => (
                      <div 
                        key={index}
                        className={`flex justify-between py-2 ${
                          index !== operatingHours.length - 1 ? "border-b border-border" : ""
                        }`}
                      >
                        <span>{item.day}</span>
                        <span className="text-primary font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <p className="text-muted-foreground text-sm">
                    We're always open, 365 days a year, including all holidays.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection; 