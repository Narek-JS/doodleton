import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ChevronRight,
  Coins,
  Gem,
  Gift,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

type InviteReward = {
  friends: string;
  reward: string;
};

type Faq = {
  question: string;
  answer: string;
};

const TELEGRAM_URL = "https://t.me/doodleTONgame";
const X_URL = "https://x.com/DoodleTON_";
const SITE_URL = "https://doodlton.com";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

const Home: React.FC<HomeProps> = async ({ params }) => {
  const { locale } = await params;
  const t = await getTranslations("landing");
  const common = await getTranslations("common");
  const campaignItems = t.raw("campaignItems") as Array<string>;
  const inviteRewards = t.raw("inviteRewards") as Array<InviteReward>;
  const steps = t.raw("steps") as Array<string>;
  const socialProof = t.raw("socialProof") as Array<string>;
  const faqs = t.raw("faqs") as Array<Faq>;

  const features = [
    { label: t("feature1"), icon: Rocket },
    { label: t("feature2"), icon: Coins },
    { label: t("feature3"), icon: Gem },
    { label: t("feature4"), icon: Trophy },
  ];

  const canonical = `${SITE_URL}/${locale}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "DoodleTON",
        url: SITE_URL,
        email: common("contact"),
        sameAs: [TELEGRAM_URL, X_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "DoodleTON",
        url: SITE_URL,
        inLanguage: locale,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "VideoGame",
        "@id": `${canonical}#game`,
        name: "DoodleTON",
        url: canonical,
        applicationCategory: "GameApplication",
        gamePlatform: "Telegram Mini App",
        genre: [
          "Telegram game",
          "TON blockchain game",
          "play-to-earn game",
          "vertical jumping game",
        ],
        description: t("heroDescription"),
        inLanguage: locale,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        sameAs: [TELEGRAM_URL, X_URL],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="relative overflow-hidden text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#060b1c]" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[130px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[130px]" />

      <section
        id="top"
        className="container relative mx-auto grid min-h-[calc(100vh-64px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24"
      >
        <div className="absolute bottom-20 left-1/3 hidden h-10 w-10 rotate-45 rounded-lg border border-fuchsia-300/30 bg-fuchsia-300/10 lg:block animate-float" />

        <div className="relative z-10 flex flex-col items-start">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
            <Sparkles size={16} />
            {t("eyebrow")}
          </div>

          <h1 className="max-w-4xl text-balance text-[54px] font-black leading-[0.95] tracking-[-0.06em] sm:text-[78px] lg:text-[96px]">
            <span className="block text-white">DoodleTON</span>
            <span className="block bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
              {t("heroTitle")}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {t("heroDescription")}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href={TELEGRAM_URL}
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 px-7 py-4 text-base font-black text-slate-950 shadow-[0_18px_60px_rgba(14,165,233,0.35)] transition hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(14,165,233,0.48)]"
            >
              {t("heroCta")}
              <ChevronRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={TELEGRAM_URL}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/8 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/12"
            >
              <Users size={19} />
              {t("secondaryCta")}
            </Link>
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-400">
            <ShieldCheck size={17} className="text-emerald-300" />
            {t("trust")}
          </p>

          <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["1st", t("statsPlayers")],
              ["SOON", t("statsCampaign")],
              ["EASY", t("statsRewards")],
              ["TG", t("statsBadges")],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"
              >
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[560px] justify-center lg:justify-end">
          <div className="absolute inset-0 rounded-full bg-purple-400/25 blur-[100px]" />
          <div className="relative w-full overflow-hidden rounded-[42px] border border-purple-200/20 bg-gradient-to-b from-slate-950/90 via-indigo-950/60 to-slate-950/90 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <div className="rounded-[32px] border border-purple-200/15 bg-gradient-to-b from-indigo-950/80 via-slate-950 to-purple-950/60 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-purple-200">
                    DoodleTON Coin
                  </p>
                  <p className="text-xs text-slate-400">{t("livePanelText")}</p>
                </div>
                <div className="rounded-full bg-purple-400/20 px-3 py-1 text-xs font-black text-purple-200">
                  SOON
                </div>
              </div>

              <div className="relative flex h-[480px] flex-col items-center justify-center overflow-hidden rounded-[26px] border border-purple-200/15 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.25),transparent_60%),linear-gradient(180deg,rgba(15,23,42,0.3),rgba(15,23,42,0.95))]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />

                <div className="absolute left-[12%] top-[12%] h-2.5 w-2.5 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(216,180,254,0.9)] animate-pulse" />
                <div className="absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(125,211,252,0.9)] animate-pulse" />
                <div className="absolute left-[20%] bottom-[28%] h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(240,171,252,0.9)] animate-pulse" />
                <div className="absolute right-[18%] bottom-[22%] h-2.5 w-2.5 rounded-full bg-yellow-200 shadow-[0_0_18px_rgba(254,240,138,0.9)] animate-pulse" />

                <div className="relative z-10 h-64 w-64">
                  <div className="absolute inset-0 scale-110 rounded-full bg-purple-500/35 blur-[50px]" />
                  <Image
                    src="/doodleImage.jpg"
                    alt="DoodleTON Coin"
                    fill
                    className="rounded-full object-cover shadow-[0_0_70px_rgba(168,85,247,0.55)] animate-float-slow"
                    priority
                  />
                </div>

                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                  {[
                    [t("livePanelTon"), "68%"],
                    [t("livePanelCoins"), "12.4K"],
                    [t("livePanelBadge"), "3/5"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 backdrop-blur-xl"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        {label}
                      </p>
                      <p className="mt-1 text-lg font-black text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto pb-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="group rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-200/10"
            >
              <Icon className="mb-5 text-cyan-200 transition group-hover:scale-110" />
              <p className="text-lg font-black">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="campaign" className="container mx-auto py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-10">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              DoodleTON
            </p>
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              {t("aboutTitle")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {t("aboutText")}
            </p>
            <p className="mt-6 rounded-3xl border border-cyan-200/20 bg-cyan-200/10 p-5 text-lg font-bold text-cyan-50">
              {t("aboutHighlight")}
            </p>
          </div>

          <div className="rounded-[36px] border border-fuchsia-200/15 bg-gradient-to-br from-fuchsia-400/12 via-white/[0.06] to-cyan-400/12 p-7 backdrop-blur-xl sm:p-10">
            <div className="mb-6 inline-flex rounded-full bg-fuchsia-300/15 px-4 py-2 text-sm font-black text-fuchsia-100">
              {t("eyebrow")}
            </div>
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              {t("campaignTitle")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              {t("campaignText")}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {campaignItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4"
                >
                  <BadgeCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-300"
                  />
                  <span className="font-semibold text-slate-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="rewards" className="container mx-auto py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            {t("rewardsTitle")}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {[
            { title: t("tonTitle"), text: t("tonText"), icon: Coins },
            { title: t("coinTitle"), text: t("coinText"), icon: Gem },
          ].map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[34px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-9"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/15 text-cyan-100">
                <Icon />
              </div>
              <h3 className="text-3xl font-black">{title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-black text-emerald-100">
              <Gift size={16} className="mr-2" />
              Referral Rewards
            </div>
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              {t("inviteTitle")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              {t("inviteText")}
            </p>
          </div>

          <div className="grid gap-4">
            {inviteRewards.map((item, index) => (
              <div
                key={item.friends}
                className="group flex items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-200/35 hover:bg-emerald-200/10"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-cyan-200">
                    {index + 1}
                  </div>
                  <p className="font-black text-white">{item.friends}</p>
                </div>
                <p className="text-right text-lg font-black text-emerald-200">
                  {item.reward}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 sm:py-24">
        <div className="rounded-[42px] border border-cyan-200/15 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_85%_35%,rgba(217,70,239,0.16),transparent_30%),rgba(255,255,255,0.06)] p-7 backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                {t("whyTitle")}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                {t("whyText")}
              </p>
              <p className="mt-6 text-2xl font-black text-cyan-100">
                {t("whyFinal")}
              </p>
            </div>
            <div className="grid gap-3">
              {socialProof.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4"
                >
                  <Zap size={20} className="shrink-0 text-yellow-200" />
                  <p className="font-semibold text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[36px] border border-purple-200/20 bg-gradient-to-b from-purple-950/30 via-slate-950/60 to-indigo-950/30 p-7 text-center backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.18),transparent_60%)]" />
            <div className="relative">
              <div className="relative mx-auto mb-8 h-52 w-52">
                <div className="absolute inset-0 scale-125 rounded-full bg-purple-400/30 blur-[70px]" />
                <Image
                  src="/doodleImage.jpg"
                  alt="DoodleTON Coin"
                  fill
                  className="rounded-full object-cover shadow-[0_0_60px_rgba(168,85,247,0.45)]"
                  priority
                />
              </div>
              <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                {t("coinLaunchTitle")}
              </h2>
              <p className="mx-auto mt-5 max-w-sm text-lg leading-8 text-slate-300">
                {t("coinLaunchText")}
              </p>
              <Link
                href={TELEGRAM_URL}
                target="_blank"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 px-7 py-4 text-base font-black text-slate-950 shadow-[0_18px_60px_rgba(14,165,233,0.35)] transition hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(14,165,233,0.48)]"
              >
                {t("coinLaunchCta")}
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>

          <div id="start" className="rounded-[36px] border border-white/10 bg-slate-950/50 p-7 backdrop-blur-xl sm:p-10">
            <h2 className="text-4xl font-black tracking-[-0.04em]">
              {t("stepsTitle")}
            </h2>
            <div className="mt-8 grid gap-3">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </div>
                  <p className="font-bold text-slate-100">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="container mx-auto py-16 sm:py-24">
        <div className="rounded-[42px] border border-white/10 bg-gradient-to-br from-sky-500/15 via-white/[0.06] to-fuchsia-500/15 p-7 text-center backdrop-blur-xl sm:p-12">
          <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            {t("communityTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {t("communityText")}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={TELEGRAM_URL}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1"
            >
              {common("playTelegram")}
            </Link>
            <Link
              href={X_URL}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white/15"
            >
              {common("followX")}
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto py-16 sm:py-24">
        <h2 className="text-center text-4xl font-black tracking-[-0.04em] sm:text-5xl">
          {t("faqTitle")}
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl open:border-cyan-200/30 open:bg-cyan-200/10"
            >
              <summary className="cursor-pointer list-none text-xl font-black">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container mx-auto pb-24 pt-10">
        <div className="relative overflow-hidden rounded-[44px] border border-cyan-200/20 bg-cyan-300 p-8 text-center text-slate-950 shadow-[0_30px_120px_rgba(34,211,238,0.25)] sm:p-12">
          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/35 blur-2xl" />
          <div className="absolute -bottom-16 right-10 h-44 w-44 rounded-full bg-fuchsia-300/45 blur-2xl" />
          <div className="relative">
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              {t("finalTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-slate-800">
              {t("finalText")}
            </p>
            <Link
              href={TELEGRAM_URL}
              target="_blank"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-slate-900"
            >
              {t("finalCta")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });
  const canonical = `${SITE_URL}/${locale}`;
  const ogImageUrl = `${canonical}/opengraph-image`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(",").map((keyword) => keyword.trim()),
    authors: [{ name: "DoodleTON", url: SITE_URL }],
    creator: "DoodleTON",
    publisher: "DoodleTON",
    category: "Game",
    classification:
      "Telegram Mini App, TON blockchain game, play-to-earn game, crypto rewards game",
    referrer: "origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en`,
        ru: `${SITE_URL}/ru`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      siteName: t("ogSiteName"),
      url: canonical,
      locale,
      alternateLocale: locale === "en" ? "ru" : "en",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      site: "@DoodleTON_",
      creator: "@DoodleTON_",
      images: [ogImageUrl],
    },
    other: {
      "telegram:channel": TELEGRAM_URL,
      "x:profile": X_URL,
      "theme-color": "#06b6d4",
      "msapplication-TileColor": "#060b1c",
    },
  };
}
