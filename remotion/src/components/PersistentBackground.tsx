import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";

export const PersistentBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow drifting grid effect
  const gridOffset = interpolate(frame, [0, 600], [0, 64], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#0B1120",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          height: "80%",
          background:
            "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.08) 0%, transparent 60%)",
        }}
      />
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          backgroundPosition: `${gridOffset}px ${gridOffset}px`,
        }}
      />
    </div>
  );
};
