import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateString(input: string, maxLength: number = 100): string {
  return input.length > maxLength ? input.slice(0, maxLength) + "..." : input;
}