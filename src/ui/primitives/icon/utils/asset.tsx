/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from "next/dynamic";
import Image from "next/image";

import { IconProperties } from "@/ui/primitives/types";

export function fromAsset(asset: () => Promise<{ default: string }>) {
  return dynamic(async () => {
    const { default: assetSource } = await asset();
    return function Icon({ size, fill, ...properties }: IconProperties) {
      return <Image {...properties} alt="icon" height={Number(size)} src={assetSource} width={Number(size)} />;
    };
  });
}
