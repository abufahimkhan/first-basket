import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type Product = {
  id: number;
  title: string;
  image: StaticImageData | string;
  rating: number;
  reviews: number;
  features: { icon: ReactNode; text: string }[];
  price: string;
  unitPrice: string;
  deliveryDate: string;
  shippingLocation: string;
};

