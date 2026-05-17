import React from "react";

interface StatItem {
  label: string;
  value: number | string;
  color: string;
}

interface StatsRowProps {
  stats: StatItem[];
}

const StatsRow: React.FC<StatsRowProps> = ({ stats }) => (
  <div style={{ display: "grid", gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 12, marginBottom: 20 }}>
    {stats.map((s) => (
      <div key={s.label} style={{
        background: "var(--white, #fff)",
        border: "0.5px solid #e8eaed",
        borderRadius: 10,
        padding: "14px 16px",
      }}>
        <div style={{ fontSize: 12, color: "#5f6368", marginBottom: 6 }}>{s.label}</div>
        <div style={{ fontSize: 22, fontWeight: 500, color: s.color }}>{s.value}</div>
      </div>
    ))}
  </div>
);

export default StatsRow;
