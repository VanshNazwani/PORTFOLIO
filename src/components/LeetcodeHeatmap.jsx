import React from "react";

const DEFAULT_USERNAME = "vanshnazwani4705";

export default function LeetcodeHeatmap({ username = DEFAULT_USERNAME }) {
  const heatmapSrc = `https://leetcard.jacoblin.cool/${encodeURIComponent(
    username
  )}?theme=dark&font=Inter&ext=heatmap&is_transparent=true&ts=${Date.now()}`;

  return (
    <section
      id="leetcode-heatmap"
      className="py-20 px-4 mx-auto max-w-6xl my-12"
    >
      <h2 className="text-4xl font-bold mb-10 text-primary text-glow animate-fade-in">
        LeetCode Activity
      </h2>

      {/* Transparent Container */}
      <div className="flex justify-center animate-fade-in-delay-1">
        <img
          src={heatmapSrc}
          alt={`LeetCode heatmap for ${username}`}
          className="w-full max-w-3xl rounded-xl shadow-lg"
        />
      </div>

      <p className="mt-4 text-sm text-foreground/70 animate-fade-in-delay-2">
        Heatmap powered by{" "}
        <a
          href="https://leetcard.jacoblin.cool/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          leetcard.jacoblin.cool
        </a>
      </p>
    </section>
  );
}
