import type { ComponentType } from "react";

import { fromIcon, fromAsset } from "./utils";

import { type IconProperties } from "../types";

import { CgSpinner } from "react-icons/cg";
import { FiTrash } from "react-icons/fi";

type Icons = Record<string, ComponentType<IconProperties>>;

function defineIcons<const TIcons extends Icons>(icons: TIcons) {
  return icons;
}

export type IconType = keyof typeof icons;

export const icons = defineIcons({
  loader: fromIcon(CgSpinner),
  trash: fromIcon(FiTrash),
  eyeOff: fromAsset(() => import("./assets/Eye-off.svg")),
  eyeOn: fromAsset(() => import("./assets/Eye-on.svg")),
  eyeOffWhite: fromAsset(() => import("./assets/Eye-off-white.svg")),
  eyeOnWhite: fromAsset(() => import("./assets/Eye-on-white.svg")),
  checked: fromAsset(() => import("./assets/checked.svg")),
});
