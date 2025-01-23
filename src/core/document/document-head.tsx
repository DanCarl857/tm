import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BAO Tech",
  viewport: "width=device-width, initial-scale=1.0",
};

export function DocumentHead() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>BAO Tech</title>
    </>
  );
}
