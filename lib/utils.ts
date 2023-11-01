import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// cn funciton used to merge classes in TailwindCSS!

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
