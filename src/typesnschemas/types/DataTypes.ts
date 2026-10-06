import type { LucideIcon } from "lucide-react";

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
