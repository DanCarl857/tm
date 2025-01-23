import { icons, type IconType } from "./icons";
import { IconProperties } from "../types";

interface CustomProperties {
  icon: IconType;
  style?: React.CSSProperties;
}

interface StockLogoProperties {
  icon: string;
  style?: React.CSSProperties;
}
type Properties = IconProperties & CustomProperties & StockLogoProperties;

export function Icon({ icon, ...properties }: Properties) {
  const Component = icons[icon];
  return <Component {...properties} />;
}

