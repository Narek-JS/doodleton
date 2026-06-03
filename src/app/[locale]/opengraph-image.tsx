import { ImageResponse } from "next/og";

export const alt = "DoodleTON - Jump. Collect. Earn.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #060b1c 0%, #0f172a 56%, #312e81 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "#67e8f9",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Telegram TON Game
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              fontWeight: 900,
              letterSpacing: -6,
              lineHeight: 0.92,
            }}
          >
            <span>DoodleTON</span>
            <span style={{ color: "#bae6fd" }}>Jump. Collect. Earn.</span>
          </div>
          <div style={{ color: "#cbd5e1", fontSize: 34, lineHeight: 1.25 }}>
            Collect DoodleTON Coins, build TON Progress, unlock Founder Badges.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            background: "linear-gradient(135deg, #fde68a, #67e8f9, #f0abfc)",
            borderRadius: 64,
            boxShadow: "0 28px 90px rgba(34, 211, 238, 0.42)",
            color: "#020617",
            display: "flex",
            fontSize: 170,
            fontWeight: 900,
            height: 260,
            justifyContent: "center",
            width: 260,
          }}
        >
          D
        </div>
      </div>
    ),
    size
  );
}
