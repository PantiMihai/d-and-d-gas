"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Droplet, Droplets, Fuel, Zap, TrendingUp, TrendingDown, Minus } from "lucide-react";

// Sample fuel price data
const fuelPrices = [
  {
    id: "regular",
    name: "Regular Unleaded",
    price: 3.49,
    trend: "down",
    icon: <Droplet className="h-6 w-6 text-primary" />,
  },
  {
    id: "midgrade",
    name: "Midgrade Unleaded",
    price: 3.79,
    trend: "stable",
    icon: <Droplet className="h-6 w-6 text-primary" />,
  },
  {
    id: "premium",
    name: "Premium Unleaded",
    price: 4.19,
    trend: "down",
    icon: <Droplets className="h-6 w-6 text-primary" />,
  },
  {
    id: "diesel",
    name: "Diesel",
    price: 3.89,
    trend: "up",
    icon: <Fuel className="h-6 w-6 text-primary" />,
  },
  {
    id: "ev",
    name: "EV Charging",
    price: 0.45,
    trend: "stable",
    icon: <Zap className="h-6 w-6 text-primary" />,
    unit: "kWh",
  },
];

// Historical price data for chart (simplified)
const priceHistory = [
  { month: "Jan", regular: 3.75, premium: 4.45, diesel: 3.95, midgrade: 4.10, ev: 0.52 },
  { month: "Feb", regular: 3.85, premium: 4.55, diesel: 3.99, midgrade: 4.20, ev: 0.50 },
  { month: "Mar", regular: 3.95, premium: 4.65, diesel: 4.05, midgrade: 4.30, ev: 0.49 },
  { month: "Apr", regular: 3.80, premium: 4.50, diesel: 4.00, midgrade: 4.15, ev: 0.48 },
  { month: "May", regular: 3.65, premium: 4.35, diesel: 3.95, midgrade: 4.00, ev: 0.47 },
  { month: "Jun", regular: 3.55, premium: 4.25, diesel: 3.90, midgrade: 3.90, ev: 0.46 },
  { month: "Jul", regular: 3.49, premium: 4.19, diesel: 3.89, midgrade: 3.79, ev: 0.45 },
  { month: "Aug", regular: 3.60, premium: 4.30, diesel: 3.95, midgrade: 3.88, ev: 0.45 },
  { month: "Sep", regular: 3.72, premium: 4.42, diesel: 4.01, midgrade: 4.05, ev: 0.46 },
  { month: "Oct", regular: 3.68, premium: 4.38, diesel: 3.98, midgrade: 4.00, ev: 0.45 },
  { month: "Nov", regular: 3.58, premium: 4.28, diesel: 3.92, midgrade: 3.92, ev: 0.45 },
  { month: "Dec", regular: 3.52, premium: 4.22, diesel: 3.89, midgrade: 3.85, ev: 0.45 },
];

