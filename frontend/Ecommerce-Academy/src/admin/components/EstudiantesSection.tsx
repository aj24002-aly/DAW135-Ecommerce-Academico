import React, { useState } from "react";
import type { Estudiante, TabCRUD, EstadoEstudiante } from "../types";
import { ESTUDIANTES_MOCK } from "../mockData";
import Badge from "./Badge";
import StatsRow from "./StatsRow";
import DeleteConfirm from "./DeleteConfirm";

const ESTADOS: EstadoEstudiante[] = ["Activo", "Inactivo"];

const EMPTY: Omit<Estudiante, "id"> = {
  nombre: "", apellido: "", email: "", telefono: "",
  estado: "Activo", fechaRegistro: new Date().toISOString().split("T")[0],
};

const inputStyle: React.CSSProperties = {
  padding: "8px 10px", border: "0.5px solid #e8eaed",
  borderRadius: 8, fontSize: 13, width: "100%",
  fontFamily: "inherit", color: "#202124", background: "#fff",
};

const labelStyle: React.CSSProperties = {
  fontSize: 12, color: "#5f6368", fontWeight: 500, marginBottom: 4, display: "block",
};

const EndpointBadge: React.FC<{ method: string; path: string; color: string; bg: string }> = ({ method, path, color, bg }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontFamily: "monospace", background: bg, color, padding: "3px 10px", borderRadius: 4, marginBottom: 16 }}>
    ➜ {method} {path}
  </div>
);

const Avatar: React.FC<{ nombre: string; apellido: string }> = ({ nombre, apellido }) => (
  <div style={{
    width: 32, height: 32, borderRadius: "50%",
    background: "#e1f5ee", color: "#0f6e56",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 12, fontWeight: 500, flexShrink: 0,
  }}>
    {nombre[0]}{apellido[0]}
  </div>
);

