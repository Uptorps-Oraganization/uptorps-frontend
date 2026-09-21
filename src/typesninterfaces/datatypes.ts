import type { LucideIcon } from "lucide-react";

export type Citizen = {
  id: string;
  name: string;
  age: string;
  address: string;
  occupation: string;
  phone: string;
  country: string;
};

export type FeatureDataType = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TestimonialDataType = {
  statement: string;
  user_name: string;
  user_type: string;
  ratings: number;
};
