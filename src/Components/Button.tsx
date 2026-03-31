import { ReactElement } from "react";

interface ButtonInterface {
  title: string;
  size: "lg" | "md" | "sm";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant: "primary" | "secondary";
}

const sizeStyles = {
  lg: "px-8 py-4 text-xl rounded-xl",
  md: "px-4 py-2 text-md rounded-md",
  sm: "px-2 py-1 text-sm rounded-sm",
};

const variantStyle = {
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-purple-100 text-purple-600 hover:bg-purple-200",
};

export function Button({
  title,
  size,
  startIcon,
  endIcon,
  variant,
}: ButtonInterface) {
  return (
    <button
      className={`${sizeStyles[size]} ${variantStyle[variant]} flex items-center gap-2`}
    >
      {startIcon}
      <span>{title}</span>
      {endIcon}
    </button>
  );
}