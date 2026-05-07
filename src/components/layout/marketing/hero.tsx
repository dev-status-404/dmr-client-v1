"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Hero() {
  return (
    <section className="w-full px-0 py-6">
      <div className="mx-auto w-full">
        {/* ================= MOBILE CAROUSEL ================= */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              <CarouselItem className="basis-full">
                <MobileCard
                  title="DIAMOND HIGHROLLERS"
                  subtitle="Welcome to"
                  desc="Your favorite slots, fish tables, and live games — all in one place."
                  image="/assets/SVGs/card_deck.svg"
                  big
                />
              </CarouselItem>

              {/* <CarouselItem className="basis-full">
                <MobileCard
                  title="CALCULATED"
                  subtitle="Every move is"
                  image="/assets/SVGs/looking_back.svg"
                />
              </CarouselItem>

              <CarouselItem className="basis-full">
                <MobileCard
                  title="THE FEARLESS"
                  subtitle="Fortune favors"
                  image="/assets/SVGs/sitting-p.svg"
                />
              </CarouselItem> */}
            </CarouselContent>
          </Carousel>
        </div>

        {/* ================= DESKTOP GRID (UNCHANGED) ================= */}
        <div className="hidden md:flex justify-center">
          {/* BIG LEFT */}
          <div className="relative overflow-hidden h-[480px] min-w-5xl rounded-2xl bg-white/20 p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/25 via-transparent to-transparent" />

            <div className="relative z-10 max-w-md">
              <p className="text-sm text-white/60">Welcome to</p>
              <h1 className="mt-2 text-4xl font-extrabold text-yellow-400 md:text-5xl lg:w-12">
                DIAMOND HIGHROLLERS
              </h1>

              <p className="mt-4 text-sm text-white/70 md:text-base max-w-[15rem]">
                Your favorite slots, fish tables, and live games — all in one
                place.
              </p>

            </div>

            <div className="absolute bottom-0 right-4 h-full md:w-[50%] lg:w-[50%]">
              {/* <div className="absolute bottom-0 right-4 h-full md:w-[50%] lg:w-[65%]"> */}
              <Image
                src="/assets/SVGs/card_deck.svg"
                alt="Character"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CARD 2 */}
          {/* <DesktopCard
            title="CALCULATED"
            subtitle="Every move is"
            image="/assets/SVGs/looking_back.svg"
          /> */}

          {/* CARD 3 */}
          {/* <DesktopCard
            title="THE FEARLESS"
            subtitle="Fortune favors"
            image="/assets/SVGs/sitting-p.svg"
          /> */}
        </div>
      </div>
    </section>
  );
}

/* ================= MOBILE CARD ================= */

function MobileCard({
  title,
  subtitle,
  desc,
  image,
  big,
}: {
  title: string;
  subtitle: string;
  desc?: string;
  image: string;
  big?: boolean;
}) {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-2xl bg-white/20 p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/25 via-transparent to-transparent" />

      <div className="relative z-10 max-w-[45%]">
        <p className="text-xs text-white/60">{subtitle}</p>
        <h2 className="mr-2 text-3xl font-extrabold text-yellow-400">
          {title}
        </h2>

        {desc && <p className="mt-3 text-sm text-white/70">{desc}</p>}
      </div>

      {/* IMAGE NOT TINY */}
      <div className="absolute bottom-0 right-0 top-[5%] h-full w-[80%]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
        />
      </div>
    </div>
  );
}

/* ================= DESKTOP SMALL CARD ================= */

function DesktopCard({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div className="relative overflow-hidden h-[380px] rounded-2xl bg-white/20 p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-transparent to-transparent" />

      <div className="relative z-10">
        <p className="text-xs text-white/60">{subtitle}</p>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <div className="absolute bottom-0 top-[5%] pb-0 mb-0  right-0 h-full w-[55%]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
