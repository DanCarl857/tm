import type { ReactNode } from "react";
import { forwardRef } from "react";

import { Show } from "@/core/components/show";
import { Icon, type IconType } from "@/ui/primitives/icon";
import cn from "classnames";

import { button, type ButtonVariants } from "./button.styles";

type VariantProperties = Partial<Pick<ButtonVariants, "tone" | "size">>;

type NativeProperties = Omit<JSX.IntrinsicElements["button"], "className" | "ref" | "children">;

interface CustomProperties {
  children?: ReactNode;
  loading?: boolean;
  icon?: IconType;
  className?: string;
}

type Properties = VariantProperties & NativeProperties & CustomProperties;

export const Button = forwardRef<HTMLButtonElement, Properties>((properties, ref) => {
  const {
    tone = "outlineGreen",
    size = "default",
    type = "button",
    icon,
    disabled = false,
    loading = false,
    children,
    className,
    ...nativeProperties
  } = properties;

  return (
    <button
      ref={ref}
      className={cn(button({ tone, size }), className)}
      disabled={disabled || loading}
      type={type ?? "button"}
      {...nativeProperties}
    >
      <Show fallback={<Icon className="animate-spin" icon="loader" size={16} />} when={!loading}>
        <Show when={icon}>{(iconType) => <Icon icon={iconType} size={16} />}</Show>
      </Show>
      <Show when={children}>{children}</Show>
    </button>
  );
});
Button.displayName = "Button";
