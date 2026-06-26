import React, { useState, useEffect } from "react";
import type { Curso, TabCRUD, EstadoCurso } from "../types";
import { listarCursos, crearCurso, actualizarCurso, eliminarCurso } from "../../data/cursoApi";
import Badge from "./Badge";
import StatsRow from "./StatsRow";
import DeleteConfirm from "./DeleteConfirm";

const CATEGORIAS = ["Diseño", "Desarrollo", "Marketing", "Data", "Negocios"];
const ESTADOS: EstadoCurso[] = ["Activo", "Próximo", "Inactivo"];

const EMPTY: Omit<Curso, "id"> = {
  nombre: "", instructor: "", categoria: "Diseño",
  estado: "Activo", duracion: 0, precio: 0, descripcion: "",
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
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 6,
    fontSize: 11, fontFamily: "monospace",
    background: bg, color,
    padding: "3px 10px", borderRadius: 4, marginBottom: 16,
  }}>
    ➜ {method} {path}
  </div>
);

/* ── LISTAR ── */
const CursosListar: React.FC<{
  cursos: Curso[];
  onEditar: (c: Curso) => void;
  onEliminar: (c: Curso) => void;
}> = ({ cursos, onEditar, onEliminar }) => (
  <div>
    <EndpointBadge method="GET" path="/api/cursos" color="#3b6d11" bg="#eaf3de" />
    <StatsRow stats={[
      { label: "Total cursos",       value: cursos.length,                              color: "#1a9e96" },
      { label: "Activos",            value: cursos.filter(c => c.estado === "Activo").length, color: "#3b6d11" },
      { label: "Precio promedio",    value: `$${(cursos.reduce((a, c) => a + c.precio, 0) / cursos.length).toFixed(2)}`, color: "#854f0b" },
    ]} />
    <div style={{ background: "#fff", border: "0.5px solid #e8eaed", borderRadius: 12, overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #e8eaed" }}>
        <span style={{ fontWeight: 500, fontSize: 14 }}>Listado de cursos</span>
        <span style={{ fontSize: 12, color: "#5f6368" }}>{cursos.length} registros</span>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#f8f9fa" }}>
              {["ID","Nombre","Instructor","Categoría","Duración","Precio","Estado","Acciones"].map(h => (
                <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 500, fontSize: 12, color: "#5f6368", borderBottom: "0.5px solid #e8eaed" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cursos.map((c) => (
              <tr key={c.id} style={{ borderBottom: "0.5px solid #f1f3f4" }}>
                <td style={{ padding: "10px 14px", color: "#9aa0a6" }}>#{c.id.toString().padStart(3,"0")}</td>
                <td style={{ padding: "10px 14px", fontWeight: 500 }}>{c.nombre}</td>
                <td style={{ padding: "10px 14px" }}>{c.instructor}</td>
                <td style={{ padding: "10px 14px" }}>{c.categoria}</td>
                <td style={{ padding: "10px 14px" }}>{c.duracion}h</td>
                <td style={{ padding: "10px 14px" }}>${c.precio}</td>
                <td style={{ padding: "10px 14px" }}><Badge label={c.estado} /></td>
                <td style={{ padding: "10px 14px" }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={() => onEditar(c)} title="Editar" style={{ border: "0.5px solid #e8eaed", background: "none", borderRadius: 6, width: 28, height: 28, cursor: "pointer", fontSize: 14 }}>✏️</button>
                    <button onClick={() => onEliminar(c)} title="Eliminar" style={{ border: "0.5px solid #f09595", background: "none", borderRadius: 6, width: 28, height: 28, cursor: "pointer", fontSize: 14 }}>🗑</button>
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
const CursoForm: React.FC<{
  inicial: Omit<Curso, "id">;
  modo: "crear" | "editar";
  onGuardar: (data: Omit<Curso, "id">) => void;
  onCancelar: () => void;
}> = ({ inicial, modo, onGuardar, onCancelar }) => {
  const [form, setForm] = useState(inicial);
  const set = (k: keyof typeof form, v: string | number) => setForm(p => ({ ...p, [k]: v }));

  const method = modo === "crear" ? "POST" : "PUT";
  const path   = modo === "crear" ? "/api/cursos" : "/api/cursos/:id";
  const bg     = modo === "crear" ? "#e6f1fb" : "#faeeda";
  const color  = modo === "crear" ? "#185fa5" : "#854f0b";

  return (
    <div>
      <EndpointBadge method={method} path={path} color={color} bg={bg} />
      <div style={{ background: "#fff", border: "0.5px solid #e8eaed", borderRadius: 12, padding: 20, maxWidth: 560 }}>
        <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 16 }}>
          {modo === "crear" ? "➕ Nuevo curso" : "✏️ Editar curso"}
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div><label style={labelStyle}>Nombre del curso</label><input style={inputStyle} value={form.nombre} onChange={e => set("nombre", e.target.value)} placeholder="ej. UX/UI Design" /></div>
          <div><label style={labelStyle}>Instructor</label><input style={inputStyle} value={form.instructor} onChange={e => set("instructor", e.target.value)} placeholder="Nombre completo" /></div>
          <div>
            <label style={labelStyle}>Categoría</label>
            <select style={inputStyle} value={form.categoria} onChange={e => set("categoria", e.target.value)}>
              {CATEGORIAS.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Estado</label>
            <select style={inputStyle} value={form.estado} onChange={e => set("estado", e.target.value as EstadoCurso)}>
              {ESTADOS.map(e => <option key={e}>{e}</option>)}
            </select>
          </div>
          <div><label style={labelStyle}>Duración (horas)</label><input style={inputStyle} type="number" value={form.duracion} onChange={e => set("duracion", +e.target.value)} /></div>
          <div><label style={labelStyle}>Precio ($)</label><input style={inputStyle} type="number" step="0.01" value={form.precio} onChange={e => set("precio", +e.target.value)} /></div>
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={labelStyle}>Descripción</label>
            <textarea style={{ ...inputStyle, minHeight: 70, resize: "vertical" }} value={form.descripcion} onChange={e => set("descripcion", e.target.value)} />
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
          <button onClick={() => onGuardar(form)} style={{ background: "#2ebcb3", color: "#fff", border: "none", padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
            ✔ {modo === "crear" ? "Crear curso" : "Guardar cambios"}
          </button>
          <button onClick={onCancelar} style={{ background: "none", color: "#5f6368", border: "0.5px solid #e8eaed", padding: "8px 20px", borderRadius: 8, fontSize: 13, cursor: "pointer" }}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

/* ── MAIN ── */
/* ── MAIN ── */
const CursosSection: React.FC = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    listarCursos().then(data =>
      setCursos(
        data.map(d => ({
          ...d,
          estado: d.estado as EstadoCurso,
        }))
      )
    );
  }, []);

  const [tab, setTab] = useState<TabCRUD>("listar");
  const [selected, setSelected] = useState<Curso | null>(null);

  const tabs: { key: TabCRUD; label: string }[] = [
    { key: "listar", label: "Listar" },
    { key: "crear", label: "Crear" },
    { key: "editar", label: "Editar" },
    { key: "eliminar", label: "Eliminar" },
  ];

  const handleCrear = async (data: Omit<Curso, "id">) => {
    const nuevo = await crearCurso(data);

    setCursos(prev => [
      ...prev,
      {
        ...nuevo,
        estado: nuevo.estado as EstadoCurso,
      },
    ]);

    setTab("listar");
  };

  const handleEditar = async (data: Omit<Curso, "id">) => {
    if (!selected) return;

    const actualizado = await actualizarCurso(selected.id, data);

    setCursos(prev =>
      prev.map(c =>
        c.id === selected.id
          ? {
              ...actualizado,
              estado: actualizado.estado as EstadoCurso,
            }
          : c
      )
    );

    setSelected(null);
    setTab("listar");
  };

  const handleEliminar = async () => {
    if (!selected) return;

    await eliminarCurso(selected.id);

    setCursos(prev => prev.filter(c => c.id !== selected.id));

    setSelected(null);
    setTab("listar");
  };

  const abrirEditar = (c: Curso) => {
    setSelected(c);
    setTab("editar");
  };

  const abrirEliminar = (c: Curso) => {
    setSelected(c);
    setTab("eliminar");
  };
  return (
    <div>
      {/* TABS */}
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

      {tab === "listar"   && <CursosListar cursos={cursos} onEditar={abrirEditar} onEliminar={abrirEliminar} />}
      {tab === "crear"    && <CursoForm modo="crear" inicial={EMPTY} onGuardar={handleCrear} onCancelar={() => setTab("listar")} />}
      {tab === "editar"   && (
        selected
          ? <CursoForm modo="editar" inicial={selected} onGuardar={handleEditar} onCancelar={() => setTab("listar")} />
          : <CursosListar cursos={cursos} onEditar={abrirEditar} onEliminar={abrirEliminar} />
      )}
      {tab === "eliminar" && (
        selected
          ? <DeleteConfirm
              titulo="Eliminar curso"
              descripcion={`¿Estás seguro que deseas eliminar el curso "${selected.nombre}"? Esta acción no se puede deshacer.`}
              detalle={{ ID: `#${selected.id.toString().padStart(3,"0")}`, Curso: selected.nombre, Instructor: selected.instructor }}
              endpoint="/api/cursos/:id"
              onCancel={() => setTab("listar")}
              onConfirm={handleEliminar}
            />
          : <CursosListar cursos={cursos} onEditar={abrirEditar} onEliminar={abrirEliminar} />
      )}
    </div>
  );
};

export default CursosSection;
