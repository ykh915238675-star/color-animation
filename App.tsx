import React from "react";
import { FluidBackground } from "./components/FluidBackground";

// Static Palette updated:
// Added #FCDBCF (Peach) to the existing soft palette.
const STATIC_PALETTE = [
  "#FBCFE8", // Pink 200 (Soft Pink)
  "#E9D5FF", // Purple 200 (Soft Lavender)
  "#F3E8FF", // Purple 100 (Very Pale Purple)
  "#E0F2FE", // Sky 100 (Very faint blue)
  "#FFFFFF", // White (Diffuser)
  "#FCDBCF", // New Peach Color
];

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen font-sans overflow-hidden selection:bg-pink-100">
      {/* The Animated Background Layer */}
      <FluidBackground colors={STATIC_PALETTE} />

      {/* The Foreground Text Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-light text-slate-800 tracking-wide opacity-90 mix-blend-overlay">
          Hello, world
        </h1>
      </div>
    </div>
  );
};

export default App;