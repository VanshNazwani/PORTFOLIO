import React from "react";

export const LeetCodeHeatmap = ({ username = "vanshnazwani4705", refreshIntervalMs = 0 }) => {
  const srcBase = `https://leetcard.jacoblin.cool/${username}?theme=dark&font=ABeeZee&ext=heatmap`;

  const [ts, setTs] = React.useState(Date.now());
  React.useEffect(() => {
    if (refreshIntervalMs > 0) {
      const id = setInterval(() => setTs(Date.now()), refreshIntervalMs);
      return () => clearInterval(id);
    }
  }, [refreshIntervalMs]);

  const src = `${srcBase}&t=${ts}`;

  return (
    <section id="leetcode" className="py-16 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          My <span className="text-yellow-400">LeetCode</span> Heatmap
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Live-updating heatmap of my LeetCode activity.
        </p>

        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden border-2 border-yellow-400 hover:scale-105 transition-transform duration-300 mb-16">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img
              src={src}
              alt={`LeetCode heatmap for ${username}`}
              className="w-full h-auto relative z-20"
              style={{ filter: "contrast(1.2) brightness(1.1)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
