import { useState, useEffect } from "react";
import { StarIcon } from "lucide-react";

const rarityColors: Record<Rarity, string> = {
  common: "bg-gradient-to-r from-gray-600 to-gray-500",
  rare: "bg-gradient-to-r from-blue-600 to-blue-500",
  "super rare": "bg-gradient-to-r from-purple-600 to-purple-500",
  epic: "bg-gradient-to-r from-pink-600 to-pink-500",
  mythical: "bg-gradient-to-r from-red-600 to-red-500",
  legendary: "bg-gradient-to-r from-yellow-600 to-yellow-500",
};

export default function ItemCard({ item, index }: { item: any; index: any }) {
  // const [flash, setFlash] = useState(true); // Flash starts as true

  // useEffect(() => {
  //   const timer = setTimeout(() => setFlash(false), 500); // Hide flash after 500ms
  //   return () => clearTimeout(timer); // Cleanup timer on unmount
  // }, []); // Run only on component mount

  return (
    <>
      <div
        key={"itemcard" + index}
        className={`animate-fadeIn relative flex flex-col items-center rounded-2xl p-3 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)] ${
          rarityColors[item.rarity]
        } border border-white/10 bg-gradient-to-t from-gray-900/60 to-black/70`}
      >
        <div
          className={`absolute inset-0 -z-10 animate-pulse rounded-2xl opacity-20 ${
            rarityColors[item.rarity]
          }`}
        />
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-24 rounded-md bg-gradient-to-br from-gray-800 to-black object-cover shadow-lg transition-transform duration-300 hover:scale-110"
        />
        <p className="text-md mt-4 text-center font-bold tracking-wide text-white drop-shadow-md">
          {item.name}
        </p>
        <div className="mt-3 flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 hover:rotate-6 ${
                i <
                (item.rarity === "legendary"
                  ? 5
                  : item.rarity === "mythical"
                    ? 4 // Mythical gets 4.5 stars
                    : item.rarity === "epic"
                      ? 3
                      : item.rarity === "super rare"
                        ? 2
                        : item.rarity === "rare"
                          ? 1
                          : 0)
                  ? "text-yellow-400 drop-shadow-[0_0_5px_rgba(255,255,0,0.8)]"
                  : "text-gray-800"
              }`}
            />
          ))}
        </div>
        <div
          className={`absolute right-2 top-2 rounded-full border border-white/40 px-3 py-1 text-xs font-bold text-white shadow-md ${
            rarityColors[item.rarity]
          }`}
        >
          {item.rarity.toUpperCase()}
        </div>
      </div>
    </>
  );
}
