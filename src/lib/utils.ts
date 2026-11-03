import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatFigureAsRaw = (amount: number) => {
  const outputfigure = amount.toLocaleString("en-US");
  return outputfigure;
};

export const formatAmountToTwoDecimalPlaces = (amount: number) => {
  const outputfigure = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return outputfigure;
};

export const formatAmountWithAsCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    currencySign: "accounting",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatted = formatter.format(amount);
  return formatted.replace(/[A-Z₵GHC¢$€£]+/gi, "₵ ");
};
