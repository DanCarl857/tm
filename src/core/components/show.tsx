import type { ReactNode } from "react";

interface Properties<TValue> {
  children: ReactNode | ((item: NonNullable<TValue>) => ReactNode);
  fallback?: ReactNode;
  when: TValue | false | null | undefined;
}

// Component adapted from SolidJS: https://www.solidjs.com/docs/latest/api#show
export function Show<TValue>(properties: Properties<TValue>) {
  const { when, fallback, children } = properties;
  if (!when) return <>{fallback}</>;
  if (typeof children === "function") return <>{children(when)}</>;
  return <>{children}</>;
}
