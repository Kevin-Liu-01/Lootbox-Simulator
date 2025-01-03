import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "Lootbox Simulator",
  description: "Try your luck at opening lootboxes!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Theme>{children} </Theme>
      </body>
    </html>
  );
}
