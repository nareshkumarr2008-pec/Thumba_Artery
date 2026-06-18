import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring, AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

const { fontFamily } = loadFont("normal", { weights: ["400", "700"], subsets: ["latin"] });
const { fontFamily: monoFamily } = loadMono("normal", { weights: ["400"], subsets: ["latin"] });

export const SceneCRI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 15, stiffness: 120 } });
  const formulaSpring = spring({ frame: frame - 25, fps, config: { damping: 12, stiffness: 80 } });
  const barSpring = spring({ frame: frame - 50, fps, config: { damping: 10, stiffness: 60 } });

  const formulaLines = [
    "CRI = w₁ · betweenness",
    "    + w₂ · (1 − redundancy)",
    "    + w₃ · population_served",
    "    + w₄ · hazard_overlap",
    "    + w₅ · POI_proximity",
  ];

  const weights = [
    { label: "Resilient", color: "#1d4ed8" },
    { label: "Watch", color: "#06b6d4" },
    { label: "Alert", color: "#facc15" },
    { label: "Critical", color: "#f97316" },
    { label: "Severe", color: "#ef4444" },
  ];

  return (
    <AbsoluteFill style={{ padding: "80px 120px", display: "flex", gap: 60 }}>
      <div style={{ flex: 1 }}>
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
          The Score
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
            opacity: titleSpring,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [20, 0])}px)`,
            marginBottom: 30,
          }}
        >
          Criticality & Resilience Index
        </h2>

        <p
          style={{
            fontFamily,
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.6,
            maxWidth: 600,
            opacity: titleSpring,
            marginBottom: 40,
          }}
        >
          A betweenness number is a CS assignment. CRI is a decision-support score — it bakes in{" "}
          <span style={{ color: "#fff" }}>who lives there, what's nearby, and what could go wrong.</span>
        </p>

        {/* Formula box */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(6,182,212,0.2)",
            borderRadius: 16,
            padding: 32,
            opacity: formulaSpring,
            transform: `translateY(${interpolate(formulaSpring, [0, 1], [30, 0])}px)`,
          }}
        >
          <div
            style={{
              fontFamily: monoFamily,
              fontSize: 11,
              letterSpacing: "0.25em",
              color: "#06B6D4",
              marginBottom: 16,
            }}
          >
            CRI FORMULA
          </div>
          <pre
            style={{
              fontFamily: monoFamily,
              fontSize: 20,
              color: "#fff",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {formulaLines.join("\n")}
          </pre>
        </div>
      </div>

      {/* Right side: gradient bar */}
      <div
        style={{
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          opacity: barSpring,
        }}
      >
        {weights.map((w, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: w.color,
              borderRadius: 4,
              opacity: interpolate(barSpring, [0, 1], [0, 1]),
              transform: `scaleY(${interpolate(barSpring, [0, 1], [0, 1])})`,
              transformOrigin: "bottom",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
