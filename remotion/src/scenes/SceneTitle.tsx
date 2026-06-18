import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring, AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";
import { Img, staticFile } from "remotion";

const { fontFamily } = loadFont("normal", { weights: ["400", "700"], subsets: ["latin"] });
const { fontFamily: monoFamily } = loadMono("normal", { weights: ["400"], subsets: ["latin"] });

export const SceneTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 10, fps, config: { damping: 15, stiffness: 120 } });
  const subtitleSpring = spring({ frame: frame - 25, fps, config: { damping: 15, stiffness: 120 } });
  const tagSpring = spring({ frame: frame - 40, fps, config: { damping: 15, stiffness: 120 } });
  const logoSpring = spring({ frame: frame - 5, fps, config: { damping: 12, stiffness: 100 } });

  const opacity = interpolate(frame, [75, 90], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity }}>
      {/* Logo */}
      <div
        style={{
          transform: `scale(${interpolate(logoSpring, [0, 1], [0.5, 1])})`,
          marginBottom: 40,
        }}
      >
        <Img
          src={staticFile("images/team-logo.png")}
          style={{ width: 100, height: 100, borderRadius: 16, border: "2px solid rgba(6,182,212,0.4)" }}
        />
      </div>

      {/* Badge */}
      <div
        style={{
          fontFamily: monoFamily,
          fontSize: 14,
          letterSpacing: "0.25em",
          color: "#06B6D4",
          textTransform: "uppercase",
          opacity: tagSpring,
          transform: `translateY(${interpolate(tagSpring, [0, 1], [20, 0])}px)`,
          marginBottom: 24,
        }}
      >
        <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#F59E0B", marginRight: 12, boxShadow: "0 0 12px rgba(245,158,11,0.6)" }} />
        ISRO Hackathon · Route Resilience Track
      </div>

      {/* Main Title */}
      <h1
        style={{
          fontFamily,
          fontSize: 96,
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          textAlign: "center",
          transform: `translateY(${interpolate(titleSpring, [0, 1], [40, 0])}px)`,
          opacity: titleSpring,
        }}
      >
        PRAHARI
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontFamily,
          fontSize: 36,
          fontWeight: 400,
          color: "rgba(255,255,255,0.7)",
          marginTop: 20,
          textAlign: "center",
          transform: `translateY(${interpolate(subtitleSpring, [0, 1], [30, 0])}px)`,
          opacity: subtitleSpring,
        }}
      >
        An <span style={{ color: "#06B6D4" }}>angiogram</span> for your city's arteries
      </p>

      {/* Bottom subtitle */}
      <p
        style={{
          fontFamily: monoFamily,
          fontSize: 13,
          color: "rgba(255,255,255,0.4)",
          marginTop: 60,
          letterSpacing: "0.15em",
          transform: `translateY(${interpolate(tagSpring, [0, 1], [20, 0])}px)`,
          opacity: tagSpring,
        }}
      >
        Team Thumba Titans · Where India's journey to space began
      </p>
    </AbsoluteFill>
  );
};
