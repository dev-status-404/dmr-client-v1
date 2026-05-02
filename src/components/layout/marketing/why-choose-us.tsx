"use client";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import clock from "../../../../public/assets/SVGs/clock.svg";
import lock from "../../../../public/assets/SVGs/lock.svg";
import cash from "../../../../public/assets/SVGs/cash.svg";
import gold from "../../../../public/assets/SVGs/gold.svg";

type Item = {
  title: string;
  icon: StaticImageData;
};

const items: Item[] = [
  { title: "Safe & Secure", icon: lock },
  { title: "24/7 Support", icon: clock },
  { title: "Same Day Redemption", icon: cash },
  { title: "Loyalty Club", icon: gold },
];

export default function FeatureStrip() {
  return (
    <section className="w-full py-6">
      <div
        className={cn(
          // 📱 Mobile grid
          "grid grid-cols-2 gap-4",

          // 💻 Desktop strip
          "md:flex md:items-center md:justify-center md:gap-6 md:overflow-x-auto md:pb-2",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {items.map((item) => (
          <FeatureCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ item }: { item: Item }) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/10",
        "bg-white/10 backdrop-blur",
        "transition-all duration-300 hover:scale-[1.03]",

        // 📱 Mobile sizing
        "flex flex-col items-center justify-center text-center p-5",

        // 💻 Desktop sizing
        "md:flex-shrink-0 md:w-[260px] md:p-6"
      )}
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_85%_90%,rgba(168,85,247,0.18),transparent_60%)] opacity-80 group-hover:opacity-100 transition" />

      <div className="relative flex flex-col items-center gap-3">
        {/* Icon Box */}
        <div className="grid h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_8px_20px_rgba(16,185,129,0.35)]">
          <Image
            src={item.icon}
            alt={item.title}
            className="object-contain h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
          />
        </div>

        {/* Title */}
        <p className="text-xs sm:text-sm font-semibold text-white">
          {item.title}
        </p>
      </div>
    </div>
  );
}