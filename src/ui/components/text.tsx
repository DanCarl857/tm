import type { ReactNode } from "react";

import { text, type TextVariants } from "./text.styles";

type AllowedElements = Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4" | "p" | "span">;

type ElementsByType = Record<NonNullable<TextVariants["type"]>, keyof AllowedElements>;

const elements: ElementsByType = {
  heading0: "h1",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  base: "p",
  small: "p",
  "extra-small": "p",
  baseWithClamp: "p",
};

type VariantProperties = Pick<TextVariants, "type">;

type NativeProperties<TElement extends keyof AllowedElements> = Omit<
  JSX.IntrinsicElements[TElement],
  "ref" | "children" | "tw"
>;

interface CustomProperties<TElement extends keyof AllowedElements> {
  as?: TElement;
  children: ReactNode;
}

type Properties<TElement extends keyof AllowedElements> = VariantProperties &
  NativeProperties<TElement> &
  CustomProperties<TElement>;

export function Text<TElement extends keyof AllowedElements>(properties: Properties<TElement>) {
  const { as, type = "base", className, ...nativeProperties } = properties;
  const Component = as ?? elements[type];

  return <Component className={text({ type, className })} {...nativeProperties} />;
}
