"use client";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import Icon_1 from "../../../../public/assets/SVGs/dashboard.svg";
import Icon_2 from "../../../../public/assets/SVGs/hacksaw.svg";
import Icon_3 from "../../../../public/assets/SVGs/ball.svg";
import Icon_4 from "../../../../public/assets/SVGs/fish.svg";
import Icon_5 from "../../../../public/assets/SVGs/player.svg";

type NavItem = {
  key: string;
  title: string;
  icon: StaticImageData;
};

const items: NavItem[] = [
  { key: "dashboard", title: "Dashboard", icon: Icon_1 },
  // { key: "hacksaw", title: "Hacksaw", icon: Icon_2 },
  { key: "platforms", title: "Platforms", icon: Icon_3 },
  { key: "games", title: "Games", icon: Icon_4 },
  { key: "prizes", title: "Prizes", icon: Icon_5 },
];

export default function TopNavStrip() {
  return (
    <section className="w-full">
      <div
        className={cn(
          // 📱 MOBILE GRID
          "grid grid-cols-2 gap-4",

          // 💻 DESKTOP HORIZONTAL STRIP
          "md:flex md:items-center md:justify-center md:gap-4 md:overflow-x-auto md:pb-2",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {items.map((item) => (
          <NavCard key={item.key} item={item} />
        ))}
      </div>
    </section>
  );
}

function NavCard({ item }: { item: NavItem }) {
  return (
    <div
      className={cn(
        "group relative cursor-pointer",
        "rounded-2xl border border-white/10",
        "bg-white/10 backdrop-blur",
        "transition-all duration-300 hover:scale-[1.04]",

        // 📱 MOBILE sizing
        "flex flex-col items-center justify-center text-center p-4",

        // 💻 DESKTOP sizing
        "md:flex-shrink-0 md:w-[220px] md:p-5"
      )}
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.18),transparent_65%)] opacity-70 group-hover:opacity-100 transition" />

      <div className="relative flex flex-col items-center gap-3">
        {/* Icon */}
        <div className="h-12 w-12 md:h-16 md:w-16">
          <Image
            src={item.icon}
            alt={item.title}
            className="object-contain h-full w-full"
          />
        </div>

        {/* Title */}
        <p className="text-xs md:text-sm font-semibold text-white/80 group-hover:text-white transition">
          {item.title}
        </p>
      </div>
    </div>
  );
}