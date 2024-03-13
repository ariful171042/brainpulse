import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleError = (error: unknown) => {
  console.error(error);
  if (error instanceof Error) {
    throw error;
  } else {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};
