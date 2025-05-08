import { cosmeticsImage } from "@/assets";
import { Droplet, FlaskConical, Package, Sparkle } from "lucide-react";
import { StaticImageData } from "next/image";
import React from "react";

// Define the type for each product
type ProductFeature = {
  icon: React.ReactNode;
  text: string;
};

export type Product = {
  id: number;
  title: string;
  image: StaticImageData | string; // ✅ Allow StaticImageData or string
  features: ProductFeature[];
  price: string;
  unitPrice: string;
  deliveryDate: string;
  shippingLocation: string;
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Korean Skincare Anti-Aging, Dark Spot Wrinkle Minimizing Toner",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: (
          <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />
        ),
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
        icon: (
          <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />
        ),
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
        icon: (
          <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />
        ),
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
        icon: (
          <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />
        ),
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
  },
  {
    id: 5,
    title: "Handmade Soap",
    image: cosmeticsImage.nailPolish,
    features: [
      { icon: <Sparkle className="w-4 h-4" />, text: "Organic Ingredients" },
      { icon: <Sparkle className="w-4 h-4" />, text: "Scented with Lavender" },
    ],
    price: "$12",
    unitPrice: "$4/oz",
    deliveryDate: "May 10",
    shippingLocation: "USA",
    rating: 4.5,
    reviews: 34,
  },
  {
    id: 6,
    title: "Beeswax Candles",
    image: cosmeticsImage.nailPolish,
    features: [
      { icon: <Sparkle className="w-4 h-4" />, text: "Slow-burning" },
      { icon: <Sparkle className="w-4 h-4" />, text: "Natural fragrance" },
    ],
    price: "$18",
    unitPrice: "$6/each",
    deliveryDate: "May 12",
    shippingLocation: "Canada",
    rating: 4.8,
    reviews: 58,
  },
  {
    id: 7,
    title: "Knitted Scarf",
    image: cosmeticsImage.nailPolish,
    features: [
      { icon: <Sparkle className="w-4 h-4" />, text: "Soft wool blend" },
      { icon: <Sparkle className="w-4 h-4" />, text: "Hand-stitched" },
    ],
    price: "$30",
    unitPrice: "$30/item",
    deliveryDate: "May 14",
    shippingLocation: "UK",
    rating: 4.2,
    reviews: 21,
  },
  {
    id: 8,
    title: "Ceramic Mug",
    image: cosmeticsImage.nailPolish,
    features: [
      { icon: <Sparkle className="w-4 h-4" />, text: "Microwave safe" },
      { icon: <Sparkle className="w-4 h-4" />, text: "Unique glaze pattern" },
    ],
    price: "$20",
    unitPrice: "$20/pc",
    deliveryDate: "May 11",
    shippingLocation: "USA",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 9,
    title: "Leather Journal",
    image: cosmeticsImage.nailPolish,
    features: [
      { icon: <Sparkle className="w-4 h-4" />, text: "Recycled paper" },
      { icon: <Sparkle className="w-4 h-4" />, text: "Hand-bound cover" },
    ],
    price: "$35",
    unitPrice: "$35/book",
    deliveryDate: "May 13",
    shippingLocation: "Germany",
    rating: 4.9,
    reviews: 102,
  },
  {
    id: 10,
    title: "Macrame Plant Hanger",
    image: cosmeticsImage.nailPolish,
    features: [
      { icon: <Sparkle className="w-4 h-4" />, text: "100% cotton rope" },
      { icon: <Sparkle className="w-4 h-4" />, text: "Supports all pot sizes" },
    ],
    price: "$22",
    unitPrice: "$22/set",
    deliveryDate: "May 16",
    shippingLocation: "Australia",
    rating: 4.4,
    reviews: 47,
  },
  {
    id: 11,
    title: "Homemade Jam Set",
    image: cosmeticsImage.nailPolish,
    features: [
      { icon: <Sparkle className="w-4 h-4" />, text: "No preservatives" },
      { icon: <Sparkle className="w-4 h-4" />, text: "3 flavors included" },
    ],
    price: "$25",
    unitPrice: "$8/jar",
    deliveryDate: "May 15",
    shippingLocation: "France",
    rating: 4.6,
    reviews: 66,
  },
  {
    id: 12,
    title: "Wooden Cutting Board",
    image: cosmeticsImage.nailPolish,
    features: [
      { icon: <Sparkle className="w-4 h-4" />, text: "Bamboo material" },
      { icon: <Sparkle className="w-4 h-4" />, text: "Easy to clean" },
    ],
    price: "$28",
    unitPrice: "$28/each",
    deliveryDate: "May 18",
    shippingLocation: "Italy",
    rating: 4.3,
    reviews: 39,
  },
  {
    id: 13,
    title: "Soothing Aloe Vera Gel",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <Droplet className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "Cools and hydrates sunburned skin",
      },
      {
        icon: (
          <FlaskConical className="w-4 h-4 mt-[2px] shrink-0 text-pink-500" />
        ),
        text: "Pure Aloe Extract · No added fragrance",
      },
      {
        icon: <Package className="w-4 h-4 mt-[2px] shrink-0" />,
        text: "8 fl oz · Tube",
      },
    ],
    price: "$10.99",
    unitPrice: "($1.37 / fl oz)",
    deliveryDate: "May 16",
    shippingLocation: "USA",
    rating: 4.5,
    reviews: 211,
  },
  {
    id: 14,
    title: "Herbal Lip Balm 4-Pack",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <Sparkle className="w-4 h-4" />,
        text: "Infused with beeswax and peppermint",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "4 Tubes · Travel Friendly",
      },
      {
        icon: <Droplet className="w-4 h-4" />,
        text: "Long-lasting moisture",
      },
    ],
    price: "$8.99",
    unitPrice: "($2.25 / tube)",
    deliveryDate: "May 17",
    shippingLocation: "Canada",
    rating: 4.6,
    reviews: 142,
  },
  {
    id: 15,
    title: "Aromatherapy Essential Oil Set",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <Sparkle className="w-4 h-4" />,
        text: "Includes Lavender, Eucalyptus, Lemon, Tea Tree",
      },
      {
        icon: <FlaskConical className="w-4 h-4 text-pink-500" />,
        text: "Steam-distilled · 10ml each",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Pack of 4",
      },
    ],
    price: "$22.00",
    unitPrice: "($5.50 / bottle)",
    deliveryDate: "May 19",
    shippingLocation: "UK",
    rating: 4.8,
    reviews: 310,
  },
  {
    id: 16,
    title: "Reusable Cotton Rounds",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <Droplet className="w-4 h-4" />,
        text: "Machine washable and eco-friendly",
      },
      {
        icon: <Sparkle className="w-4 h-4" />,
        text: "Soft bamboo cotton material",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Includes 20 rounds & laundry bag",
      },
    ],
    price: "$14.99",
    unitPrice: "($0.75 / round)",
    deliveryDate: "May 20",
    shippingLocation: "Germany",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 17,
    title: "Mini Jade Roller & Gua Sha Set",
    image: cosmeticsImage.nailPolish,
    features: [
      {
        icon: <Sparkle className="w-4 h-4" />,
        text: "Reduces puffiness and improves circulation",
      },
      {
        icon: <Droplet className="w-4 h-4" />,
        text: "Natural jade stone",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Includes pouch for travel",
      },
    ],
    price: "$16.50",
    unitPrice: "$16.50/set",
    deliveryDate: "May 21",
    shippingLocation: "Japan",
    rating: 4.3,
    reviews: 76,
  },
];
