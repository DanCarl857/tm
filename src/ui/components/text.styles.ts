import { tv, type VariantProps } from "tailwind-variants";

export type TextVariants = VariantProps<typeof text>;

export const text = tv({
  variants: {
    type: {
      heading0: ["text-heading0 leading-heading1"],
      heading1: ["text-heading1 leading-heading1"],
      heading2: ["text-heading2 leading-heading2"],
      heading3: ["text-heading3 leading-heading3"],
      heading4: ["text-heading4 leading-heading4"],
      base: ["text-base leading-base"],
      small: ["text-small leading-small"],
      "extra-small": ["text-extra-small leading-extra-small"],
      baseWithClamp: ["line-clamp-2 text-base leading-base"],
    },
  },
});
