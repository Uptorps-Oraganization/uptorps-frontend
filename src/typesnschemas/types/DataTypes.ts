/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LucideIcon } from "lucide-react";
import type { Control, FieldErrors } from "react-hook-form";
import type { QuizCreationType } from "../schemas/QuizSchema";

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

export type AuthContextType = {
  user: {
    uuid: string;
    email: string;
  };
  isLoading: boolean;
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
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
  label: string;
  fieldname: string;
  fieldicon: React.ComponentType<IconProps>;
  register: any;
  placeholder: string;
  required?: boolean;
  errors: FieldErrors;
};

export type PassInputType = {
  label: string;
  fieldname: "password" | "confirmpassword";
  register: any;
  placeholder: string;
  required?: boolean;
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

export type SidebarAccountHeaderType = {
  theme: Theme;
  headerImgUrl: string;
  accountName: string;
  accountRole: string;
};

export type PageAccountHeaderType = {
  accountImgUrl: string;
  accountName: string;
  accountRole: string;
  notificationToggle: (state: boolean) => void;
};

export type UserDetailRowType = {
  profileImgUrl: string;
  userType: "admin" | "tutor" | "learner";
  activeStatus: "active" | "inactive";
  dateJoined: string;
  lastDateActive: string;
};

export type QuizConfigSelectionType = {
  selectionData?: string[];
  label: string;
  name: "difficulty" | "level" | "programme" | "course" | "timing" | "cost_type";
  control: Control<QuizCreationType, any, QuizCreationType>;
  placeholder?: string;
  configType?: "difficulty" | "level" | "programme" | "course";
};
