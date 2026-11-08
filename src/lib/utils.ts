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

export const formatAmountWithCurrencySymbol = (amount: number) => {
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

export const displayShortDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = formatter.format(date);

  return formattedDate;
};

export const displayLongDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = formatter.format(date);

  return formattedDate;
};
