"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import { products } from "../api/data";
import { Button } from "../ui/button";
import SingleHomeMadeProduct from "../HomeMadeProducts/SingleHomeMadeProduct";

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Feature = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const loadMoreCount = 4;
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const visibleProducts = products.slice(0, visibleCount);
  const allLoaded = visibleCount >= products.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + loadMoreCount);

    // Prevent scroll jump/focus
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  };

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

        <div className="mt-12.5 lg:mt-15 xl:mt-20 antialiased text-gray-900 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={productVariants}
              >
                <SingleHomeMadeProduct product={product} />
              </motion.div>
            ))}
          </div>

          {!allLoaded && (
            <div className="text-center mt-6">
              <Button ref={buttonRef} onClick={handleLoadMore}>
                See More
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
