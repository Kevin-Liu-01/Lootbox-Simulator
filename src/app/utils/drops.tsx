import { v4 as uuidv4 } from "uuid";
import { LootBox } from "./types";

export const availableLootBoxes: LootBox[] = [
  {
    id: uuidv4(),
    name: "Quantum Cache",
    game: "Chrono Nexus",
    type: "crate",
    background: "bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600",
    backgroundImage: "/images/backgrounds/normal-lootbox-bg.jpg",
    image: "/images/lootboxes/normal-lootbox.png",
    drops: [
      {
        name: "Temporal Fragment",
        rarity: "common",
        chance: 15,
        image: "/images/drops/transparentshard.webp",
        description:
          "A fragment of time itself, this common item is said to be a piece of history torn from the fabric of reality.",
      },
      {
        name: "Quantum Drive",
        rarity: "common",
        chance: 13,
        image: "/images/drops/quantumdrive.png",
        description:
          "A compact device capable of distorting the fabric of space-time, used for high-speed interdimensional travel.",
      },
      {
        name: "Dilation Helmet",
        rarity: "common",
        chance: 12,
        image: "/images/drops/dilationhelmet.png",
        description:
          "A helmet designed to protect the wearer from time dilation effects, often used in high-speed temporal environments.",
      },
      {
        name: "Redshift Scope",
        rarity: "rare",
        chance: 10,
        image: "/images/drops/thermalredshift.webp",
        description:
          "A rare scope that uses redshift technology to see into distant galaxies and observe the effects of cosmic expansion.",
      },
      {
        name: "Singularity Stabilizer",
        rarity: "rare",
        chance: 10,
        image: "/images/drops/singularitystabilizer.png",
        description:
          "A stabilizer used to contain and regulate the power of singularities, an essential tool for safe space travel.",
      },
      {
        name: "Chrono Gear",
        rarity: "rare",
        chance: 6,
        image: "/images/drops/chronogear.webp",
        description:
          "A rare gear that manipulates time in localized fields, granting the ability to slow or speed up moments.",
      },
      {
        name: "Rare Circuitry",
        rarity: "rare",
        chance: 6,
        image: "/images/drops/circuitry.png",
        description:
          "Circuitry infused with quantum energy, a rare find that can be used to power advanced time-manipulating devices.",
      },
      {
        name: "Warp Drive",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/warpdrive.png",
        description:
          "A super rare drive capable of warping space-time to enable faster-than-light travel across vast distances.",
      },
      {
        name: "Void Energy Capsule",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/voidenergycapsule.png",
        description:
          "A capsule containing concentrated void energy, a powerful substance capable of bending reality.",
      },
      {
        name: "Celestial Compass",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/celestialcompass.png",
        description:
          "A celestial compass that guides the user through uncharted galaxies, pointing the way to hidden realms.",
      },
      {
        name: "Eclipse Saber",
        rarity: "epic",
        chance: 2.25,
        image: "/images/drops/eclipsesaber.webp",
        description:
          "A blade forged during an eclipse, with the ability to harness and manipulate both light and dark energies.",
      },
      {
        name: "Timekeeper Artifact",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/timekeeper.png",
        description:
          "An artifact said to be from a timekeeper's vault, granting its wielder control over moments and time itself.",
      },
      {
        name: "Nova Reactor",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/novareactor.png",
        description:
          "A powerful reactor capable of generating nova-level explosions, used in the most advanced energy systems.",
      },
      {
        name: "Eternal Nexus Core",
        rarity: "mythical",
        chance: 1.5,
        image: "/images/drops/nexuscore.webp",
        description:
          "A mythical core that serves as the heart of the eternal nexus, a place where time and space converge.",
      },
      {
        name: "Stellar Forge Core",
        rarity: "mythical",
        chance: 1.5,
        image: "/images/drops/stellarforge.png",
        description:
          "A core forged in the heart of a dying star, containing the immense power required to create whole galaxies.",
      },
      {
        name: "Infinity Tesseract",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/infinitytessaract.webp",
        description:
          "A legendary tesseract that can hold infinite dimensions, granting its user access to parallel universes.",
      },
      {
        name: "Dyson Sphere",
        rarity: "legendary",
        chance: 0.25,
        image: "/images/drops/dysonsphere.png",
        description:
          "A monumental structure that encompasses an entire star, harnessing its energy to power civilizations.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Star Drop",
    game: "Galaxy Adventures",
    type: "starrdrop",
    background: "bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500",
    backgroundImage: "/images/backgrounds/starr.jpeg",
    image: "/images/lootboxes/starr-drop.webp",
    drops: [
      {
        name: "Stardust Pebble",
        rarity: "common",
        chance: 18,
        image: "/images/drops/stardust.png",
        description:
          "A small yet shimmering pebble containing the essence of stardust, a common yet mesmerizing find.",
      },
      {
        name: "Solar Flare Core",
        rarity: "common",
        chance: 17,
        image: "/images/drops/solarflarecore.png",
        description:
          "A glowing core, once ignited in the heart of a solar flare, now harnessed as a powerful energy source.",
      },
      {
        name: "Asteroid Core",
        rarity: "rare",
        chance: 12,
        image: "/images/drops/asteroid.webp",
        description:
          "A rare fragment from a distant asteroid, imbued with cosmic energy and rock-solid durability.",
      },
      {
        name: "Lunar Fragment",
        rarity: "rare",
        chance: 12,
        image: "/images/drops/lunarfragment.png",
        description:
          "A piece of the moon, mysterious and ancient, said to hold secrets of the lunar surface.",
      },
      {
        name: "Galactic Particle",
        rarity: "rare",
        chance: 12,
        image: "/images/drops/galacticparticle.png",
        description:
          "A rare particle that floats through space, carrying the energy of the entire galaxy within.",
      },
      {
        name: "Nebula Crystal",
        rarity: "super rare",
        chance: 7,
        image: "/images/drops/nebulacrystal.png",
        description:
          "A vibrant crystal from a nebula, glimmering with otherworldly light, known for its ability to channel energy.",
      },
      {
        name: "Eclipse Lens",
        rarity: "super rare",
        chance: 7,
        image: "/images/drops/eclipselens.png",
        description:
          "A rare lens that captures the energy of eclipses, said to have mystical properties.",
      },
      {
        name: "Cosmic Relic",
        rarity: "epic",
        chance: 5,
        image: "/images/drops/cosmicrelic.webp",
        description:
          "An ancient relic from the cosmos, containing powers from civilizations long gone, cherished by explorers.",
      },
      {
        name: "Gravity Wave Orb",
        rarity: "epic",
        chance: 5,
        image: "/images/drops/gravitywaveorb.png",
        description:
          "An orb pulsating with gravity waves, it has the ability to distort space-time and alter gravitational fields.",
      },
      {
        name: "Black Hole Shard",
        rarity: "mythical",
        chance: 2.25,
        image: "/images/drops/blackholeshard.webp",
        description:
          "A shard from a black hole, containing unimaginable density and the power to bend the very fabric of space.",
      },
      {
        name: "Starforge Ingot",
        rarity: "mythical",
        chance: 1.25,
        image: "/images/drops/starforgeingot.webp",
        description:
          "An ingot forged in the heart of a star, made of a material stronger than any found on Earth.",
      },
      {
        name: "Galactic Crown",
        rarity: "legendary",
        chance: 0.75,
        image: "/images/drops/crown.png",
        description:
          "A crown worn by the ruler of an ancient galaxy, now a symbol of unparalleled cosmic power.",
      },
      {
        name: "Universal Keystone",
        rarity: "legendary",
        chance: 0.75,
        image: "/images/drops/universalkeystone.webp",
        description:
          "A powerful keystone that can unlock the secrets of the universe, said to control the flow of time and space.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Mega Crystal",
    game: "Transformers",
    type: "summon",
    background: "bg-gradient-to-r from-red-600 via-orange-500 to-orange-600",
    backgroundImage: "/images/backgrounds/summoner_crystal.avif",
    image: "/images/lootboxes/summoner-crystal.webp",
    drops: [
      {
        name: "Prowl",
        rarity: "common",
        chance: 6,
        image: "/images/drops/prowl.png",
        description:
          "A reliable and tactical Autobot officer known for his leadership skills.",
      },
      {
        name: "Sideswipe",
        rarity: "common",
        chance: 6,
        image: "/images/drops/sideswipe.png",
        description:
          "A fearless Autobot warrior, known for his agility and martial arts skills.",
      },
      {
        name: "Sunstreaker",
        rarity: "common",
        chance: 6,
        image: "/images/drops/sunstreaker.png",
        description:
          "An Autobot known for his self-confidence and love for high-speed racing.",
      },
      {
        name: "Blurr",
        rarity: "common",
        chance: 6,
        image: "/images/drops/blurr.png",
        description:
          "A speedster Autobot, famed for his ability to talk as quickly as he can move.",
      },
      {
        name: "Kup",
        rarity: "common",
        chance: 6,
        image: "/images/drops/kup.png",
        description:
          "A veteran Autobot soldier with decades of experience, often serving as a mentor.",
      },
      {
        name: "Blackout",
        rarity: "common",
        chance: 6,
        image: "/images/drops/blackout.png",
        description:
          "A Decepticon helicopter with destructive power and a cold demeanor.",
      },
      {
        name: "Grindor",
        rarity: "common",
        chance: 6,
        image: "/images/drops/grindor.png",
        description:
          "A Decepticon with relentless combat skills and a focus on terrorizing his enemies.",
      },
      {
        name: "Barricade",
        rarity: "common",
        chance: 6,
        image: "/images/drops/barricade.png",
        description:
          "A Decepticon law enforcer who enjoys causing chaos and breaking the rules.",
      },
      {
        name: "Arcee",
        rarity: "rare",
        chance: 7,
        image: "/images/drops/arcee.webp",
        description:
          "A fierce and skilled Autobot warrior known for her agility and resourcefulness.",
      },
      {
        name: "Wheeljack",
        rarity: "rare",
        chance: 7,
        image: "/images/drops/wheeljack.png",
        description:
          "An inventive and eccentric Autobot scientist, known for creating brilliant technology.",
      },
      {
        name: "Cyclonus",
        rarity: "rare",
        chance: 7,
        image: "/images/drops/cyclonus.png",
        description:
          "A loyal and strategic Decepticon, always ready for battle with precision.",
      },
      {
        name: "Skorponok",
        rarity: "rare",
        chance: 7,
        image: "/images/drops/skorponok.png",
        description:
          "A ruthless and powerful Decepticon, capable of devastating his enemies with his strength.",
      },
      {
        name: "Jazz",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/jazz.png",
        description:
          "An Autobot with unparalleled charisma and a love for excitement and adventure.",
      },
      {
        name: "Ironhide",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/ironhide.png",
        description:
          "A tough and battle-hardened Autobot, known for his resilience and unwavering loyalty.",
      },
      {
        name: "Ratchet",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/ratchet.png",
        description:
          "A compassionate and skilled Autobot medic, always putting others' well-being first.",
      },
      {
        name: "Starscream",
        rarity: "super rare",
        chance: 5,
        image: "/images/drops/starscream.png",
        description:
          "A power-hungry and treacherous Decepticon, constantly scheming to overthrow Megatron.",
      },
      {
        name: "Skywarp",
        rarity: "super rare",
        chance: 5,
        image: "/images/drops/skywarp.png",
        description:
          "A Decepticon with teleportation powers and a love for causing chaos.",
      },
      {
        name: "Bumblebee",
        rarity: "epic",
        chance: 5,
        image: "/images/drops/bumblebee.webp",
        description:
          "A small but brave Autobot, known for his bravery and unbreakable spirit.",
      },
      {
        name: "Hot Rod",
        rarity: "epic",
        chance: 5,
        image: "/images/drops/hotrod.png",
        description:
          "A young Autobot who aspires to become a great leader, with a love for speed and freedom.",
      },
      {
        name: "Soundwave",
        rarity: "epic",
        chance: 5,
        image: "/images/drops/soundwave.webp",
        description:
          "A loyal Decepticon who commands a vast array of robotic minions and is a master of communication.",
      },
      {
        name: "Shatter",
        rarity: "epic",
        chance: 3,
        image: "/images/drops/shatter.png",
        description:
          "A fierce Decepticon with the ability to manipulate sound waves and cause destruction.",
      },
      {
        name: "Breakdown",
        rarity: "epic",
        chance: 3,
        image: "/images/drops/breakdown.png",
        description:
          "A Decepticon warrior, known for his ruthless nature and powerful combat skills.",
      },
      {
        name: "Shockwave",
        rarity: "mythical",
        chance: 2,
        image: "/images/drops/shockwave.png",
        description:
          "A cold and calculating Decepticon, known for his mastery of science and powerful weapons.",
      },
      {
        name: "Ultra Magnus",
        rarity: "mythical",
        chance: 2,
        image: "/images/drops/ultramagnus.webp",
        description:
          "An Autobot leader, recognized for his strength, leadership, and unyielding sense of duty.",
      },
      {
        name: "Grimlock",
        rarity: "mythical",
        chance: 2,
        image: "/images/drops/grimlock.png",
        description:
          "The mighty Dinobot leader, capable of tremendous strength and power in combat.",
      },
      {
        name: "Rodimus Prime",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/rodimus.png",
        description:
          "A noble and brave leader who inherits the mantle of Prime, destined for greatness.",
      },
      {
        name: "Optimus Prime",
        rarity: "legendary",
        chance: 0.25,
        image: "/images/drops/optimus.png",
        description:
          "The revered and wise Autobot leader, known for his courage, strength, and unshakeable morality.",
      },
      {
        name: "Megatron",
        rarity: "legendary",
        chance: 0.25,
        image: "/images/drops/megatron.png",
        description:
          "The ruthless and cunning leader of the Decepticons, driven by ambition to rule the universe.",
      },
    ],
  },

  {
    id: uuidv4(),
    name: "Treasure Horde",
    game: "Adventure Saga",
    type: "crate",
    background: "bg-gradient-to-br from-emerald-600 via-lime-600 to-green-600",

    backgroundImage: "/images/backgrounds/lootcrate.jpg",
    image: "/images/lootboxes/loot-crate.png",
    drops: [
      {
        name: "Bronze Coin",
        rarity: "common",
        chance: 14,
        image: "/images/drops/coins.webp",
        description:
          "A simple, tarnished coin used for small trades and purchases.",
      },
      {
        name: "Rusty Key",
        rarity: "common",
        chance: 13,
        image: "/images/drops/rustykey.webp",
        description:
          "A corroded key, hinting at a forgotten lock waiting to be opened.",
      },
      {
        name: "Old Map",
        rarity: "common",
        chance: 12,
        image: "/images/drops/oldmap.png",
        description:
          "An ancient map with cryptic markings leading to hidden treasures.",
      },
      {
        name: "Silver Dagger",
        rarity: "rare",
        chance: 7,
        image: "/images/drops/silverdagger.png",
        description:
          "A lightweight, gleaming dagger favored by skilled assassins.",
      },
      {
        name: "Traveler's Cloak",
        rarity: "rare",
        chance: 7,
        image: "/images/drops/travelerscloak.webp",
        description:
          "A durable cloak offering both protection and comfort for long journeys.",
      },
      {
        name: "Ancient Scroll",
        rarity: "rare",
        chance: 7,
        image: "/images/drops/ancientscroll.webp",
        description:
          "A delicate scroll inscribed with lost wisdom and mystical spells.",
      },
      {
        name: "Battle Axe",
        rarity: "rare",
        chance: 7,
        image: "/images/drops/battleaxe.png",
        description:
          "A heavy axe designed for crushing enemies in fierce combat.",
      },
      {
        name: "Golden Chalice",
        rarity: "super rare",
        chance: 5,
        image: "/images/drops/goldenchalice.png",
        description:
          "A lavishly adorned chalice, symbolizing wealth and nobility.",
      },
      {
        name: "Ruby Ring",
        rarity: "super rare",
        chance: 5,
        image: "/images/drops/rubyring.webp",
        description: "A stunning ring with a ruby that glows with inner fire.",
      },
      {
        name: "Sapphire Pendant",
        rarity: "super rare",
        chance: 5,
        image: "/images/drops/sapphirependant.webp",
        description:
          "A pendant containing a brilliant sapphire that radiates tranquility.",
      },
      {
        name: "Emerald Amulet",
        rarity: "epic",
        chance: 3,
        image: "/images/drops/emeraldamulet.png",
        description:
          "An amulet with a shimmering emerald said to grant great vitality.",
      },
      {
        name: "Phoenix Feather",
        rarity: "epic",
        chance: 3,
        image: "/images/drops/phoenixfeather.png",
        description:
          "A rare feather imbued with the essence of eternal rebirth.",
      },
      {
        name: "Armor of Ages",
        rarity: "epic",
        chance: 3,
        image: "/images/drops/armorofages.png",
        description:
          "A legendary suit of armor crafted to withstand the ravages of time.",
      },
      {
        name: "Obsidian Blade",
        rarity: "epic",
        chance: 3,
        image: "/images/drops/obsidianblade.png",
        description:
          "A blade forged from volcanic glass, sharp enough to cut through steel.",
      },
      {
        name: "Crown of Kings",
        rarity: "mythical",
        chance: 2,
        image: "/images/drops/kingscrown.png",
        description:
          "A majestic crown worn by ancient rulers, brimming with power.",
      },
      {
        name: "Ogre's Club",
        rarity: "mythical",
        chance: 1.5,
        image: "/images/drops/ogreclub.png",
        description: "A massive, crude club wielded by fearsome ogres.",
      },
      {
        name: "Great Helm",
        rarity: "mythical",
        chance: 1.5,
        image: "/images/drops/greathelm.webp",
        description:
          "An imposing helm that symbolizes the strength of a great warrior.",
      },
      {
        name: "Dragon Claw",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/dragonrelic.png",
        description:
          "A relic said to be forged from the claw of a mythical dragon.",
      },
      {
        name: "Eternal Helm",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/eternalhelm.webp",
        description:
          "A helm imbued with the power of immortality, worn by champions of legend.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Aether Gate",
    game: "Gacha Adventures",
    type: "summon",
    background: "bg-gradient-to-r from-purple-700 via-purple-500 to-indigo-600",
    backgroundImage: "/images/backgrounds/gachaportal.jpg",
    image: "/images/lootboxes/gacha_crystal.webp",
    drops: [
      {
        name: "Spirit Shard",
        rarity: "common",
        chance: 14,
        image: "/images/drops/spiritshard.png",
        description:
          "A fragment of pure spirit energy, faintly glowing with ethereal light.",
      },
      {
        name: "Gleaming Pearl",
        rarity: "common",
        chance: 14,
        image: "/images/drops/gleamingpearl.webp",
        description: "A perfectly smooth pearl radiating a soft, magical glow.",
      },
      {
        name: "Galaxy Essence",
        rarity: "common",
        chance: 13,
        image: "/images/drops/galaxyessence.png",
        description:
          "A swirling core of cosmic energy, shimmering with star-like specks.",
      },
      {
        name: "Inactive Runestone",
        rarity: "common",
        chance: 13,
        image: "/images/drops/inactiverunestonefragment.webp",
        description:
          "A dull fragment of a runestone, holding potential energy within.",
      },
      {
        name: "Mystic Charm",
        rarity: "rare",
        chance: 8,
        image: "/images/drops/mysticcharm.png",
        description:
          "An ancient charm imbued with mysterious magical properties.",
      },
      {
        name: "Crystalline Mirror",
        rarity: "rare",
        chance: 8,
        image: "/images/drops/crystallinemirror.webp",
        description:
          "A reflective shard with an inner radiance, said to reveal hidden truths.",
      },
      {
        name: "Active Runestone",
        rarity: "rare",
        chance: 8,
        image: "/images/drops/runestonefragment.png",
        description:
          "A glowing runestone fragment, brimming with arcane power.",
      },
      {
        name: "Ethereal Fragment",
        rarity: "super rare",
        chance: 5,
        image: "/images/drops/etherealfragment.png",
        description: "A shard of pure ether, almost intangible to the touch.",
      },
      {
        name: "Twilight Orb",
        rarity: "super rare",
        chance: 5,
        image: "/images/drops/twilightorb.png",
        description:
          "A mysterious orb that captures the fleeting light of dusk.",
      },
      {
        name: "Arcane Relic",
        rarity: "epic",
        chance: 3,
        image: "/images/drops/arcanerelic.png",
        description: "An ancient relic pulsating with arcane energy.",
      },
      {
        name: "Celestial Talisman",
        rarity: "epic",
        chance: 3,
        image: "/images/drops/celestialtalisman.png",
        description:
          "A talisman imbued with celestial light, offering divine protection.",
      },
      {
        name: "Runestone Rift",
        rarity: "epic",
        chance: 3,
        image: "/images/drops/runestonerift.webp",
        description: "A fractured runestone, emanating chaotic magical energy.",
      },
      {
        name: "Void Essence",
        rarity: "mythical",
        chance: 1,
        image: "/images/drops/voidessence.png",
        description:
          "A dark and enigmatic essence from the depths of the void.",
      },
      {
        name: "Abyssal Drive",
        rarity: "mythical",
        chance: 1,
        image: "/images/drops/abyssdrive.png",
        description: "A compact yet powerful core of abyssal energy.",
      },
      {
        name: "Nether Crystal",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/nethercrystal.gif",
        description:
          "A radiant crystal said to be forged in the Nether's fiery depths.",
      },
      {
        name: "Starlight Prism",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/starlightprism.webp",
        description:
          "A dazzling prism that captures the brilliance of starlight.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Chromatic Case",
    game: "Battle Royale Legends",
    type: "skin",
    background: "bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-500",
    backgroundImage: "/images/backgrounds/skincrate.jpg",
    image: "/images/lootboxes/skin-crate.png",

    drops: [
      {
        name: "Infantryman",
        rarity: "common",
        chance: 6,
        image: "/images/drops/basicgrunt.png",
        description: "A standard foot soldier, equipped with basic gear.",
      },
      {
        name: "Hoplite",
        rarity: "common",
        chance: 6,
        image: "/images/drops/hoplite.webp",
        description: "A lightly armed spearman from ancient times.",
      },
      {
        name: "Paladin",
        rarity: "common",
        chance: 6,
        image: "/images/drops/knight.webp",
        description: "A medieval warrior clad in heavy armor.",
      },
      {
        name: "Crusader",
        rarity: "common",
        chance: 6,
        image: "/images/drops/crusader.png",
        description: "A holy warrior on a mission.",
      },
      {
        name: "Laser Drone",
        rarity: "common",
        chance: 6,
        image: "/images/drops/laserdrone.png",
        description: "An automated drone equipped with laser weaponry.",
      },
      {
        name: "Cyber Scout",
        rarity: "rare",
        chance: 5,
        image: "/images/drops/cyberscout.png",
        description:
          "A fast and agile reconnaissance unit with cyber enhancements.",
      },
      {
        name: "Elite Trooper",
        rarity: "rare",
        chance: 5,
        image: "/images/drops/trooper.png",
        description: "A highly trained and well-armed soldier.",
      },
      {
        name: "Exo Suit",
        rarity: "rare",
        chance: 5,
        image: "/images/drops/exosuit.png",
        description: "A powered suit of armor enhancing strength and mobility.",
      },
      {
        name: "Plasma Rifleman",
        rarity: "rare",
        chance: 5,
        image: "/images/drops/plasmarifleman.webp",
        description: "A soldier wielding a high-energy plasma rifle.",
      },
      {
        name: "Athenian Spearman",
        rarity: "rare",
        chance: 5,
        image: "/images/drops/athenian.png",
        description: "An ancient warrior trained in phalanx tactics.",
      },
      {
        name: "Calvaryman",
        rarity: "super rare",
        chance: 4,
        image: "/images/drops/cavalryman.png",
        description: "A mounted warrior with high mobility and strength.",
      },
      {
        name: "Spartan Captain",
        rarity: "super rare",
        chance: 4,
        image: "/images/drops/spartancaptain.png",
        description: "A leader of Spartan warriors, famed for bravery.",
      },
      {
        name: "Super Soldier",
        rarity: "super rare",
        chance: 4,
        image: "/images/drops/supersoldier.png",
        description: "An enhanced soldier with superior combat abilities.",
      },
      {
        name: "EMPilot",
        rarity: "super rare",
        chance: 4,
        image: "/images/drops/EMPilot.webp",
        description: "A pilot specialized in electromagnetic warfare.",
      },
      {
        name: "Nanobot Guardian",
        rarity: "super rare",
        chance: 4,
        image: "/images/drops/nanobot.png",
        description: "A protector unit swarming with nanobots.",
      },
      {
        name: "Rogue Raider",
        rarity: "super rare",
        chance: 4,
        image: "/images/drops/raider.png",
        description: "A rogue unit striking swiftly and unpredictably.",
      },
      {
        name: "Voidwalker",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/voidwalker.webp",
        description: "A mysterious entity traversing the void.",
      },
      {
        name: "Barbarian King",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/barbarianking.png",
        description: "A powerful leader of barbarian hordes.",
      },
      {
        name: "El-Sa'ka Shocker",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/egyptianshock.webp",
        description: "A shock trooper wielding electrified weaponry.",
      },
      {
        name: "Hoplite Phalanx",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/hoplitephalanx.png",
        description: "A tightly organized group of hoplite warriors.",
      },

      {
        name: "Dragon Dragoon",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/dragoon.png",
        description: "A warrior with the ferocity of a dragon.",
      },
      {
        name: "Viking Berserker",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/viking.png",
        description: "A fearsome Viking driven by battle rage.",
      },
      {
        name: "Legion Commander",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/romancommander.png",
        description: "A master tactician leading Roman legions.",
      },
      {
        name: "Neon Apex",
        rarity: "mythical",
        chance: 1.5,
        image: "/images/drops/radiantrobot.png",
        description: "A radiant machine, the pinnacle of technology.",
      },
      {
        name: "Follower of Ra",
        rarity: "mythical",
        chance: 1.5,
        image: "/images/drops/followerofra.png",
        description: "A devotee of the Sun God, channeling divine power.",
      },
      {
        name: "King Leonidas",
        rarity: "mythical",
        chance: 1.25,
        image: "/images/drops/kingleonidas.webp",
        description: "The legendary Spartan king known for his last stand.",
      },
      {
        name: "Vortex Vanguard",
        rarity: "mythical",
        chance: 1.25,
        image: "/images/drops/galacticvanguard.webp",
        description: "A warrior from the farthest reaches of the galaxy.",
      },
      {
        name: "Cosmic Crusader",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/cosmiccrusader.png",
        description: "A celestial champion, wielding cosmic powers.",
      },
      {
        name: "Infinity Sentinel",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/infinitysentinel.webp",
        description: "An eternal guardian of infinite dimensions.",
      },
      {
        name: "Cleopatra",
        rarity: "legendary",
        chance: 0.25,
        image: "/images/drops/cleopatra.png",
        description: "The iconic queen of ancient Egypt, shrouded in mystique.",
      },
      {
        name: "King Arthur",
        rarity: "legendary",
        chance: 0.25,
        image: "/images/drops/kingarthur.png",
        description: "The fabled king of Camelot, wielding Excalibur.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Abyss Chest",
    game: "Shadow Depths",
    type: "runereveal",
    background: "bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-600",
    backgroundImage: "/images/backgrounds/halloween.jpg",
    image: "/images/lootboxes/monster.png",
    drops: [
      {
        name: "Spectral Wraith",
        rarity: "common",
        chance: 8,
        image: "/images/drops/spectralwraith.png",
        description: "An ethereal being drifting through the shadows.",
      },
      {
        name: "Skeleton Knight",
        rarity: "common",
        chance: 8,
        image: "/images/drops/skeletonknight.webp",
        description: "A knight risen from the grave, clad in ancient armor.",
      },
      {
        name: "Jack'o'Lantern",
        rarity: "common",
        chance: 8,
        image: "/images/drops/jackolantern.png",
        description: "A mischievous spirit trapped in a pumpkin.",
      },
      {
        name: "Zombie",
        rarity: "common",
        chance: 8,
        image: "/images/drops/zombie.png",
        description: "A reanimated corpse driven by hunger for flesh.",
      },
      {
        name: "Abyssal Blade",
        rarity: "rare",
        chance: 6,
        image: "/images/drops/phantomblade.png",
        description: "A ghostly swordsman that cuts through dimensions.",
      },
      {
        name: "Nightmare Fiend",
        rarity: "rare",
        chance: 6,
        image: "/images/drops/nightmarefiend.webp",
        description: "A creature born from the darkest nightmares.",
      },
      {
        name: "Void Sentry",
        rarity: "rare",
        chance: 6,
        image: "/images/drops/abyssalsentry.webp",
        description: "A guard of the abyssal realms.",
      },
      {
        name: "Mummy Guardian",
        rarity: "rare",
        chance: 6,
        image: "/images/drops/mummy.png",
        description: "A mummified guardian protecting ancient tombs.",
      },
      {
        name: "Armored Zombie",
        rarity: "rare",
        chance: 6,
        image: "/images/drops/zombiewarrior.png",
        description: "A zombie clad in rusted armor, still seeking battle.",
      },
      {
        name: "Armored Skeleton Knight",
        rarity: "rare",
        chance: 6,
        image: "/images/drops/armoredskeletonknight.webp",
        description: "A heavily armored undead warrior, risen from the grave.",
      },
      {
        name: "Void Reaver",
        rarity: "super rare",
        chance: 4,
        image: "/images/drops/voidreaver.webp",
        description: "A warrior wielding the power of the void.",
      },
      {
        name: "Headless Horseman",
        rarity: "super rare",
        chance: 4,
        image: "/images/drops/headlesshorseman.png",
        description: "A warrior wielding the power of the void.",
      },
      {
        name: "Zombie Caster",
        rarity: "super rare",
        chance: 4,
        image: "/images/drops/zombiecaster.png",
        description: "A zombie with the ability to cast dark spells.",
      },
      {
        name: "Soul Collector",
        rarity: "super rare",
        chance: 4,
        image: "/images/drops/soulcollector.png",
        description: "A grim entity harvesting lost souls.",
      },
      {
        name: "Werewolf Alpha",
        rarity: "super rare",
        chance: 3,
        image: "/images/drops/werewolf.png",
        description: "A cursed creature transforming under the full moon.",
      },
      {
        name: "Sea Serpent",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/seaserpent.png",
        description:
          "A monstrous serpent rising from the depths of a watery abyss.",
      },
      {
        name: "Eclipse Bringer",
        rarity: "epic",
        chance: 2,
        image: "/images/drops/eclipsebringer.png",
        description: "A harbinger of eternal darkness.",
      },
      {
        name: "Nether Drake",
        rarity: "epic",
        chance: 1.5,
        image: "/images/drops/netherdrake.png",
        description: "A dragon of the abyss.",
      },
      {
        name: "Great Bat",
        rarity: "epic",
        chance: 1.5,
        image: "/images/drops/greatbat.webp",
        description: "A monstrous bat soaring through the night.",
      },
      {
        name: "Skeleton Marauder",
        rarity: "epic",
        chance: 1,
        image: "/images/drops/skeletonmarauder.png",
        description: "A skeletal warrior pillaging the living.",
      },

      {
        name: "Frankenborg",
        rarity: "epic",
        chance: 1,
        image: "/images/drops/frankenborg.png",
        description:
          "A cyborg stitched together from various parts, made whole again?",
      },
      {
        name: "Phantom Assassin",
        rarity: "epic",
        chance: 1,
        image: "/images/drops/phantom.png",
        description: "An assassin from the shadows, striking unseen.",
      },
      {
        name: "Void Revenant",
        rarity: "mythical",
        chance: 0.5,
        image: "/images/drops/voidrevenant.webp",
        description: "A revenant returning from the void.",
      },
      {
        name: "Witch Queen",
        rarity: "mythical",
        chance: 0.5,
        image: "/images/drops/witch.png",
        description: "A sorceress wielding wild incantations and magic.",
      },
      {
        name: "Skeleton Horseman",
        rarity: "mythical",
        chance: 0.5,
        image: "/images/drops/skeletonhorseman.png",
        description: "A spectral rider on a skeletal steed.",
      },
      {
        name: "Vampire Lord",
        rarity: "mythical",
        chance: 0.5,
        image: "/images/drops/vampire.png",
        description: "A vampire lord wielding a blade of darkness.",
      },
      {
        name: "Void Regent",
        rarity: "legendary",
        chance: 0.25,
        image: "/images/drops/voidregent.webp",
        description: "A ruler of the void, commanding dark legions.",
      },
      {
        name: "Abyssal Lord",
        rarity: "legendary",
        chance: 0.25,
        image: "/images/drops/abyssallord.webp",
        description: "A ruler of the shadow realms.",
      },
      {
        name: "Blackbeard",
        rarity: "legendary",
        chance: 0.25,
        image: "/images/drops/blackbeard.png",
        description: "A fearsome pirate captain risen from the depths.",
      },
      {
        name: "Skeleton King",
        rarity: "legendary",
        chance: 0.25,
        image: "/images/drops/skeletonking.png",
        description: "A regal undead monarch ruling over the abyss.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Christmas Case",
    game: "Arctic Wars",
    type: "runereveal",
    background: "bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-600",
    backgroundImage: "/images/backgrounds/antarctica.jpg",
    image: "/images/lootboxes/christmas-crate.webp",
    drops: [
      {
        name: "Frost Guardian",
        rarity: "common",
        chance: 12,
        image: "/images/drops/frostguardian.png",
        description: "A protector born of icy winds.",
      },
      {
        name: "Snow Wraith",
        rarity: "common",
        chance: 12,
        image: "/images/drops/snowwraith.webp",
        description: "A ghostly figure wandering the tundra.",
      },
      {
        name: "Blizzard Beast",
        rarity: "rare",
        chance: 10,
        image: "/images/drops/blizzardbeast.png",
        description: "A monstrous creature that thrives in snowstorms.",
      },
      {
        name: "Santa's Bow Elves",
        rarity: "rare",
        chance: 10,
        image: "/images/drops/bowelves.png",
        description: "Hardworking elves crafting bows for Santa's sleigh.",
      },
      {
        name: "Santa's Sword Elves",
        rarity: "rare",
        chance: 10,
        image: "/images/drops/swordelves.png",
        description: "Elves forging swords for Santa's toy soldiers.",
      },
      {
        name: "Polar Sentinel",
        rarity: "rare",
        chance: 9,
        image: "/images/drops/polarsentinel.png",
        description: "A guardian of the frozen wastelands.",
      },
      {
        name: "Aurora Phantom",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/auroraphantom.png",
        description: "A spirit shimmering with the colors of the aurora.",
      },
      {
        name: "Glacial Titan",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/glacialtitan.webp",
        description: "A colossal being sculpted from ancient ice.",
      },
      {
        name: "Ice Revenant",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/icerevenant.png",
        description: "A spectral warrior of the frozen north.",
      },
      {
        name: "Frost Reaver",
        rarity: "epic",
        chance: 4,
        image: "/images/drops/frostreaver.png",
        description: "A weapon imbued with the power of frost.",
      },
      {
        name: "Yule Empress",
        rarity: "epic",
        chance: 4,
        image: "/images/drops/yuleempress.webp",
        description: "The regal embodiment of winter festivities.",
      },
      {
        name: "Winter Soldier",
        rarity: "epic",
        chance: 4,
        image: "/images/drops/wintersoldier.webp",
        description:
          "A bionically-enhanced warrior trained...or manufactured in Siberia.",
      },
      {
        name: "Icebound Behemoth",
        rarity: "mythical",
        chance: 2,
        image: "/images/drops/iceboundbehemoth.webp",
        description: "A massive creature encased in ice.",
      },
      {
        name: "Arctic Spirit",
        rarity: "mythical",
        chance: 2,
        image: "/images/drops/winterspirit.webp",
        description: "A mystical being embodying the essence of winter.",
      },
      {
        name: "Krampus",
        rarity: "mythical",
        chance: 2,
        image: "/images/drops/krampus.png",
        description:
          "A fearsome figure punishing the naughty during the holidays.",
      },
      {
        name: "Frozen King (N)",
        rarity: "legendary",
        chance: 0.4,
        image: "/images/drops/frozenkingNorth.png",
        description: "Ruler of the icy realms of the North Pole.",
      },
      {
        name: "Frozen King (S)",
        rarity: "legendary",
        chance: 0.4,
        image: "/images/drops/frozenkingSouth.webp",
        description: "Ruler of the frozen lands of the South Pole.",
      },
      {
        name: "St. Nick",
        rarity: "legendary",
        chance: 0.2,
        image: "/images/drops/stnick.png",
        description: "The jolly old deliverer of gifts and joy.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Jungle Cache",
    game: "Emerald Wilds",
    type: "runereveal",
    background:
      "bg-gradient-to-br from-green-700 via-emerald-600 to-yellow-600",
    backgroundImage: "/images/backgrounds/forest.jpg",
    image: "/images/lootboxes/jungle-cache.webp",
    drops: [
      {
        name: "Leaf Stalker",
        rarity: "common",
        chance: 15,
        image: "/images/drops/leafstalker.webp",
        description: "A stealthy predator camouflaged in foliage.",
      },
      {
        name: "Emerald Python",
        rarity: "common",
        chance: 15,
        image: "/images/drops/emeraldpython.png",
        description: "A serpent with scales that shimmer like emeralds.",
      },
      {
        name: "Primal Spirit",
        rarity: "rare",
        chance: 9,
        image: "/images/drops/primalspirit.png",
        description: "An ancient force of raw nature.",
      },
      {
        name: "Swamp Scout",
        rarity: "rare",
        chance: 9,
        image: "/images/drops/junglescout.png",
        description: "An expert in navigating dense jungles.",
      },
      {
        name: "Jaguar Spirit",
        rarity: "rare",
        chance: 9,
        image: "/images/drops/jaguarspirit.png",
        description: "A fierce guardian of the jungle's heart.",
      },
      {
        name: "Vine Weaver",
        rarity: "rare",
        chance: 9,
        image: "/images/drops/vineweaver.webp",
        description: "A creature skilled in crafting traps from vines.",
      },
      {
        name: "Ancient Treant",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/ancienttreant.png",
        description: "A wise and powerful tree entity.",
      },
      {
        name: "Golden Panther",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/goldenpanther.png",
        description: "A majestic feline with a golden sheen.",
      },
      {
        name: "Moss Monster",
        rarity: "super rare",
        chance: 6,
        image: "/images/drops/mossmonster.png",
        description: "A creature blending seamlessly with the forest floor.",
      },
      {
        name: "Jungle Titan",
        rarity: "epic",
        chance: 4,
        image: "/images/drops/jungletitan.png",
        description: "A massive beast ruling the jungle depths.",
      },
      {
        name: "Mega Fungus",
        rarity: "epic",
        chance: 4,
        image: "/images/drops/fungus.png",
        description: "A colossal mushroom spreading through the forest floor.",
      },
      {
        name: "Forest Guardian",
        rarity: "epic",
        chance: 4,
        image: "/images/drops/forestguardian.png",
        description: "A protector of the jungle's balance.",
      },
      {
        name: "Emerald Phoenix",
        rarity: "mythical",
        chance: 1,
        image: "/images/drops/emeraldphoenix.webp",
        description: "A mythical bird with emerald feathers.",
      },
      {
        name: "Warlock of the Woods",
        rarity: "mythical",
        chance: 1,
        image: "/images/drops/warlockofthewoods.png",
        description: "A terrifying sorcerer with mastery over forest magic.",
      },
      {
        name: "Sasquatch",
        rarity: "mythical",
        chance: 1,
        image: "/images/drops/sasquatch.png",
        description: "A legendary ape-like creature of the wilderness.",
      },
      {
        name: "Wild King",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/usurperking.png",
        description: "The sovereign of the untamed plains.",
      },
      {
        name: "Jungle King",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/wildking.webp",
        description: "The sovereign of the untamed jungle.",
      },
    ],
  },
];
