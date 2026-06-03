import { getTranslations } from "next-intl/server";
import { Fragment } from "react";

import LanguageSwitcher from "../LanguageSwitcher";
import Link from "next/link";

const Header: React.FC = async () => {
  const t = await getTranslations("common");

  return (
    <Fragment>
      <header className="fixed left-0 top-0 z-50 h-[var(--header-height)] w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
        <div className="container mx-auto">
          <div className="flex h-[var(--header-height)] w-full items-center justify-between gap-3">
            <Link href="/#top" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-cyan-200 to-fuchsia-300 text-lg font-black text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                D
              </span>
              <span className="text-lg font-black tracking-[-0.04em] text-white sm:text-2xl">
                {t("brand")}
              </span>
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              <Link
                href="/#campaign"
                className="text-sm font-bold text-slate-300 transition hover:text-white"
              >
                {t("campaign")}
              </Link>
              <Link
                href="/#rewards"
                className="text-sm font-bold text-slate-300 transition hover:text-white"
              >
                {t("rewards")}
              </Link>
              <Link
                href="/#community"
                className="text-sm font-bold text-slate-300 transition hover:text-white"
              >
                {t("community")}
              </Link>
              <Link
                href="/#faq"
                className="text-sm font-bold text-slate-300 transition hover:text-white"
              >
                {t("faq")}
              </Link>
            </nav>

            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <LanguageSwitcher />
              <Link
                href="https://t.me/doodleTONgame"
                target="_blank"
                className="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 sm:inline-flex"
              >
                {t("playTelegram")}
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[64px] w-0" />
    </Fragment>
  );
};

export { Header };
