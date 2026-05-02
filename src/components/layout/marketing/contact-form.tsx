"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import CARD_DECK from "../../../../public/assets/SVGs/card_deck.svg";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative w-full py-8 sm:py-10">
      <div className="mx-auto w-full max-w-9xl px-4">
        <Card className="relative overflow-hidden rounded-3xl border-white/5 bg-white/[0.06]">
          {/* subtle ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(245,158,11,0.15),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_55%)]" />

          <CardContent className="relative p-5 sm:p-8 lg:p-10">
            {/* ── MOBILE layout ── */}
            <div className="lg:hidden space-y-8">
              {/* card deck art centred above */}
              <div className="relative mx-auto w-48 h-48">
                <Image
                  src={CARD_DECK}
                  alt="Card Deck"
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(245,158,11,0.35)]"
                  priority={false}
                />
              </div>

              <SectionHeading />
              <FormBody
                form={form}
                submitted={submitted}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>

            {/* ── DESKTOP layout ── */}
            <div className="hidden lg:grid grid-cols-[1fr_1.1fr] gap-12 items-center">
              {/* LEFT: card deck */}
              <div className="relative flex justify-center items-center min-h-[420px]">
                <div className="relative w-72 h-72">
                  <Image
                    src={CARD_DECK}
                    alt="Card Deck"
                    fill
                    className="object-contain drop-shadow-[0_30px_60px_rgba(245,158,11,0.40)]"
                    priority={false}
                  />
                </div>
              </div>

              {/* RIGHT: form */}
              <div className="space-y-6">
                <SectionHeading />
                <FormBody
                  form={form}
                  submitted={submitted}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ─── sub-components ─────────────────────────────────────── */

function SectionHeading() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
        Get in touch
      </p>
      <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-white lg:text-4xl">
        Contact Us
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-white/60">
        Have a question or need support? Send us a message and we&apos;ll get
        back to you shortly.
      </p>
    </div>
  );
}

function FormBody({
  form,
  submitted,
  onChange,
  onSubmit,
}: {
  form: { name: string; email: string; message: string };
  submitted: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-8 text-center">
        <p className="text-lg font-bold text-emerald-300">Message sent!</p>
        <p className="mt-1 text-sm text-white/60">
          Thank you — we&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field
        label="Name"
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={onChange}
        required
      />
      <Field
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={form.email}
        onChange={onChange}
        required
      />

      {/* Message textarea */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white/80"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Write your message…"
          value={form.message}
          onChange={onChange}
          required
          className={cn(
            "w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3",
            "text-sm text-white placeholder:text-white/30",
            "outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/40 transition",
          )}
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-amber-400 py-4 text-sm font-bold text-black transition hover:bg-amber-300 active:scale-[0.98]"
      >
        Send Message
      </button>
    </form>
  );
}

function Field({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={name}
        className={cn(
          "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3",
          "text-sm text-white placeholder:text-white/30",
          "outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/40 transition",
        )}
      />
    </div>
  );
}
