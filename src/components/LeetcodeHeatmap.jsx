import React, { useEffect, useState } from "react";

const GQL_QUERY = `
  query getUserSubmissionStats($username: String!) {
    matchedUser(username: $username) {
      username
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;

const DEFAULT_USERNAME = "vanshnazwani4705";

export default function LeetcodeHeatmap({ initialUsername = DEFAULT_USERNAME }) {
  const [username, setUsername] = useState(initialUsername);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch automatically for the default username on mount
    if (initialUsername) {
      setUsername(initialUsername);
      fetchStats(initialUsername);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function fetchStats(user) {
    if (!user) return;
    setLoading(true);
    setError(null);
    setStats(null);
    try {
      const res = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: GQL_QUERY, variables: { username: user } }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const ac = data?.data?.matchedUser?.submitStats?.acSubmissionNum || [];

      const mapping = {};
      ac.forEach((row) => {
        if (row?.difficulty) mapping[row.difficulty.toLowerCase()] = Number(row.count || 0);
      });

      const easy = mapping["easy"] || 0;
      const medium = mapping["medium"] || 0;
      const hard = mapping["hard"] || 0;
      const total = mapping["all"] || easy + medium + hard;

      setStats({ easy, medium, hard, total });
    } catch (err) {
      console.error("LeetCode fetch error:", err);
      setError(
        "Could not fetch LeetCode stats directly (CORS or network error). The heatmap image will still display. See console for details."
      );
    } finally {
      setLoading(false);
    }
  }

  const heatmapSrc = username
    ? `https://leetcard.jacoblin.cool/${encodeURIComponent(username)}?theme=light&is_night=false&font=Inter&ts=${Date.now()}`
    : null;

  return (
    <section id="leetcode-heatmap" className="py-8 px-4 rounded-xl mx-auto max-w-6xl my-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">LeetCode — {username}</h2>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="p-3 rounded-lg">
              <div className="text-sm text-gray-500">Solved</div>
              <div className="text-xl font-bold">{stats ? stats.total : "—"}</div>
            </div>
            <div className="p-3 rounded-lg">
              <div className="text-sm text-gray-500">Easy</div>
              <div className="text-xl font-bold">{stats ? stats.easy : "—"}</div>
            </div>
            <div className="p-3 rounded-lg">
              <div className="text-sm text-gray-500">Medium</div>
              <div className="text-xl font-bold">{stats ? stats.medium : "—"}</div>
            </div>
          </div>

          <div className="space-y-3">
            <SkillBar label="Easy" count={stats?.easy || 0} total={stats?.total || 1} color="bg-teal-400" />
            <SkillBar label="Medium" count={stats?.medium || 0} total={stats?.total || 1} color="bg-yellow-400" />
            <SkillBar label="Hard" count={stats?.hard || 0} total={stats?.total || 1} color="bg-red-400" />
          </div>

          {error && <div className="mt-3 text-sm text-red-500">{error}</div>}
        </div>

        <div className="flex-1">
          <div className="p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Activity Heatmap</h3>
            {heatmapSrc ? (
              <img src={heatmapSrc} alt={`LeetCode heatmap for ${username}`} className="w-full rounded-md" />
            ) : (
              <div className="text-sm text-gray-600">Activity heatmap unavailable</div>
            )}
            <div className="mt-2 text-sm text-gray-500">Heatmap powered by leetcard.jacoblin.cool</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ label, count, total, color = "bg-primary" }) {
  const pct = Math.round((count / Math.max(1, total)) * 100);
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-medium">{label}</span>
        <span className="text-sm text-gray-600">{count} • {pct}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div className={`${color} h-full`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
