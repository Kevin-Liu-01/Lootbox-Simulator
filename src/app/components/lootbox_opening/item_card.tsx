import { Flex } from "@radix-ui/themes";
import { StarIcon } from "lucide-react";
import { rarityColors, Rarity } from "~/app/utils/types";

export default function ItemCard({
  item,
  index,
}: {
  item: { name: string; rarity: Rarity; image: string };
  index: number;
}) {
  // const [flash, setFlash] = useState(true); // Flash starts as true

  // useEffect(() => {
  //   const timer = setTimeout(() => setFlash(false), 500); // Hide flash after 500ms
  //   return () => clearTimeout(timer); // Cleanup timer on unmount
  // }, []); // Run only on component mount

  return (
    <>
      <Flex
        key={"itemcard" + item + index}
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
          src={item?.image}
          alt={item.name}
          className="h-16 w-16 rounded-xl bg-gradient-to-br from-gray-800/40 to-black/40 object-contain p-2 shadow-lg sm:h-32 sm:w-32 sm:rounded-md"
        />
        <p className="sm:text-md mt-4 text-center text-xs font-bold tracking-wide text-white drop-shadow-md">
          {item.name}
        </p>
        <div className="mt-3 flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-3 w-3 hover:rotate-6 sm:h-5 sm:w-5 ${
                i <
                (item.rarity === "legendary"
                  ? 5
                  : item.rarity === "mythical"
                    ? 4
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
        {/* Rarity Badge */}
        <div
          className={`absolute right-2 top-2 rounded-full border border-white/40 px-3 py-1 text-[0.5rem] font-bold text-white shadow-md sm:text-xs ${
            rarityColors[item.rarity]
          }`}
        >
          {item.rarity.toUpperCase()}
        </div>
      </Flex>
    </>
  );
}
