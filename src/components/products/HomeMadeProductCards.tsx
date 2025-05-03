'use client'

import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  ShoppingCart,
  Sparkle,
  Truck
} from "lucide-react";
import Image from "next/image";
import React, {  useState } from "react";
import { products } from "../api/data";
import { Button } from "../ui/button";

const HomeMadeProductCards: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const loadMoreCount = 4;

  const visibleProducts = products.slice(0, visibleCount);
  const allLoaded = visibleCount >= products.length;

  return (
    <div className="antialiased text-gray-900 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-2xl transform transition duration-300 hover:shadow-lg hover:scale-105 flex flex-col h-full"
          >
            <Image
              width={200}
              height={200}
              className="h-48 w-full object-cover object-center"
              src={product.image}
              alt={product.title}
            />

            <div className="p-3.5 flex flex-col justify-between flex-grow space-y-2">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold leading-tight hover:text-red-800">
                  {product.title}
                </h4>
                <Separator />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <Button variant="link" className="text-[#636e72] px-0">
                    Details
                  </Button>
                  <Separator
                    orientation="vertical"
                    className="w-0.5 h-4 bg-gray-300"
                  />
                  <Button variant="link" className="text-[#636e72] px-0">
                    Link
                  </Button>
                  <Separator
                    orientation="vertical"
                    className="w-0.5 h-4 bg-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-1">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4].map((_, i) => (
                      <Sparkle key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-600">
                    {product.rating} out of 5 stars · {product.reviews} reviews
                  </span>
                </div>
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    {feature.icon}
                    <p>{feature.text}</p>
                  </div>
                ))}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold ">{product.price}</span>
                  <span className="text-sm text-[#636e72]">
                    {product.unitPrice}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-nowrap flex-wrap gap-4 py-2">
                <div className="flex items-center gap-2 text-[10px] text-[#647263]">
                  <Truck className="w-4 h-4 shrink-0" style={{ color: "#636e72" }} />
                  <p>
                    Delivery
                    <span className="font-medium text-gray-800 ml-1">
                      {product.deliveryDate}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-[#581845]">
                  <MapPin className="w-4 h-4 shrink-0" style={{ color: "#581845" }} />
                  <p>
                    Ships to
                    <span className="font-medium text-gray-800 ml-1">
                      {product.shippingLocation}
                    </span>
                  </p>
                </div>
              </div>

              <button className="flex gap-2 w-fit mr-auto bg-black hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition duration-300">
                <ShoppingCart className="w-5 h-5 shrink-0" /> Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {!allLoaded && (
        <div className="text-center mt-6">
          <Button onClick={() => setVisibleCount((prev) => prev + loadMoreCount)}>
            See More
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomeMadeProductCards;
