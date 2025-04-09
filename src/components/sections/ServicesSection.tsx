"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Droplet, 
  Droplets, 
  Fuel, 
  Car, 
  ShoppingBag, 
  Zap, 
  Coffee, 
  AirVent 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Service card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const ServicesSection = () => {
  const fuelServices = [
    {
      icon: <Droplet className="h-5 w-5 text-primary" />,
      title: "Regular Unleaded",
      description: "High-quality 87 octane fuel for everyday vehicles at competitive prices."
    },
    {
      icon: <Droplets className="h-5 w-5 text-primary" />,
      title: "Premium Unleaded",
      description: "93 octane premium fuel for high-performance engines and luxury vehicles."
    },
    {
      icon: <Fuel className="h-5 w-5 text-primary" />,
      title: "Diesel",
      description: "Clean diesel fuel for trucks, SUVs, and diesel engine vehicles."
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "EV Charging",
      description: "Fast charging stations for electric vehicles while you shop or rest."
    }
  ];

  const additionalServices = [
    {
      icon: <Car className="h-5 w-5 text-primary" />,
      title: "Car Wash",
      description: "Automated and hand wash options to keep your vehicle looking its best."
    },
    {
      icon: <ShoppingBag className="h-5 w-5 text-primary" />,
      title: "Convenience Store",
      description: "Fully stocked store with snacks, drinks, and essential items."
    },
    {
      icon: <Coffee className="h-5 w-5 text-primary" />,
      title: "Fresh Coffee",
      description: "Premium coffee and hot beverages available 24/7."
    },
    {
      icon: <AirVent className="h-5 w-5 text-primary" />,
      title: "Air & Water",
      description: "Free air for tires and water for your vehicle maintenance needs."
    }
  ];

  return (
    <section id="services" className="py-20">
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
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need for your journey, from top-quality fuels to convenient amenities.
          </motion.p>
        </div>

        <Tabs defaultValue="fuel" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="fuel">Fuel Options</TabsTrigger>
              <TabsTrigger value="additional">Additional Services</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="fuel" className="space-y-8">
            {/* Fuel quality callout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-6 rounded-lg mb-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <Fuel className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Quality Fuel Promise</h3>
                  <p className="text-muted-foreground">
                    At D&D Gas Station, we're committed to providing only the highest quality fuels. 
                    All our fuel products meet or exceed industry standards and contain detergents that help 
                    clean your engine, improve performance, and increase fuel economy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Fuel services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fuelServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={0.2 + (index * 0.1)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="additional" className="space-y-8">
            {/* Convenience callout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-6 rounded-lg mb-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <ShoppingBag className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">More Than Just Fuel</h3>
                  <p className="text-muted-foreground">
                    D&D Gas Station is your one-stop destination for all your travel needs. From fresh coffee 
                    and quick snacks to essential automotive supplies, we've designed our services to make 
                    your stop convenient and efficient.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Additional services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={0.2 + (index * 0.1)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default ServicesSection; 