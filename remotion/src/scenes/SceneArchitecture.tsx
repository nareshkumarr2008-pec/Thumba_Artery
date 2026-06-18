import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring, AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

const { fontFamily } = loadFont("normal", { weights: ["400", "700"], subsets: ["latin"] });
const { fontFamily: monoFamily } = loadMono("normal", { weights: ["400"], subsets: ["latin"] });

const rows = [
  { layer: "SOURCES", items: ["Bhuvan / NRSC", "ResourceSat LISS-IV", "RISAT SAR", "Sentinel-2 / OSM", "WorldPop / Census"] },
  { layer: "PERCEPTION", items: ["Tri-modal Fusion", "Occlusion-Aware Seg.", "Generative In-paint", "Raster → Vector"] },
  { layer: "COGNITION", items: ["Graph Construction", "Graph-Theory Metrics", "Consequence Weighting", "CRI Score"] },
  { layer: "DECISION", items: ["Failure Simulator", "Investment Optimizer", "RAG + LLM Assistant"] },
  { layer: "APPLICATION", items: ["FastAPI Services", "React + MapLibre", "deck.gl Digital Twin", "Field Verification"] },
];

export const SceneArchitecture: React.FC = () => {
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
        System Architecture
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
          marginBottom: 50,
        }}
      >
        A defensible, end-to-end pipeline.
      </h2>

      {/* Architecture rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {rows.map((r, i) => {
          const rowSpring = spring({ frame: frame - (10 + i * 12), fps, config: { damping: 14, stiffness: 100 } });
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                opacity: rowSpring,
                transform: `translateX(${interpolate(rowSpring, [0, 1], [60, 0])}px)`,
              }}
            >
              {/* Layer label */}
              <div
                style={{
                  fontFamily: monoFamily,
                  fontSize: 12,
                  letterSpacing: "0.25em",
                  color: "#06B6D4",
                  width: 140,
                  flexShrink: 0,
                }}
              >
                {r.layer}
              </div>

              {/* Arrow */}
              <div style={{ color: "rgba(6,182,212,0.4)", fontSize: 16 }}>→</div>

              {/* Items */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {r.items.map((it, j) => (
                  <div
                    key={j}
                    style={{
                      fontFamily,
                      fontSize: 15,
                      color: "rgba(255,255,255,0.85)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      padding: "10px 18px",
                    }}
                  >
                    {it}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom flow text */}
      <div
        style={{
          fontFamily: monoFamily,
          fontSize: 12,
          color: "rgba(255,255,255,0.3)",
          textAlign: "center",
          marginTop: 40,
          letterSpacing: "0.15em",
        }}
      >
        SOURCES → PERCEPTION → COGNITION → DECISION → APPLICATION · feedback loop via field verification
      </div>
    </AbsoluteFill>
  );
};
