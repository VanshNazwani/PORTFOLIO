// src/components/LeetCodeHeatmap.jsx
export const LeetCodeHeatmap = ({ username = "vanshnazwani4705", refreshIntervalMs = 0 }) => {
  // refreshIntervalMs: if >0, the component will re-render the img src at that interval (ms)
  const srcBase = `https://leetcard.jacoblin.cool/${username}?theme=transparent&font=ABeeZee&ext=heatmap`;

  // build src with timestamp query param to avoid caching
  const [ts, setTs] = React.useState(Date.now());
  React.useEffect(() => {
    if (refreshIntervalMs > 0) {
      const id = setInterval(() => setTs(Date.now()), refreshIntervalMs);
      return () => clearInterval(id);
    }
  }, [refreshIntervalMs]);

  const src = `${srcBase}&t=${ts}`;

  return (
    <section id="leetcode" className="py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          My <span className="text-primary">LeetCode</span> Heatmap
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Live-updating heatmap (refreshes when the page loads, and optionally every few minutes).
        </p>

        <div className="flex justify-center">
          <img
            src={src}
            alt={`LeetCode heatmap for ${username}`}
            className="w-full max-w-3xl rounded-lg shadow-md"
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};
