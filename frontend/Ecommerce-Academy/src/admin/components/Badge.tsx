import React from "react";

type BadgeVariant = "green" | "amber" | "gray" | "red" | "blue";

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  green:  { background: "#eaf3de", color: "#3b6d11" },
  amber:  { background: "#faeeda", color: "#854f0b" },
  gray:   { background: "#f1f3f4", color: "#5f6368" },
  red:    { background: "#fcebeb", color: "#a32d2d" },
  blue:   { background: "#e6f1fb", color: "#185fa5" },
};

const estadoVariant: Record<string, BadgeVariant> = {
  Activo:      "green",
  Próximo:     "amber",
  Inactivo:    "gray",
  Inscrito:    "blue",
  Completado:  "green",
  Cancelado:   "red",
};

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const Badge: React.FC<BadgeProps> = ({ label, variant }) => {
  const v = variant ?? estadoVariant[label] ?? "gray";
  return (
    <span style={{
      ...variantStyles[v],
      display: "inline-flex",
      alignItems: "center",
      padding: "2px 10px",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: 500,
    }}>
      {label}
    </span>
  );
};

export default Badge;
