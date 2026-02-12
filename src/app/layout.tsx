import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lootboxsimulator.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lootbox Simulator – Open Crates, Collect Rare Items & Test Your Luck",
    template: "%s | Lootbox Simulator",
  },
  description:
    "Experience the thrill of opening lootboxes without spending a dime. Unbox crates, summon portals, reveal runes, and collect rare items across multiple game-inspired lootbox types. Quantum Cache, Aether Gate, Chromatic Case, Star Drops, and more await!",
  keywords: [
    "lootbox",
    "loot box",
    "gacha",
    "simulator",
    "game",
    "crate opening",
    "item collection",
    "collector",
    "free",
    "browser game",
    "loot crate",
    "gacha game",
    "RNG",
  ],
  authors: [{ name: "Lootbox Simulator" }],
  creator: "Lootbox Simulator",
  publisher: "Lootbox Simulator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Lootbox Simulator – Open Crates, Collect Rare Items & Test Your Luck",
    description:
      "Experience the thrill of opening lootboxes without spending a dime. Unbox crates, summon portals, reveal runes, and collect rare items across multiple game-inspired lootbox types.",
    siteName: "Lootbox Simulator",
    images: [
      {
        url: "/images/gameplay.png",
        width: 3066,
        height: 1604,
        alt: "Lootbox Simulator – Opening lootboxes and collecting rare items",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lootbox Simulator – Open Crates, Collect Rare Items & Test Your Luck",
    description:
      "Experience the thrill of opening lootboxes without spending a dime. Unbox crates, summon portals, reveal runes, and collect rare items.",
    images: ["/images/gameplay.png"],
    creator: "@lootboxsimulator",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  applicationName: "Lootbox Simulator",
  category: "games",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-h-screen bg-[#0f0d1a] antialiased">
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
