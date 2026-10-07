/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LucideIcon } from "lucide-react";
import type { FieldErrors } from "react-hook-form";

export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export type IconProps = {
  size?: number;
  color?: string;
  duration?: number;
  isAnimated?: boolean;
  className?: string;
};

export type AccountSelectType = {
  control: any;
  errors: FieldErrors;
};

export type TextInputType = {
  type: string;
  fieldname: string;
  fieldicon: React.ComponentType<IconProps>;
  register: any;
  placeholder: string;
  errors: FieldErrors;
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
