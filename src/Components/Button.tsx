import { ReactNode } from "react";

type Variants = "primary" | "secondary";

export interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick: () => void;
}

const variantStyles = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-400 text-purple-600"
};

const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg"
};

export const Button = ({
    variant,
    size,
    text,
    startIcon,
    endIcon,
    onClick
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${variantStyles[variant]} ${sizeStyles[size]} rounded`}
        >
            {startIcon}
            {text}
            {endIcon}
        </button>
    );
};