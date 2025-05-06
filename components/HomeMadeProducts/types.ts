import { ReactNode } from "react";

export type Product = {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  features: { icon: ReactNode; text: string }[];
  price: string;
  unitPrice: string;
  deliveryDate: string;
  shippingLocation: string;
};
