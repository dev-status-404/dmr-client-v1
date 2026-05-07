"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

import CARDS from "../../../../public/assets/SVGs/cards.svg";
import ULTRA_PANDA from "../../../../public/assets/SVGs/ultra_panda.svg";
import FORTUNE_KINGS from "../../../../public/assets/SVGs/fortune_kings.svg";
import VBLINK from "../../../../public/assets/SVGs/vblink.svg";

import visa from "../../../../public/assets/SVGs/visa.svg";
import mastercard from "../../../../public/assets/SVGs/mastercard.svg";
import s from "../../../../public/assets/SVGs/s.svg";
import chime from "../../../../public/assets/SVGs/chime.svg";
import paypal from "../../../../public/assets/SVGs/paypal.svg";
import pau from "../../../../public/assets/SVGs/pay.jpg";
import { Separator } from "@/components/ui/separator";

const payments = [visa, mastercard, s, chime, paypal, pau];

function NumberBadge({ n }: { n: number }) {
  return (
    <div className="absolute top-4 right-4 grid h-12 w-12 place-items-center rounded-xl bg-white/50 text-2xl font-extrabold ">
      {n}
    </div>
  );
}

export default function HowToPlayUI() {
  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* ===== LEFT BIG CARD ===== */}
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border bg-white/20 p-8 h-full",
            )}
          >
            <NumberBadge n={1} />

            <h3 className="text-2xl font-bold text-white">Game Access</h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold text-amber-300">
                Browse supported games
                <span className="grid h-9 w-9 place-items-center rounded-full bg-amber-400 text-black font-black">
                  G
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-lg font-semibold text-emerald-300">
                Choose your preferred title
                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500 text-black font-black">
                  S
                </span>
              </div>
            </div>

            {/* Floating Art */}
            <div className="md:absolute bottom-0 right-0 w-[380px]">
              <Image src={CARDS} alt="Cards" className="object-contain" />
            </div>
          </div>

          {/* ===== RIGHT SIDE STACK ===== */}
          <div className="flex flex-col gap-8">
            {/* STEP 2 */}
            <div
              className={cn(
                "relative overflow-hidden rounded-3xl border border-white/10 p-8 bg-white/20",
              )}
            >
              <NumberBadge n={2} />

              <div className="grid grid-cols-2 gap-6">
                <GameLogo src={ULTRA_PANDA} />
                <GameLogo src={FORTUNE_KINGS} />
                <GameLogo src={VBLINK} />
              </div>
            </div>

            {/* STEP 3 */}
            <div
              className={cn(
                "relative overflow-hidden rounded-3xl bg-white/20 p-8",
              )}
            >
              <NumberBadge n={3} />

              <h4 className="text-xl font-bold text-white">
                Redeem Your SC Instantly
              </h4>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {payments.map((logo, i) => (
                  <div
                    key={i}
                    className="grid h-16 place-items-center rounded-2xl border border-white/10 bg-white/5"
                  >
                    <Image
                      src={logo}
                      alt="payment"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
      </div>
    </section>
  );
}

/* ========== small reusable ========== */

function GameLogo({ src }: { src: any }) {
  return (
    <div className="grid h-fit place-items-center">
      <Image src={src} alt="game" className="object-contain h-28 w-auto" />
    </div>
  );
}
