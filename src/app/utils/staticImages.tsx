import React from "react";

// General Static Images
export const FlashingLights = () => (
  <img
    src="/images/backgrounds/flashinglights.png"
    alt="Flashing Lights"
    className="absolute -z-20 h-[100%] w-full animate-fadeIn rounded-full opacity-80 transition-opacity duration-[25]"
  />
);

export const SpinningLightCircle = () => (
  <img
    src="/images/backgrounds/flashinglights.png"
    alt="Spinning Circle"
    className="absolute -z-20 h-1/2 w-1/2 animate-spin rounded-full opacity-80 transition"
  />
);

// Background Images
export const BackgroundLightning = ({ isOpening }: { isOpening: boolean }) => (
  <img
    src="/images/backgrounds/lightning.gif"
    alt="BG Lightning"
    className={`absolute z-10 h-full w-[150%] blur-sm ${
      isOpening ? "animate-fadeIn" : "opacity-0"
    }`}
  />
);

export const BackgroundLightning2 = ({ isOpening }: { isOpening: boolean }) => (
  <img
    src="/images/backgrounds/lightning2.gif"
    alt="BG Lightning 2"
    className={`z-12 absolute h-[150%] w-[100%] rotate-180 blur-sm ${
      isOpening ? "animate-fadeIn" : "opacity-0"
    }`}
  />
);

export const Particles = ({ show }: { show: boolean }) => (
  <img
    src="/images/backgrounds/particles2.gif"
    alt="Particles"
    className={`absolute h-full w-full opacity-0 blur-[2px] ${
      show ? "animate-fadeIn opacity-50" : ""
    }`}
  />
);

export const OpeningSparks = ({ isOpening }: { isOpening: boolean }) => (
  <img
    src="/images/backgrounds/spark.gif"
    alt="Opening Sparks"
    className={`absolute z-[15] w-full blur-sm ${
      isOpening ? "animate-fadeIn" : "opacity-0"
    }`}
  />
);

export const SpeedParticles = ({ isOpening }: { isOpening: boolean }) => (
  <img
    src="/images/backgrounds/particles.webp"
    alt="Speed Particles"
    className={`absolute h-full w-full blur-[1px] transition-all ${isOpening ? "opacity-100" : "opacity-50"}`}
  />
);

// Portal Images
export const Portal = ({ isOpening }: { isOpening: boolean }) => (
  <>
    <img
      src="/images/backgrounds/portal.png"
      alt="Portal1"
      className={`z-5 h-72 w-72 animate-spin opacity-80`}
    />
    <img
      src="/images/backgrounds/portal2.png"
      alt="Portal2"
      className={`absolute z-[15] h-[29rem] min-w-[29rem] animate-spin opacity-80`}
    />
    <img
      src="/images/backgrounds/portal3.png"
      alt="Portal3"
      className={`z-8 absolute h-72 w-72 ${isOpening ? "animate-fadeIn" : "animate-spin"} `}
    />
  </>
);

export const RuneCircle = ({
  isOpening,
  items,
}: {
  isOpening: boolean;
  items: number;
}) => {
  const Rune = ({ index, translate }: { index: number; translate: string }) => (
    <div
      className={`absolute h-12 w-12 transition-all ${isOpening ? "animate-spin" : ""}`}
      style={{
        transform: `rotate(${index * 45}deg) ${translate} rotate(-${index * 45}deg)`,
      }}
    >
      <img
        src={`/images/backgrounds/opening/rune-${index + 1}.webp`} // Replace with actual rune images
        className={`h-12 w-12 animate-wiggleInfinite ${isOpening || items <= 0 ? "inline" : "hidden"}`}
      />
    </div>
  );

  return (
    <>
      <div className="animate-spinSlower absolute z-40 flex h-full w-full items-center justify-center duration-300">
        {[...Array(8)].map((_, i) => (
          <Rune key={`outer-${i}`} index={i} translate="translate(13rem)" />
        ))}
      </div>
      <div className="animate-spinSlowReverse absolute z-40 flex h-full w-full items-center justify-center duration-300">
        {/*Slower inner circle of runes */}
        {[...Array(8)].map((_, i) => (
          <Rune key={`inner-${i}`} index={i + 8} translate="translate(10rem)" />
        ))}
      </div>
    </>
  );
};

export const GlowingAura = () => {
  return (
    <div
      className={`absolute z-10 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 blur-2xl`}
    ></div>
  );
};
