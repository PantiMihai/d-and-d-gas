"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Coffee,
  Pizza,
  Candy,
  Beer,
  Cigarette,
  Car,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel";

// Define types
interface Product {
  name: string;
  price: number;
  featured: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  products: Product[];
}

// Product categories with icons
const categories = [
  {
    id: "food",
    name: "Food & Snacks",
    icon: <Pizza className="h-6 w-6 text-primary" />,
    products: [
      { name: "Fresh Sandwiches", price: 4.99, featured: true },
      { name: "Hot Dogs", price: 2.49, featured: true },
      { name: "Chips & Snacks", price: 1.99, featured: false },
      { name: "Energy Bars", price: 2.29, featured: false },
      { name: "Candy Bars", price: 1.49, featured: false },
      { name: "Fresh Fruit", price: 0.99, featured: false },
    ],
  },
  {
    id: "drinks",
    name: "Beverages",
    icon: <Coffee className="h-6 w-6 text-primary" />,
    products: [
      { name: "Premium Coffee", price: 1.99, featured: true },
      { name: "Fountain Drinks", price: 1.79, featured: true },
      { name: "Energy Drinks", price: 3.49, featured: false },
      { name: "Bottled Water", price: 1.49, featured: false },
      { name: "Sports Drinks", price: 2.29, featured: false },
      { name: "Fresh Juices", price: 2.99, featured: false },
    ],
  },
  {
    id: "alcohol",
    name: "Beer & Wine",
    icon: <Beer className="h-6 w-6 text-primary" />,
    products: [
      { name: "Craft Beer 6-Pack", price: 9.99, featured: true },
      { name: "Wine Bottles", price: 12.99, featured: true },
      { name: "Import Beer", price: 8.99, featured: false },
      { name: "Domestic Beer", price: 7.99, featured: false },
      { name: "Hard Seltzers", price: 8.49, featured: false },
      { name: "Coolers", price: 2.49, featured: false },
    ],
  },
  {
    id: "tobacco",
    name: "Tobacco",
    icon: <Cigarette className="h-6 w-6 text-primary" />,
    products: [
      { name: "Cigarettes", price: 8.99, featured: true },
      { name: "Vape Products", price: 14.99, featured: true },
      { name: "Cigars", price: 6.99, featured: false },
      { name: "Smokeless Tobacco", price: 5.99, featured: false },
      { name: "Lighters", price: 1.99, featured: false },
      { name: "Rolling Papers", price: 2.49, featured: false },
    ],
  },
  {
    id: "auto",
    name: "Auto Supplies",
    icon: <Car className="h-6 w-6 text-primary" />,
    products: [
      { name: "Motor Oil", price: 6.99, featured: true },
      { name: "Windshield Washer", price: 3.99, featured: true },
      { name: "Ice Scrapers", price: 4.99, featured: false },
      { name: "Air Fresheners", price: 2.99, featured: false },
      { name: "Phone Chargers", price: 9.99, featured: false },
      { name: "Tire Pressure Gauges", price: 5.99, featured: false },
    ],
  },
];

// Featured products component
const FeaturedProducts = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const featuredProducts = categories.flatMap((category) =>
    category.products
      .filter((product) => product.featured)
      .map((product) => ({
        ...product,
        category
      }))
  );

  // Setup autoplay effect
  React.useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Autoplay interval of 3 seconds
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {featuredProducts.map((product, index) => (
          <CarouselItem key={`${product.category.id}-${index}`} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {product.category.icon}
                        <span className="text-sm text-muted-foreground">
                          {product.category.name}
                        </span>
                      </div>
                      <h4 className="text-lg font-medium mb-1">{product.name}</h4>
                      <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
                    </div>
                    <div className="w-16 h-16 bg-primary/10 rounded-md flex items-center justify-center">
                      {/* Placeholder for product image */}
                      <ShoppingBag className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-6 gap-2">
        <CarouselPrevious 
          className="relative static translate-y-0 h-9 w-9 border-primary/50 hover:bg-primary/10 hover:border-primary" 
          variant="outline"
        />
        <CarouselNext 
          className="relative static translate-y-0 h-9 w-9 border-primary/50 hover:bg-primary/10 hover:border-primary" 
          variant="outline"
        />
      </div>
    </Carousel>
  );
};

// Category products component
interface CategoryProductsProps {
  category: Category;
}

const CategoryProducts = ({ category }: CategoryProductsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {category.products.map((product: Product, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="p-4 border border-border rounded-lg hover:bg-card/80 transition-colors"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ConvenienceStoreSection = () => {
  return (
    <section id="store" className="py-20">
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
            Convenience <span className="text-primary">Store</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our wide selection of snacks, beverages, and essentials.
            Open 24/7 for your convenience.
          </motion.p>
        </div>

        {/* Store highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card p-6 rounded-lg mb-12 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <Utensils className="h-16 w-16 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Fresh Food & Essentials</h3>
              <p className="text-muted-foreground">
                Our convenience store offers a variety of fresh food options, drinks, and everyday essentials. 
                From made-to-order coffee and fresh sandwiches to last-minute groceries and automotive supplies, 
                we've got everything you need in one stop.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Featured Products Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-semibold mb-8"
          >
            Featured Products
          </motion.h3>

          <FeaturedProducts />
        </div>

        {/* Categories Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-8">Product Categories</h3>

          <Tabs defaultValue={categories[0].id} className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <CategoryProducts category={category} />
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Store note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center text-muted-foreground"
        >
          <p>
            Product availability may vary. Prices shown are approximate and subject to change.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConvenienceStoreSection; 