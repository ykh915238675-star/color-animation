import React from "react";

interface FluidBackgroundProps {
  colors: string[];
}

export const FluidBackground: React.FC<FluidBackgroundProps> = ({ colors }) => {
  // Ensure we always have enough colors, falling back to white if undefined
  const safeColors = [...colors, "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-white">
      {/* Reduced overlay opacity further for clarity */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[30px] z-20 pointer-events-none" />

      {/* 
        Layout: Distributed across the screen (Corners + Center)
        Animation: Blobs will move significantly to blend with each other
      */}

      {/* Blob 1: Top Left - Pink */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[70vh] h-[70vh] rounded-full mix-blend-multiply filter blur-[60px] opacity-40 animate-blob"
        style={{ backgroundColor: safeColors[0] }}
      ></div>

      {/* Blob 2: Top Right - Lavender */}
      <div
        className="absolute top-[10%] -right-[10%] w-[70vh] h-[70vh] rounded-full mix-blend-multiply filter blur-[60px] opacity-40 animate-blob animation-delay-2000"
        style={{ backgroundColor: safeColors[1] }}
      ></div>

      {/* Blob 3: Bottom Left - Pale Purple */}
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[80vh] h-[80vh] rounded-full mix-blend-multiply filter blur-[60px] opacity-40 animate-blob animation-delay-4000"
        style={{ backgroundColor: safeColors[2] }}
      ></div>
      
       {/* Blob 4: Bottom Right - Faint Blue */}
      <div
        className="absolute -bottom-[10%] -right-[10%] w-[80vh] h-[80vh] rounded-full mix-blend-multiply filter blur-[70px] opacity-40 animate-blob animation-delay-6000"
        style={{ backgroundColor: safeColors[3] }}
      ></div>

      {/* Blob 5: Center - White/Diffuser */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-2000"
        style={{ backgroundColor: safeColors[4] }}
      ></div>

      {/* Blob 6: Floating Middle/Right - Peach (New Color) */}
      <div
        className="absolute top-[30%] right-[20%] w-[60vh] h-[60vh] rounded-full mix-blend-multiply filter blur-[70px] opacity-40 animate-blob animation-delay-4000"
        style={{ backgroundColor: safeColors[5] }}
      ></div>
    </div>
  );
};