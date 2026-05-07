import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  variant?:
    | "primary"
    | "white"
    | "secondary"
    | "outline"
    | "teal"
    | "teal-outline";
  iconPosition?: "left" | "right";
  height?: string;
}
