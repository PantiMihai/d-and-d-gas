"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Clock, Award, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
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
            About <span className="text-primary">D&D Gas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Serving the community with quality fuel and exceptional service since 2010.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              D&D Gas Station was founded in 2010 by David and Daniel Smith, two brothers with a vision to create a more modern, customer-focused gas station experience. What started as a single location has grown into a trusted name in our community.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to build on our founders' vision, combining cutting-edge technology with good old-fashioned service to make your refueling experience exceptional every time.
            </p>
          </motion.div>

          {/* Mission and Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-4">
              At D&D Gas, our mission is to provide top-quality fuel products and exceptional customer service in a clean, convenient, and welcoming environment.
            </p>
            <p className="text-muted-foreground">
              We strive to be more than just a gas station - we aim to be a trusted community partner, offering reliable service and quality products that keep you moving forward. Our vision is to redefine the gas station experience through innovation, sustainability, and community engagement.
            </p>
          </motion.div>
        </div>

        {/* Key Differentiators */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          What Sets Us Apart
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Building2 className="h-10 w-10 text-primary" />,
              title: "Modern Facilities",
              description: "State-of-the-art pumps and equipment for a fast, efficient experience."
            },
            {
              icon: <Clock className="h-10 w-10 text-primary" />,
              title: "24/7 Service",
              description: "Always open when you need us, day or night, 365 days a year."
            },
            {
              icon: <Award className="h-10 w-10 text-primary" />,
              title: "Premium Fuel",
              description: "High-quality fuel products that keep your engine running smoothly."
            },
            {
              icon: <Shield className="h-10 w-10 text-primary" />,
              title: "Customer First",
              description: "Exceptional service that puts your needs at the center of everything we do."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="mb-4 inline-flex">{item.icon}</div>
                    <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection; 