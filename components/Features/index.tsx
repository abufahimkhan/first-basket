"use client";

import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import { products } from "../api/data";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import SingleHomeMadeProduct from "../HomeMadeProducts/SingleHomeMadeProduct";

const categories = ["All", "Beauty", "Grocery", "Homemade"];

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Feature = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory.toLowerCase());

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const allLoaded = visibleCount >= filteredProducts.length;

  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "OUR PRODUCTS",
            subtitle: "Core Features of Our Homemade Goods",
            description: `Browse our unique selection of high-quality, handmade items carefully crafted with love and natural ingredients.`,
          }}
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mt-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === activeCategory ? "default" : "outline"}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(8);
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={productVariants}
              viewport={{ once: true }}
            >
              <SingleHomeMadeProduct product={product} />
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {!allLoaded && (
          <div className="text-center mt-6">
            <Button onClick={() => setVisibleCount((prev) => prev + 4)}>
              See More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Feature;
