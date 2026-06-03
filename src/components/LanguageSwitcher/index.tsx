"use client";

import { useLocale } from "next-intl";
import { useState } from "react";

import Link from "next/link";

const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 min-w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/10 px-3 text-sm font-black uppercase text-white backdrop-blur-xl transition hover:bg-white/15"
      >
        {locale.includes("ru") ? "RU" : "EN"}
      </button>
      <div
        className={`absolute right-0 top-full min-w-[84px] pt-2 leading-none transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-1 shadow-2xl backdrop-blur-xl">
          <Link
            className="rounded-xl px-3 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
            href="/en"
            onClick={() => setOpen(false)}
          >
            English
          </Link>
          <Link
            className="rounded-xl px-3 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
            href="/ru"
            onClick={() => setOpen(false)}
          >
            Русский
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
