import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DoodleTON - Telegram TON Game",
    short_name: "DoodleTON",
    description:
      "Play DoodleTON on Telegram, collect DoodleTON Coins, build TON Progress and join the Founder Campaign before launch.",
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#060b1c",
    theme_color: "#06b6d4",
    categories: ["games", "entertainment", "crypto", "web3"],
  };
}
