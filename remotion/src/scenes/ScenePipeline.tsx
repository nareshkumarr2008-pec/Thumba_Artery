import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring, AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

const { fontFamily } = loadFont("normal", { weights: ["400", "700"], subsets: ["latin"] });
const { fontFamily: monoFamily } = loadMono("normal", { weights: ["400"], subsets: ["latin"] });

const layers = [
  {
    num: "01",
    tag: "PERCEPTION",
    h: "See through the cloud",
    p: "Tri-modal fusion of optical, SAR, and DEM imagery with generative in-painting for occluded segments.",
    color: "#06B6D4",
  },
  {
    num: "02",
    tag: "COGNITION",
    h: "Score what matters",
    p: "Raster → topological graph. Betweenness, bridges, and population fused into the Criticality & Resilience Index.",
    color: "#F59E0B",
  },
  {
    num: "03",
    tag: "DECISION",
    h: "Answer in plain language",
    p: "Cascading-failure simulation, resilience-per-rupee optimizer, and a RAG assistant for planners.",
    color: "#EF4444",
  },
];

export const ScenePipeline: React.FC = () => {
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
        The Pipeline
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
          marginBottom: 60,
        }}
      >
        Three layers. One pulse.
      </h2>

      {/* Arrow connector */}
      <div style={{ display: "flex", alignItems: "stretch", gap: 20 }}>
        {layers.map((l, i) => {
          const cardSpring = spring({ frame: frame - (15 + i * 20), fps, config: { damping: 14, stiffness: 100 } });
          return (
            <React.Fragment key={i}>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${l.color}30`,
                  borderRadius: 20,
                  padding: 40,
                  opacity: cardSpring,
                  transform: `translateY(${interpolate(cardSpring, [0, 1], [40, 0])}px)`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Giant number */}
                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    right: 20,
                    fontFamily,
                    fontSize: 120,
                    fontWeight: 700,
                    color: `${l.color}10`,
                    lineHeight: 1,
                  }}
                >
                  {l.num}
                </div>
                <div
                  style={{
                    fontFamily: monoFamily,
                    fontSize: 12,
                    letterSpacing: "0.25em",
                    color: l.color,
                    marginBottom: 12,
                  }}
                >
                  {l.tag}
                </div>
                <h3
                  style={{
                    fontFamily,
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 16,
                    lineHeight: 1.2,
                  }}
                >
                  {l.h}
                </h3>
                <p
                  style={{
                    fontFamily,
                    fontSize: 17,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.6,
                  }}
                >
                  {l.p}
                </p>
              </div>
              {i < layers.length - 1 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#06B6D4",
                    fontSize: 28,
                    opacity: spring({ frame: frame - (40 + i * 20), fps, config: { damping: 10 } }),
                  }}
                >
                  →
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
