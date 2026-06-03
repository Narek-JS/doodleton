import { Mail, Send, Twitter } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const Footer: React.FC = async () => {
  const t = await getTranslations("common");

  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/95 pb-8 pt-12">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Link href="/#top" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-200 to-fuchsia-300 text-xl font-black text-slate-950">
                D
              </span>
              <span className="text-2xl font-black tracking-[-0.04em] text-white">
                {t("brand")}
              </span>
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
              {t("disclaimer")}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-slate-500">
                DoodleTON
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/#campaign"
                  className="font-bold text-slate-300 transition hover:text-white"
                >
                  {t("campaign")}
                </Link>
                <Link
                  href="/#rewards"
                  className="font-bold text-slate-300 transition hover:text-white"
                >
                  {t("rewards")}
                </Link>
                <Link
                  href="/#start"
                  className="font-bold text-slate-300 transition hover:text-white"
                >
                  {t("howToStart")}
                </Link>
                <Link
                  href="/#faq"
                  className="font-bold text-slate-300 transition hover:text-white"
                >
                  {t("faq")}
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-slate-500">
                {t("community")}
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="https://t.me/doodleTONgame"
                  target="_blank"
                  className="inline-flex items-center gap-2 font-bold text-slate-300 transition hover:text-white"
                >
                  <Send size={17} />
                  {t("playTelegram")}
                </Link>
                <Link
                  href="https://x.com/DoodleTON_"
                  target="_blank"
                  className="inline-flex items-center gap-2 font-bold text-slate-300 transition hover:text-white"
                >
                  <Twitter size={17} />
                  {t("followX")}
                </Link>
                <Link
                  href={`mailto:${t("contact")}`}
                  className="inline-flex items-center gap-2 font-bold text-slate-300 transition hover:text-white"
                >
                  <Mail size={17} />
                  {t("contact")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("rights")}</p>
          <div className="flex gap-4">
            <Link
              href="https://t.me/doodleTONgame"
              target="_blank"
              className="transition hover:text-white"
            >
              Telegram
            </Link>
            <Link
              href="https://x.com/DoodleTON_"
              target="_blank"
              className="transition hover:text-white"
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
