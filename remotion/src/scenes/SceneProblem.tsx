import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring, AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

const { fontFamily } = loadFont("normal", { weights: ["400", "700"], subsets: ["latin"] });
const { fontFamily: monoFamily } = loadMono("normal", { weights: ["400"], subsets: ["latin"] });

const challenges = [
  { h: "Clouds blind the satellite", p: "Monsoon cover hides 60% of road surfaces in optical imagery — exactly when disaster mapping matters most." },
  { h: "OSM is silent where it counts", p: "Crowdsourced maps are sparse in rural and disaster-prone regions, and don't refresh after floods or landslides." },
  { h: "Graph theory ≠ decisions", p: "A betweenness number means nothing to a District Collector. They need human impact, not abstract math." },
];

export const SceneProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 15, stiffness: 120 } });

  return (
    <AbsoluteFill style={{ padding: "80px 120px" }}>
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: monoFamily,
          fontSize: 14,
          letterSpacing: "0.3em",
          color: "#06B6D4",
          textTransform: "uppercase",
          opacity: titleSpring,
          marginBottom: 16,
        }}
      >
        The Problem
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily,
          fontSize: 52,
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          maxWidth: 900,
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [20, 0])}px)`,
          marginBottom: 60,
        }}
      >
        Roads vanish exactly when cities need them most.
      </h2>

      {/* Three challenge cards */}
      <div style={{ display: "flex", gap: 24 }}>
        {challenges.map((c, i) => {
          const cardSpring = spring({ frame: frame - (20 + i * 15), fps, config: { damping: 14, stiffness: 100 } });
          return (
            <div
              key={i}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(6,182,212,0.2)",
                borderRadius: 16,
                padding: 32,
                opacity: cardSpring,
                transform: `translateY(${interpolate(cardSpring, [0, 1], [40, 0])}px)`,
              }}
            >
              <div
                style={{
                  fontFamily: monoFamily,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: "#F59E0B",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Challenge {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontFamily,
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                {c.h}
              </h3>
              <p
                style={{
                  fontFamily,
                  fontSize: 16,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                }}
              >
                {c.p}
              </p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
