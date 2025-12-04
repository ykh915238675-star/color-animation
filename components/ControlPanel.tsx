import React, { useState } from "react";
import { Sparkles, Loader2, Palette } from "lucide-react";

interface ControlPanelProps {
  onGenerate: (mood: string) => Promise<void>;
  isLoading: boolean;
  currentPaletteName: string;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  onGenerate,
  isLoading,
  currentPaletteName,
}) => {
  const [mood, setMood] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mood.trim()) {
      onGenerate(mood);
    }
  };

  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl transition-all duration-300 hover:bg-white/30">
        
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-white/40 rounded-full shadow-sm">
            <Palette className="w-6 h-6 text-slate-800" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            Fluid Aurora
          </h1>
        </div>

        <p className="text-slate-700 mb-6 font-medium">
          Current Vibe: <span className="font-bold text-slate-900">{currentPaletteName}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="mood"
              className="block text-sm font-semibold text-slate-700 mb-2 ml-1"
            >
              Describe a mood or theme
            </label>
            <input
              type="text"
              id="mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="e.g. Cyberpunk, Deep Ocean, Peach Sunset..."
              className="w-full px-4 py-3 bg-white/50 border-0 rounded-xl text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:bg-white/70 transition-all outline-none backdrop-blur-sm"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !mood.trim()}
            className="w-full flex items-center justify-center py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Dreaming up colors...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Generate Background
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-xs text-center text-slate-600 font-medium opacity-80">
          Powered by Gemini 2.5 Flash
        </div>
      </div>
      
      {/* Decorative text at the bottom */}
      <div className="absolute bottom-8 text-center">
         <p className="text-slate-500/80 text-sm font-medium tracking-widest uppercase">Interactive React Background</p>
      </div>
    </div>
  );
};
