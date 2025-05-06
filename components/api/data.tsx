import { cosmeticsImage } from "@/assets";
import {
  Droplet,
  FlaskConical,
  Package
} from "lucide-react";
import { StaticImageData } from "next/image";
import React from "react";

// Define the type for each product
type ProductFeature = {
  icon: React.ReactNode;
  text: string;
};

type Product = {
  id: number;
  title: string;
  image: StaticImageData;
  features: ProductFeature[]; // ✅ Add this line
  price: string;
  unitPrice: string;
  deliveryDate: string;
  shippingLocation: string;
  rating: number;
  reviews: number;
};
// title will be set within 10 words
export const products: Product[] = [
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 2,
    title: "Vitamin C Glow Serum with Hyaluronic Acid & Turmeric",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Brightens dull skin and evens tone using natural botanicals and Vitamin C",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "1 oz · Dropper Bottle",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "5K+ bought in past month",
      },
    ],
    price: "$24.50",
    unitPrice: "($24.50 / oz)",
    deliveryDate: "Wed, May 15",
    shippingLocation: "USA",
    rating: 4.7,
    reviews: 1021,
  },
  {
    id: 3,
    title: "Herbal Clay Face Mask - Detox & Pore Minimizer",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Made with Bentonite clay, green tea, and charcoal for deep detox",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "4 oz · Jar",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "2K+ bought in past month",
      },
    ],
    price: "$18.00",
    unitPrice: "($4.50 / oz)",
    deliveryDate: "Mon, May 12",
    shippingLocation: "India",
    rating: 4.6,
    reviews: 873,
  },
  {
    id: 4,
    title: "Gentle Foaming Cleanser for Sensitive Skin",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Fragrance-free and soap-free formula with aloe vera and ceramides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "6.7 fl oz · Pump Bottle",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "8K+ bought in past month",
      },
    ],
    price: "$12.99",
    unitPrice: "($1.94 / fl oz)",
    deliveryDate: "Fri, May 10",
    shippingLocation: "Canada",
    rating: 4.5,
    reviews: 675,
  },{
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },{
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },{
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },{
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
  {
    id: 1,
    title:
      "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />,
        text:
          "Hydrating with Snail Mucin, Centella Asiatica, Niacinamide, Peptides",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Eucalyptus · 100 Count (Pack of 1)",
      },
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "9K+ bought in past month",
      },
    ],
    price: "$59.95",
    unitPrice: "($0.60 / Count)",
    deliveryDate: "Tue, May 13",
    shippingLocation: "Bangladesh",
    rating: 4.4,
    reviews: 544,
  },
];