/* ── LISTAR ── */
const EstudiantesListar: React.FC<{
  estudiantes: Estudiante[];
  onEditar: (e: Estudiante) => void;
  onEliminar: (e: Estudiante) => void;
}> = ({ estudiantes, onEditar, onEliminar }) => (
  <div>
    <EndpointBadge method="GET" path="/api/estudiantes" color="#3b6d11" bg="#eaf3de" />
    <StatsRow stats={[
      { label: "Total estudiantes", value: estudiantes.length, color: "#1a9e96" },
      { label: "Activos",           value: estudiantes.filter(e => e.estado === "Activo").length, color: "#3b6d11" },
      { label: "Inactivos",         value: estudiantes.filter(e => e.estado === "Inactivo").length, color: "#5f6368" },
    ]} />
    <div style={{ background: "#fff", border: "0.5px solid #e8eaed", borderRadius: 12, overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #e8eaed" }}>
        <span style={{ fontWeight: 500, fontSize: 14 }}>Listado de estudiantes</span>
        <span style={{ fontSize: 12, color: "#5f6368" }}>{estudiantes.length} registros</span>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#f8f9fa" }}>
              {["ID","Estudiante","Email","Teléfono","Registro","Estado","Acciones"].map(h => (
                <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 500, fontSize: 12, color: "#5f6368", borderBottom: "0.5px solid #e8eaed" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {estudiantes.map(e => (
              <tr key={e.id} style={{ borderBottom: "0.5px solid #f1f3f4" }}>
                <td style={{ padding: "10px 14px", color: "#9aa0a6" }}>#{e.id.toString().padStart(3,"0")}</td>
                <td style={{ padding: "10px 14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Avatar nombre={e.nombre} apellido={e.apellido} />
                    <span style={{ fontWeight: 500 }}>{e.nombre} {e.apellido}</span>
                  </div>
                </td>
                <td style={{ padding: "10px 14px", color: "#185fa5" }}>{e.email}</td>
                <td style={{ padding: "10px 14px" }}>{e.telefono}</td>
                <td style={{ padding: "10px 14px", color: "#5f6368" }}>{e.fechaRegistro}</td>
                <td style={{ padding: "10px 14px" }}><Badge label={e.estado} /></td>
                <td style={{ padding: "10px 14px" }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={() => onEditar(e)} title="Editar" style={{ border: "0.5px solid #e8eaed", background: "none", borderRadius: 6, width: 28, height: 28, cursor: "pointer", fontSize: 14 }}>✏️</button>
                    <button onClick={() => onEliminar(e)} title="Eliminar" style={{ border: "0.5px solid #f09595", background: "none", borderRadius: 6, width: 28, height: 28, cursor: "pointer", fontSize: 14 }}>🗑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

/* ── FORM ── */
const EstudianteForm: React.FC<{
  inicial: Omit<Estudiante, "id">;
  modo: "crear" | "editar";
  onGuardar: (data: Omit<Estudiante, "id">) => void;
  onCancelar: () => void;
}> = ({ inicial, modo, onGuardar, onCancelar }) => {
  const [form, setForm] = useState(inicial);
  const set = (k: keyof typeof form, v: string) => setForm(p => ({ ...p, [k]: v }));

  const method = modo === "crear" ? "POST" : "PUT";
  const path   = modo === "crear" ? "/api/estudiantes" : "/api/estudiantes/:id";
  const bg     = modo === "crear" ? "#e6f1fb" : "#faeeda";
  const color  = modo === "crear" ? "#185fa5" : "#854f0b";

  return (
    <div>
      <EndpointBadge method={method} path={path} color={color} bg={bg} />
      <div style={{ background: "#fff", border: "0.5px solid #e8eaed", borderRadius: 12, padding: 20, maxWidth: 560 }}>
        <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 16 }}>
          {modo === "crear" ? "➕ Nuevo estudiante" : "✏️ Editar estudiante"}
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div><label style={labelStyle}>Nombre</label><input style={inputStyle} value={form.nombre} onChange={e => set("nombre", e.target.value)} placeholder="Pedro" /></div>
          <div><label style={labelStyle}>Apellido</label><input style={inputStyle} value={form.apellido} onChange={e => set("apellido", e.target.value)} placeholder="García" /></div>
          <div style={{ gridColumn: "1 / -1" }}><label style={labelStyle}>Email</label><input style={inputStyle} type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="correo@ejemplo.com" /></div>
          <div><label style={labelStyle}>Teléfono</label><input style={inputStyle} value={form.telefono} onChange={e => set("telefono", e.target.value)} placeholder="7777-0000" /></div>
          <div>
            <label style={labelStyle}>Estado</label>
            <select style={inputStyle} value={form.estado} onChange={e => set("estado", e.target.value as EstadoEstudiante)}>
              {ESTADOS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div style={{ gridColumn: "1 / -1" }}><label style={labelStyle}>Fecha de registro</label><input style={inputStyle} type="date" value={form.fechaRegistro} onChange={e => set("fechaRegistro", e.target.value)} /></div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
          <button onClick={() => onGuardar(form)} style={{ background: "#2ebcb3", color: "#fff", border: "none", padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
            ✔ {modo === "crear" ? "Crear estudiante" : "Guardar cambios"}
          </button>
          <button onClick={onCancelar} style={{ background: "none", color: "#5f6368", border: "0.5px solid #e8eaed", padding: "8px 20px", borderRadius: 8, fontSize: 13, cursor: "pointer" }}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

/* ── MAIN ── */
const EstudiantesSection: React.FC = () => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>(ESTUDIANTES_MOCK);
  const [tab, setTab]     = useState<TabCRUD>("listar");
  const [selected, setSelected] = useState<Estudiante | null>(null);

  const tabs: { key: TabCRUD; label: string }[] = [
    { key: "listar", label: "Listar" }, { key: "crear", label: "Crear" },
    { key: "editar", label: "Editar" }, { key: "eliminar", label: "Eliminar" },
  ];

  const handleCrear = (data: Omit<Estudiante, "id">) => {
    const newId = Math.max(...estudiantes.map(e => e.id)) + 1;
    setEstudiantes(p => [...p, { id: newId, ...data }]);
    setTab("listar");
  };

  const handleEditar = (data: Omit<Estudiante, "id">) => {
    if (!selected) return;
    setEstudiantes(p => p.map(e => e.id === selected.id ? { ...e, ...data } : e));
    setTab("listar");
  };

  const handleEliminar = () => {
    if (!selected) return;
    setEstudiantes(p => p.filter(e => e.id !== selected.id));
    setSelected(null);
    setTab("listar");
  };

  const abrirEditar   = (e: Estudiante) => { setSelected(e); setTab("editar"); };
  const abrirEliminar = (e: Estudiante) => { setSelected(e); setTab("eliminar"); };

  return (
    <div>
      <div style={{ display: "flex", gap: 4, marginBottom: 16, background: "#fff", border: "0.5px solid #e8eaed", borderRadius: 10, padding: 4, width: "fit-content" }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{
            padding: "6px 16px", borderRadius: 7, fontSize: 12, cursor: "pointer", border: "none",
            background: tab === t.key ? "#2ebcb3" : "none",
            color: tab === t.key ? "#fff" : "#5f6368",
            fontWeight: tab === t.key ? 500 : 400,
          }}>{t.label}</button>
        ))}
      </div>

      {tab === "listar"   && <EstudiantesListar estudiantes={estudiantes} onEditar={abrirEditar} onEliminar={abrirEliminar} />}
      {tab === "crear"    && <EstudianteForm modo="crear" inicial={EMPTY} onGuardar={handleCrear} onCancelar={() => setTab("listar")} />}
      {tab === "editar"   && (selected
        ? <EstudianteForm modo="editar" inicial={selected} onGuardar={handleEditar} onCancelar={() => setTab("listar")} />
        : <EstudiantesListar estudiantes={estudiantes} onEditar={abrirEditar} onEliminar={abrirEliminar} />
      )}
      {tab === "eliminar" && (selected
        ? <DeleteConfirm
            titulo="Eliminar estudiante"
            descripcion={`¿Estás seguro que deseas eliminar a "${selected.nombre} ${selected.apellido}"? Se perderán sus inscripciones.`}
            detalle={{ ID: `#${selected.id.toString().padStart(3,"0")}`, Nombre: `${selected.nombre} ${selected.apellido}`, Email: selected.email }}
            endpoint="/api/estudiantes/:id"
            onCancel={() => setTab("listar")}
            onConfirm={handleEliminar}
          />
        : <EstudiantesListar estudiantes={estudiantes} onEditar={abrirEditar} onEliminar={abrirEliminar} />
      )}
    </div>
  );
};

export default EstudiantesSection;
