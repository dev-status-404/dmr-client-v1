"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function DepositRedeemSection() {
  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* ================= DEPOSIT ================= */}
          <ActionCard
            title="Deposit"
            accent="gold"
            image="/assets/SVGs/fire-panther.svg"
          />

          {/* ================= REDEEM ================= */}
          <ActionCard
            title="Redeem"
            accent="green"
            image="/assets/SVGs/lightning-panther.svg"
          />

        </div>
      </div>
    </section>
  );
}

/* ===================================================== */

function ActionCard({
  title,
  accent,
  image,
}: {
  title: string;
  accent: "gold" | "green";
  image: string;
}) {
  const isGold = accent === "gold";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10",
        "shadow-[0_25px_70px_rgba(0,0,0,0.55)]",
        isGold
          ? "bg-gradient-to-br from-[#2a2112] via-[#111827] to-[#0b1220]"
          : "bg-gradient-to-br from-[#0b1f1a] via-[#0b1220] to-[#0f1b2f]"
      )}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            "absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full blur-[140px]",
            isGold ? "bg-yellow-500/30" : "bg-emerald-500/25"
          )}
        />
      </div>

      {/* Big Coin Top Corner */}
      <div className="absolute top-6 left-6 z-20">
        <div
          className={cn(
            "grid h-20 w-20 place-items-center rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.45)]",
            isGold
              ? "bg-gradient-to-b from-yellow-300 to-yellow-500"
              : "bg-gradient-to-b from-emerald-400 to-emerald-600"
          )}
        >
          <div className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-3xl font-black text-black">
            {isGold ? "G" : "S"}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-10 lg:p-12">
        <h3
          className={cn(
            "text-3xl font-bold",
            isGold ? "text-yellow-400" : "text-emerald-400"
          )}
        >
          {title}
        </h3>

        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
          Thousands of Casino Games — Slots, Fish Tables, Keno, Bingo,
          Live Dealers & More — with 96% RTP!
        </p>
      </div>

      {/* Character (breakout style) */}
      <div className="absolute inset-y-[-60px] right-[-60px] w-[520px] pointer-events-none">
        <div className="relative h-[600px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-contain drop-shadow-[0_80px_100px_rgba(0,0,0,0.65)]"
          />
        </div>
      </div>
    </div>
  );
}