const FuelPricesSection = () => {
  return (
    <section id="fuel-prices" className="py-20">
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
            Fuel <span className="text-primary">Prices</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Current prices at D&D Gas Station. We update our prices daily to remain competitive while maintaining quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Prices Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-xl font-medium">Current Prices</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fuelPrices.map((fuel) => (
                    <div key={fuel.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-card/80 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          {fuel.icon}
                        </div>
                        <span className="font-medium">{fuel.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">
                          ${fuel.price.toFixed(2)}
                          <span className="text-muted-foreground text-sm font-normal ml-1">
                            {fuel.unit ? `/${fuel.unit}` : "/gal"}
                          </span>
                        </span>
                        {fuel.trend === "up" && (
                          <TrendingUp className="h-4 w-4 text-destructive" />
                        )}
                        {fuel.trend === "down" && (
                          <TrendingDown className="h-4 w-4 text-green-500" />
                        )}
                        {fuel.trend === "stable" && (
                          <Minus className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Last updated: July 15, 2024 at 8:30 AM
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Price Trends Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-xl font-medium">Price Trends (Last 12 Months)</h3>
              </CardHeader>
              <CardContent>
                {/* This would normally be a real chart component */}
                <div className="h-[350px] w-full relative">
                  {/* Chart Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground py-4 z-10">
                    <span>$5.00</span>
                    <span>$4.00</span>
                    <span>$3.00</span>
                    <span>$2.00</span>
                    <span>$1.00</span>
                    <span>$0.00</span>
                  </div>
                  
                  {/* Chart grid lines */}
                  <div className="absolute left-8 right-4 top-4 bottom-4 pointer-events-none">
                    <div className="w-full h-[2px] absolute bottom-0 bg-slate-500"></div>
                    <div className="w-full h-[1px] absolute bottom-[20%] bg-slate-400/80"></div>
                    <div className="w-full h-[1px] absolute bottom-[40%] bg-slate-400/80"></div>
                    <div className="w-full h-[1px] absolute bottom-[60%] bg-slate-400/80"></div>
                    <div className="w-full h-[1px] absolute bottom-[80%] bg-slate-400/80"></div>
                    
                    {/* Vertical axis line */}
                    <div className="h-full w-[1px] absolute left-0 bg-slate-400/80"></div>
                  </div>
                  
                  {/* Mock Chart - In a real application, use a charting library like Chart.js or Recharts */}
                  <div className="absolute inset-0 flex flex-col pl-8">
                    <div className="flex-1 flex items-end">
                      <div className="w-full h-full flex items-end px-4">
                        {priceHistory.map((data, index) => (
                          <div key={index} className="flex-1 flex flex-col items-center gap-1 group relative hover:bg-card/50 py-2 rounded-md transition-colors">
                            {/* Price tooltip on hover */}
                            <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 bg-card/90 backdrop-blur-sm shadow-md p-2 rounded-md text-xs transition-opacity z-10 whitespace-nowrap">
                              <p><span className="font-medium text-primary">Regular:</span> ${data.regular.toFixed(2)}</p>
                              <p><span className="font-medium text-purple-500">Premium:</span> ${data.premium.toFixed(2)}</p>
                              <p><span className="font-medium text-destructive">Diesel:</span> ${data.diesel.toFixed(2)}</p>
                              <p><span className="font-medium text-amber-500">Midgrade:</span> ${data.midgrade.toFixed(2)}</p>
                              <p><span className="font-medium text-green-500">EV:</span> ${data.ev.toFixed(2)}/kWh</p>
                            </div>
                            
                            {/* Regular Bar */}
                            <div 
                              className="w-3 bg-primary rounded-t transition-all group-hover:w-5"
                              style={{ 
                                height: `${(data.regular / 5) * 100}%`,
                                maxHeight: "80%"
                              }}
                            />
                            
                            {/* Premium Bar */}
                            <div 
                              className="w-3 bg-purple-500 rounded-t transition-all group-hover:w-5"
                              style={{ 
                                height: `${(data.premium / 5) * 100}%`,
                                maxHeight: "80%"
                              }}
                            />
                            
                            {/* Diesel Bar */}
                            <div 
                              className="w-3 bg-destructive rounded-t transition-all group-hover:w-5"
                              style={{ 
                                height: `${(data.diesel / 5) * 100}%`,
                                maxHeight: "80%"
                              }}
                            />
                            
                            {/* Midgrade Bar */}
                            <div 
                              className="w-3 bg-amber-500 rounded-t transition-all group-hover:w-5"
                              style={{ 
                                height: `${(data.midgrade / 5) * 100}%`,
                                maxHeight: "80%"
                              }}
                            />
                            
                            {/* EV Bar */}
                            <div 
                              className="w-3 bg-green-500 rounded-t transition-all group-hover:w-5"
                              style={{ 
                                height: `${(data.ev / 5) * 100}%`,
                                maxHeight: "80%"
                              }}
                            />
                            
                            <span className="text-xs mt-2 font-medium">{data.month}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Legend */}
                <div className="flex justify-center items-center gap-6 mt-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm">Regular</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span className="text-sm">Diesel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-sm">Midgrade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">EV ($/kWh)</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Prices shown are monthly averages. Hover over each month to see detailed pricing information.
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

export default FuelPricesSection; 