import { Separator } from "@/components/ui/separator";
import { MapPin, ShoppingCart, Sparkle, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import type { Product } from "./types";

const SingleHomeMadeProduct: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition duration-300 hover:shadow-lg hover:scale-105 flex flex-col h-full">
      <Image
        width={200}
        height={200}
        className="h-48 w-full object-cover object-center"
        src={product.image}
        alt={product.title}
      />

      <div className="p-3.5 flex flex-col justify-between flex-grow space-y-2">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold leading-tight text-gray-900 dark:text-white hover:text-red-800 dark:hover:text-red-400">
            {product.title}
          </h4>
          <Separator />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <Button variant="link" className="text-muted-foreground px-0">Details</Button>
            <Separator orientation="vertical" className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600" />
            <Button variant="link" className="text-muted-foreground px-0">Link</Button>
            <Separator orientation="vertical" className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-1">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4].map((_, i) => (
                <Sparkle key={i} className="w-4 h-4" />
              ))}
            </div>
            <span className="text-[10px] text-gray-600 dark:text-gray-300">
              {product.rating} out of 5 stars · {product.reviews} reviews
            </span>
          </div>

          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200">
              {feature.icon}
              <p>{feature.text}</p>
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900 dark:text-white">{product.price}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{product.unitPrice}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-nowrap flex-wrap gap-4 py-2">
          <div className="flex items-center gap-2 text-[10px] text-gray-700 dark:text-gray-300">
            <Truck className="w-4 h-4 shrink-0 text-gray-700 dark:text-gray-300" />
            <p>
              Delivery
              <span className="font-medium text-gray-800 dark:text-white ml-1">
                {product.deliveryDate}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-purple-800 dark:text-purple-300">
            <MapPin className="w-4 h-4 shrink-0 text-purple-800 dark:text-purple-300" />
            <p>
              Ships to
              <span className="font-medium text-gray-800 dark:text-white ml-1">
                {product.shippingLocation}
              </span>
            </p>
          </div>
        </div>

        <button className="flex gap-2 w-fit mr-auto bg-black dark:bg-teal-700 hover:bg-teal-700 dark:hover:bg-teal-600 text-white py-2 px-4 rounded-lg transition duration-300">
          <ShoppingCart className="w-5 h-5 shrink-0" /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleHomeMadeProduct;
