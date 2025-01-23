import { ComponentType } from "react";

import { IconProperties } from "@/ui/primitives/types";

export function fromIcon(Component: ComponentType<{ color?: string }>) {
  return function Icon(properties: IconProperties) {
    return <Component {...properties} color="currentColor" />;
  };
}
