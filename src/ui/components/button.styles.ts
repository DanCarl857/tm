import { tv, type VariantProps } from "tailwind-variants";

export type ButtonVariants = VariantProps<typeof button>;

export const button = tv({
  base: [
    "rounded-full",
    "inline-flex transition-colors duration-300 flex-row items-center gap-1.5",
    "disabled:opacity-60",
    "disabled:cursor-not-allowed",
  ],
  variants: {
    tone: {
      black: [
        "bg-black-1",
        "border border-black-1",
        "text-surface",
        "flex justify-center items-center gap-x-2",
        "hover:enabled:bg-black-3",
        "disabled:bg-gray-7",
      ],
      primary: [
        "bg-primary-17",
        "border border-primary-17",
        "text-surface",
        "flex justify-center items-center gap-x-2",
        "hover:enabled:bg-primary-2",
        "disabled:bg-primary-5 disabled:border-primary-5",
      ],
      secondary: [
        "bg-secondary-2",
        "border border-secondary-2",
        "text-surface",
        "flex justify-center items-center gap-x-2",
        "hover:enabled:bg-secondary-3",
        "disabled:bg-error-1 disabled:border-error-1",
      ],
      outline: [
        "bg-transparent",
        "border border-black-1",
        "text-black-1",
        "flex justify-center items-center gap-x-2",
      ],
      transparent: [
        "bg-transparent",
        "text-primary-1",
        "border border-primary-1",
        "flex justify-center items-center gap-x-1 sm:gap-x-2",
        "disabled:bg-gray-7 border-gray-7",
      ],
      plain: [
        "bg-transparent",
        "border border-transparent",
        "text-primary-17",
        "disabled:text-gray-7",
        "flex justify-center items-center gap-x-2",
      ],
      green: [
        "bg-primary-1",
        "border border-primary-1",
        "text-surface",
        "flex justify-center items-center gap-x-2",
        "hover:enabled:bg-primary-3",
        "disabled:bg-gray-7",
      ],
      outlineGreen: [
        "bg-transparent",
        "border border-primary-1",
        "text-primary-1",
        "flex justify-center items-center gap-x-2",
        "hover:enabled:bg-primary-1/10",
        "disabled:bg-gray-7",
      ],
    },
    size: {
      default: "min-h-10 px-4 py-2",
      sm: "min-h-9 px-3 text-sm",
      lg: "min-h-11 px-8",
      icon: "h-10 w-10",
    },
  },
});
