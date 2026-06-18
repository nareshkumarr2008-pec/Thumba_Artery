import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring, AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";
import { Img, staticFile } from "remotion";

const { fontFamily } = loadFont("normal", { weights: ["400", "700"], subsets: ["latin"] });
const { fontFamily: monoFamily } = loadMono("normal", { weights: ["400"], subsets: ["latin"] });

const deployments = [
  { h: "PM Gati Shakti", p: "Resilience-scoring layer for the National Master Plan." },
  { h: "NDMA & SDMAs", p: "Cascading-failure forecasts before cyclones or monsoons hit." },
  { h: "Smart Cities Mission", p: "Resilience-per-rupee optimizer for SPVs and State PWDs." },
];

export const SceneImpact: React.FC = () => {
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
        Deployment Path
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
        A resilience layer for India.
      </h2>

      {/* Deployment cards */}
      <div style={{ display: "flex", gap: 24, marginBottom: 60 }}>
        {deployments.map((d, i) => {
          const cardSpring = spring({ frame: frame - (20 + i * 15), fps, config: { damping: 14, stiffness: 100 } });
          return (
            <div
              key={i}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(6,182,212,0.15)",
                borderRadius: 16,
                padding: 32,
                opacity: cardSpring,
                transform: `translateY(${interpolate(cardSpring, [0, 1], [30, 0])}px)`,
              }}
            >
              <h3
                style={{
                  fontFamily,
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 12,
                }}
              >
                {d.h}
              </h3>
              <p
                style={{
                  fontFamily,
                  fontSize: 16,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                }}
              >
                {d.p}
              </p>
            </div>
          );
        })}
      </div>

      {/* Team section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
          marginTop: 20,
        }}
      >
        <div
          style={{
            opacity: spring({ frame: frame - 60, fps, config: { damping: 12 } }),
            transform: `scale(${interpolate(spring({ frame: frame - 60, fps, config: { damping: 12 } }), [0, 1], [0.8, 1])})`,
          }}
        >
          <Img
            src={staticFile("images/team-logo.png")}
            style={{ width: 80, height: 80, borderRadius: 16, border: "2px solid rgba(6,182,212,0.4)" }}
          />
        </div>
        <div
          style={{
            opacity: spring({ frame: frame - 70, fps, config: { damping: 12 } }),
          }}
        >
          <div
            style={{
              fontFamily,
              fontSize: 36,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Thumba Titans
          </div>
          <div
            style={{
              fontFamily: monoFamily,
              fontSize: 13,
              color: "#F59E0B",
              letterSpacing: "0.2em",
              marginTop: 6,
            }}
          >
            FROM THUMBA · WHERE INDIA'S JOURNEY TO SPACE BEGAN
          </div>
        </div>
      </div>

      {/* Closing tagline */}
      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          fontFamily,
          fontSize: 22,
          color: "rgba(255,255,255,0.5)",
          opacity: spring({ frame: frame - 80, fps, config: { damping: 12 } }),
        }}
      >
        Using ISRO's satellite heritage to give Indian cities{" "}
        <span style={{ color: "#06B6D4" }}>foresight before the storm hits.</span>
      </div>
    </AbsoluteFill>
  );
};
