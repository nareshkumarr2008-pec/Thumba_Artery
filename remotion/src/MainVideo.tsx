import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { SceneTitle } from "./scenes/SceneTitle";
import { SceneProblem } from "./scenes/SceneProblem";
import { ScenePipeline } from "./scenes/ScenePipeline";
import { SceneCRI } from "./scenes/SceneCRI";
import { SceneArchitecture } from "./scenes/SceneArchitecture";
import { SceneImpact } from "./scenes/SceneImpact";
import { PersistentBackground } from "./components/PersistentBackground";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#0B1120", overflow: "hidden" }}>
      <PersistentBackground />
      <TransitionSeries>
        {/* Scene 1: Title/Hero - 0 to 90 frames (3s) */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <SceneTitle />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Scene 2: The Problem - 90 to 220 frames (~4.3s) */}
        <TransitionSeries.Sequence durationInFrames={130}>
          <SceneProblem />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Scene 3: The Pipeline - 220 to 380 frames (~5.3s) */}
        <TransitionSeries.Sequence durationInFrames={160}>
          <ScenePipeline />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Scene 4: CRI Formula - 380 to 480 frames (~3.3s) */}
        <TransitionSeries.Sequence durationInFrames={100}>
          <SceneCRI />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Scene 5: Architecture - 480 to 580 frames (~3.3s) */}
        <TransitionSeries.Sequence durationInFrames={100}>
          <SceneArchitecture />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Scene 6: Impact + Team - 580 to 600 frames (~0.7s remaining) */}
        <TransitionSeries.Sequence durationInFrames={100}>
          <SceneImpact />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
