"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import CASION_DEPOSIT from "../../../../public/assets/SVGs/card_deck.svg";
import Link from "next/link";

export default function JoinCta() {
  return (
    <section className="relative w-full py-8 sm:py-10">
      <div className="mx-auto w-full max-w-9xl px-4">
        <Card
          className={cn(
            "relative rounded-3xl border-white/5 bg-white/16",
            // "bg-[#0b1220] shadow-[0_18px_55px_rgba(0,0,0,0.45)]"
          )}
        >
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(245,158,11,0.22),transparent_55%),radial-gradient(circle_at_75%_45%,rgba(16,185,129,0.20),transparent_55%),radial-gradient(circle_at_55%_70%,rgba(255,255,255,0.05),transparent_60%)] opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/35" /> */}
          </div>

          <CardContent className="relative p-5 sm:p-8 lg:p-10">
            {/* ✅ MOBILE (exact like screenshot) */}
            <div className="lg:hidden">
              {/* top art */}
              <div className="relative -mx-5 sm:-mx-8">
                <div className="relative aspect-[9/7] w-full">
                  <Image
                    src="/assets/SVGs/card_deck.svg"
                    alt="CTA Artwork"
                    fill
                    className="object-cover object-top"
                    priority={false}
                    sizes="(max-width: 1024px) 100vw, 0px"
                  />
                </div>
                {/* subtle fade into content like screenshot */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0b1220]" />
              </div>

              {/* headline */}
              <h3 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white">
                Join Thousands of <br />
                Players & Start <br />
                Winning Now!
              </h3>

              <div className="mt-5 h-px w-full bg-white/10" />

              {/* bonus row */}
              <div className="mt-5 flex items-center gap-3">
                <BonusBox tone="amber" big="$10" small="Sign Up" coin="G" />
                <span className="text-xl font-extrabold text-white/80">+</span>
                <BonusBox
                  tone="emerald"
                  big="$10"
                  small="Refferal Bonus"
                  coin="S"
                />
              </div>

              {/* CTA button */}

              <div className="mt-10 flex justify-center w-full max-w-[520px] rounded-full bg-emerald-400 py-5 text-lg font-semibold text-black hover:bg-emerald-300 transition">
                <Link href="/auth/signup">Play Now its Free</Link>
              </div>

              {/* footer note */}
              <p className="mt-5 text-center text-xs leading-relaxed text-white/55">
                No Purchase Necessary. 21+ Only. Void Where Prohibited by Law.
                See Terms &amp; Conditions
              </p>
            </div>

            {/* ✅ DESKTOP (keep your previous 2-column layout) */}
            <div className="hidden lg:grid gap-10 lg:grid-cols-[1.05fr_1.15fr] lg:items-center">
              {/* LEFT */}
              <div className="text-left">
                <h3 className="text-5xl font-semibold leading-tight tracking-tight text-white">
                  Join Thousands of <br />
                  Players &{" "}
                  <span className="text-amber-300">
                    Start <br />
                    Winning
                  </span>{" "}
                  Now!
                </h3>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <BonusPill text="$10 Sign Up" tone="amber" coin="G" />
                  <BonusPill text="$10 Referal Bonus" tone="emerald" coin="S" />

                  <div className="ml-2 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-b from-amber-300 to-amber-500 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-xl font-black text-black shadow-inner">
                      G
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-center w-full max-w-[520px] rounded-full bg-emerald-400 py-5 text-lg font-semibold text-black hover:bg-emerald-300 transition">
                  <Link href="/auth/signup">Play Now its Free</Link>
                </div>

                <p className="mt-8 max-w-[560px] text-sm leading-relaxed text-white/70">
                  Your favorite slots, fish tables, and live games — all in one
                  place. Play for free, and win real cash prizes!
                </p>
              </div>

              {/* RIGHT */}
              <div className="relative">
                <div className="pointer-events-none absolute -top-6 left-12 z-10">
                  <Coin tone="emerald" label="S" size="xl" />
                </div>
                <div className="pointer-events-none absolute -bottom-8 left-24 z-10">
                  <Coin tone="emerald" label="S" size="md" />
                </div>

                <div className="relative flex justify-center">
                  <div className="relative w-full max-w-[450px] h-[320px]">
                    <Image
                      src="/assets/SVGs/card_deck.svg"
                      alt="CTA Artwork"
                      fill
                      priority={false}
                      sizes="(max-width: 1200px) 50vw, 750px"
                      className="
        object-contain
        scale-[1.60]
        translate-y-6
        drop-shadow-[0_60px_80px_rgba(0,0,0,0.55)]
      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function BonusBox({
  tone,
  big,
  small,
  coin,
}: {
  tone: "amber" | "emerald";
  big: string;
  small: string;
  coin: "G" | "S";
}) {
  return (
    <div
      className={cn(
        "relative flex-1 overflow-hidden rounded-2xl border px-1 w-full p-2",
        "bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
        tone === "amber" ? "border-amber-300/25" : "border-emerald-400/25",
      )}
    >
      <div className="flex w-96 md:w-full lg:w-full items-center justify-between gap-3">
        <div>
          <p
            className={cn(
              "text-xl font-extrabold",
              tone === "amber" ? "text-amber-300" : "text-emerald-300",
            )}
          >
            {big}
          </p>
          <p className="mt-0.5 text-xs font-semibold text-white/70">{small}</p>
        </div>

        <Coin tone={tone} label={coin} size="sm" />
      </div>
    </div>
  );
}

function BonusPill({
  text,
  tone,
  coin,
}: {
  text: string;
  tone: "amber" | "emerald";
  coin: "G" | "S";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border px-4 py-2",
        "bg-white/5 backdrop-blur",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
        tone === "amber" ? "border-amber-300/40" : "border-emerald-400/35",
      )}
    >
      <span className="text-sm sm:text-lg font-semibold text-white">
        {text}
      </span>
      <Coin tone={tone} label={coin} size="sm" />
    </div>
  );
}

function Coin({
  tone,
  label,
  size,
}: {
  tone: "amber" | "emerald";
  label: string;
  size: "sm" | "md" | "xl";
}) {
  const dims =
    size === "xl" ? "h-24 w-24" : size === "md" ? "h-16 w-16" : "h-12 w-12";
  const inner =
    size === "xl"
      ? "h-16 w-16 text-4xl"
      : size === "md"
        ? "h-11 w-11 text-2xl"
        : "h-9 w-9 text-xl";

  return (
    <div
      className={cn(
        "grid place-items-center rounded-full shadow-[0_25px_55px_rgba(0,0,0,0.35)]",
        dims,
        tone === "amber"
          ? "bg-gradient-to-b from-amber-300 to-amber-500"
          : "bg-gradient-to-b from-emerald-400 to-emerald-600",
      )}
    >
      <div
        className={cn(
          "grid place-items-center rounded-full bg-white/90 font-black text-black shadow-inner",
          inner,
        )}
      >
        {label}
      </div>
    </div>
  );
}
