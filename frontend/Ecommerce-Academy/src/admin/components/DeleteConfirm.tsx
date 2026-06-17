import React from "react";

interface DeleteConfirmProps {
  titulo: string;
  descripcion: string;
  detalle: Record<string, string | number>;
  endpoint: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({
  titulo, descripcion, detalle, endpoint, onCancel, onConfirm,
}) => (
  <div>
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontSize: 11, fontFamily: "monospace",
      background: "#fcebeb", color: "#a32d2d",
      padding: "3px 10px", borderRadius: 4, marginBottom: 16,
    }}>
      ➜ DELETE {endpoint}
    </div>

    <div style={{
      maxWidth: 420,
      background: "#fff",
      border: "0.5px solid #f09595",
      borderRadius: 12,
      padding: 24,
      textAlign: "center",
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: "50%",
        background: "#fcebeb", display: "flex",
        alignItems: "center", justifyContent: "center",
        margin: "0 auto 14px", fontSize: 24, color: "#a32d2d",
      }}>🗑</div>

      <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 8 }}>{titulo}</h3>
      <p style={{ fontSize: 13, color: "#5f6368", marginBottom: 20, lineHeight: 1.6 }}>{descripcion}</p>

      <div style={{
        background: "#f8f9fa", borderRadius: 8,
        padding: "10px 14px", marginBottom: 20,
        textAlign: "left", fontSize: 12, color: "#5f6368",
      }}>
        {Object.entries(detalle).map(([k, v]) => (
          <div key={k}><strong style={{ color: "#202124" }}>{k}:</strong> {v}</div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        <button onClick={onConfirm} style={{
          background: "#e24b4a", color: "#fff", border: "none",
          padding: "8px 20px", borderRadius: 8,
          fontSize: 13, fontWeight: 500, cursor: "pointer",
        }}>
          Sí, eliminar
        </button>
        <button onClick={onCancel} style={{
          background: "none", color: "#5f6368",
          border: "0.5px solid #e8eaed",
          padding: "8px 20px", borderRadius: 8,
          fontSize: 13, cursor: "pointer",
        }}>
          Cancelar
        </button>
      </div>
    </div>
  </div>
);

export default DeleteConfirm;
