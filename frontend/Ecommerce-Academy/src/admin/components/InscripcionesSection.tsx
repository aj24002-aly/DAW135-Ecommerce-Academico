import React, { useState, useEffect } from "react";
import type { Inscripcion, TabCRUD, EstadoInscripcion } from "../types";
import Badge from "./Badge";
import StatsRow from "./StatsRow";
import DeleteConfirm from "./DeleteConfirm";

interface EstudianteOption { id: number; nombre: string; apellido: string; }
interface ProductoOption   { id: number; nombre: string; }

const API = "http://localhost:8080/api";
const ESTADOS: EstadoInscripcion[] = ["Inscrito", "Completado", "Cancelado"];

const apiFetch = (path: string, opts?: RequestInit) =>
  fetch(`${API}${path}`, { headers: { "Content-Type": "application/json" }, ...opts });

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

const ProgressBar: React.FC<{ value: number }> = ({ value }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <div style={{ flex: 1, height: 6, background: "#f1f3f4", borderRadius: 3, overflow: "hidden" }}>
      <div style={{ width: `${value}%`, height: "100%", background: value === 100 ? "#639922" : "#2ebcb3", borderRadius: 3, transition: "width 0.3s" }} />
    </div>
    <span style={{ fontSize: 11, color: "#5f6368", minWidth: 28 }}>{value}%</span>
  </div>
);

// ── LISTAR ──────────────────────────────────────────────────
const InscripcionesListar: React.FC<{
  inscripciones: Inscripcion[];
  cargando: boolean;
  onEditar: (i: Inscripcion) => void;
  onEliminar: (i: Inscripcion) => void;
}> = ({ inscripciones, cargando, onEditar, onEliminar }) => (
  <div>
    <EndpointBadge method="GET" path="/api/inscripciones" color="#3b6d11" bg="#eaf3de" />
    <StatsRow stats={[
      { label: "Total inscripciones", value: inscripciones.length,                                        color: "#1a9e96" },
      { label: "Completadas",         value: inscripciones.filter(i => i.estado === "Completado").length, color: "#3b6d11" },
      { label: "Canceladas",          value: inscripciones.filter(i => i.estado === "Cancelado").length,  color: "#a32d2d" },
    ]} />
    <div style={{ background: "#fff", border: "0.5px solid #e8eaed", borderRadius: 12, overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #e8eaed" }}>
        <span style={{ fontWeight: 500, fontSize: 14 }}>Listado de inscripciones</span>
        <span style={{ fontSize: 12, color: "#5f6368" }}>{inscripciones.length} registros</span>
      </div>
      {cargando ? (
        <div style={{ padding: 32, textAlign: "center", color: "#5f6368", fontSize: 13 }}>Cargando...</div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "#f8f9fa" }}>
                {["ID", "Estudiante", "Producto", "Fecha", "Progreso", "Estado", "Acciones"].map(h => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 500, fontSize: 12, color: "#5f6368", borderBottom: "0.5px solid #e8eaed" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inscripciones.map(i => (
                <tr key={i.id} style={{ borderBottom: "0.5px solid #f1f3f4" }}>
                  <td style={{ padding: "10px 14px", color: "#9aa0a6" }}>#{i.id.toString().padStart(3, "0")}</td>
                  <td style={{ padding: "10px 14px", fontWeight: 500 }}>{i.estudianteNombre}</td>
                  <td style={{ padding: "10px 14px" }}>{i.cursoNombre}</td>
                  <td style={{ padding: "10px 14px", color: "#5f6368" }}>{i.fechaInscripcion}</td>
                  <td style={{ padding: "10px 14px", minWidth: 120 }}><ProgressBar value={i.progreso} /></td>
                  <td style={{ padding: "10px 14px" }}><Badge label={i.estado} /></td>
                  <td style={{ padding: "10px 14px" }}>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button onClick={() => onEditar(i)} title="Editar" style={{ border: "0.5px solid #e8eaed", background: "none", borderRadius: 6, width: 28, height: 28, cursor: "pointer", fontSize: 14 }}>✏️</button>
                      <button onClick={() => onEliminar(i)} title="Eliminar" style={{ border: "0.5px solid #f09595", background: "none", borderRadius: 6, width: 28, height: 28, cursor: "pointer", fontSize: 14 }}>🗑</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
);

// ── FORM ────────────────────────────────────────────────────
type FormData = Omit<Inscripcion, "id" | "estudianteNombre" | "cursoNombre">;

const InscripcionForm: React.FC<{
  inicial: FormData;
  modo: "crear" | "editar";
  estudiantes: EstudianteOption[];
  productos: ProductoOption[];
  onGuardar: (data: FormData) => void;
  onCancelar: () => void;
}> = ({ inicial, modo, estudiantes, productos, onGuardar, onCancelar }) => {
  const [form, setForm] = useState<FormData>(inicial);
  const set = <K extends keyof FormData>(k: K, v: FormData[K]) => setForm(p => ({ ...p, [k]: v }));

  const method = modo === "crear" ? "POST" : "PUT";
  const path   = modo === "crear" ? "/api/inscripciones" : "/api/inscripciones/:id";
  const bg     = modo === "crear" ? "#e6f1fb" : "#faeeda";
  const color  = modo === "crear" ? "#185fa5" : "#854f0b";

  return (
    <div>
      <EndpointBadge method={method} path={path} color={color} bg={bg} />
      <div style={{ background: "#fff", border: "0.5px solid #e8eaed", borderRadius: 12, padding: 20, maxWidth: 560 }}>
        <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 16 }}>
          {modo === "crear" ? "➕ Nueva inscripción" : "✏️ Editar inscripción"}
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>
            <label style={labelStyle}>Estudiante</label>
            <select style={inputStyle} value={form.estudianteId} onChange={e => set("estudianteId", +e.target.value)}>
              {estudiantes.map(e => (
                <option key={e.id} value={e.id}>{e.nombre} {e.apellido}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Producto</label>
            <select style={inputStyle} value={form.cursoId} onChange={e => set("cursoId", +e.target.value)}>
              {productos.map(p => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Fecha de inscripción</label>
            <input style={inputStyle} type="date" value={form.fechaInscripcion} onChange={e => set("fechaInscripcion", e.target.value)} />
          </div>
          <div>
            <label style={labelStyle}>Estado</label>
            <select style={inputStyle} value={form.estado} onChange={e => set("estado", e.target.value as EstadoInscripcion)}>
              {ESTADOS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={labelStyle}>Progreso ({form.progreso}%)</label>
            <input type="range" min={0} max={100} step={1} value={form.progreso} style={{ width: "100%" }} onChange={e => set("progreso", +e.target.value)} />
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
          <button onClick={() => onGuardar(form)} style={{ background: "#2ebcb3", color: "#fff", border: "none", padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
            ✔ {modo === "crear" ? "Crear inscripción" : "Guardar cambios"}
          </button>
          <button onClick={onCancelar} style={{ background: "none", color: "#5f6368", border: "0.5px solid #e8eaed", padding: "8px 20px", borderRadius: 8, fontSize: 13, cursor: "pointer" }}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

// ── MAIN ────────────────────────────────────────────────────
const InscripcionesSection: React.FC = () => {
  const [inscripciones, setInscripciones] = useState<Inscripcion[]>([]);
  const [estudiantes,   setEstudiantes]   = useState<EstudianteOption[]>([]);
  const [productos,     setProductos]     = useState<ProductoOption[]>([]);
  const [cargando,      setCargando]      = useState(false);
  const [tab,           setTab]           = useState<TabCRUD>("listar");
  const [selected,      setSelected]      = useState<Inscripcion | null>(null);

  const tabs: { key: TabCRUD; label: string }[] = [
    { key: "listar",   label: "Listar"   },
    { key: "crear",    label: "Crear"    },
    { key: "editar",   label: "Editar"   },
    { key: "eliminar", label: "Eliminar" },
  ];

  // El backend devuelve: { id, estudiante: { id, nombre, apellido }, producto: { id, nombre }, ... }
  const mapear = (raw: any): Inscripcion => ({
    id:               raw.id,
    estudianteId:     raw.estudiante.id,
    estudianteNombre: `${raw.estudiante.nombre} ${raw.estudiante.apellido}`,
    cursoId:          raw.producto.id,
    cursoNombre:      raw.producto.nombre,
    fechaInscripcion: raw.fechaInscripcion,
    estado:           raw.estado,
    progreso:         raw.progreso,
  });

  useEffect(() => {
    setCargando(true);
    Promise.all([
      apiFetch("/inscripciones").then(r => r.json()),
      apiFetch("/estudiantes").then(r => r.json()),
      fetch("http://localhost:8080/productos").then(r => r.json()),
    ]).then(([insc, est, prod]) => {
      setInscripciones(insc.map(mapear));
      setEstudiantes(est);
      setProductos(prod);
    }).catch(console.error)
      .finally(() => setCargando(false));
  }, []);

  const emptyForm = (): FormData => ({
    estudianteId:     estudiantes[0]?.id ?? 0,
    cursoId:          productos[0]?.id ?? 0,
    fechaInscripcion: new Date().toISOString().split("T")[0],
    estado:           "Inscrito",
    progreso:         0,
  });

  // ── CRUD handlers ────────────────────────────────────────
  const handleCrear = async (data: FormData) => {
    const res = await apiFetch("/inscripciones", {
      method: "POST",
      body: JSON.stringify({
        estudianteId:     data.estudianteId,
        productoId:       data.cursoId,       // cursoId en el type = productoId en el backend
        fechaInscripcion: data.fechaInscripcion,
        estado:           data.estado,
        progreso:         data.progreso,
      }),
    });
    const nueva = mapear(await res.json());
    setInscripciones(p => [...p, nueva]);
    setTab("listar");
  };

  const handleEditar = async (data: FormData) => {
    if (!selected) return;
    const res = await apiFetch(`/inscripciones/${selected.id}`, {
      method: "PUT",
      body: JSON.stringify({
        estudianteId:     data.estudianteId,
        productoId:       data.cursoId,
        fechaInscripcion: data.fechaInscripcion,
        estado:           data.estado,
        progreso:         data.progreso,
      }),
    });
    const actualizada = mapear(await res.json());
    setInscripciones(p => p.map(i => i.id === selected.id ? actualizada : i));
    setTab("listar");
  };

  const handleEliminar = async () => {
    if (!selected) return;
    await apiFetch(`/inscripciones/${selected.id}`, { method: "DELETE" });
    setInscripciones(p => p.filter(i => i.id !== selected.id));
    setSelected(null);
    setTab("listar");
  };

  const abrirEditar   = (i: Inscripcion) => { setSelected(i); setTab("editar"); };
  const abrirEliminar = (i: Inscripcion) => { setSelected(i); setTab("eliminar"); };

  const toFormData = (i: Inscripcion): FormData => ({
    estudianteId:     i.estudianteId,
    cursoId:          i.cursoId,
    fechaInscripcion: i.fechaInscripcion,
    estado:           i.estado,
    progreso:         i.progreso,
  });

  return (
    <div>
      <div style={{ display: "flex", gap: 4, marginBottom: 16, background: "#fff", border: "0.5px solid #e8eaed", borderRadius: 10, padding: 4, width: "fit-content" }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{
            padding: "6px 16px", borderRadius: 7, fontSize: 12, cursor: "pointer", border: "none",
            background: tab === t.key ? "#2ebcb3" : "none",
            color:      tab === t.key ? "#fff"    : "#5f6368",
            fontWeight: tab === t.key ? 500       : 400,
          }}>{t.label}</button>
        ))}
      </div>

      {tab === "listar" && (
        <InscripcionesListar
          inscripciones={inscripciones}
          cargando={cargando}
          onEditar={abrirEditar}
          onEliminar={abrirEliminar}
        />
      )}

      {tab === "crear" && (
        <InscripcionForm
          modo="crear"
          inicial={emptyForm()}
          estudiantes={estudiantes}
          productos={productos}
          onGuardar={handleCrear}
          onCancelar={() => setTab("listar")}
        />
      )}

      {tab === "editar" && (selected
        ? <InscripcionForm
            modo="editar"
            inicial={toFormData(selected)}
            estudiantes={estudiantes}
            productos={productos}
            onGuardar={handleEditar}
            onCancelar={() => setTab("listar")}
          />
        : <InscripcionesListar inscripciones={inscripciones} cargando={cargando} onEditar={abrirEditar} onEliminar={abrirEliminar} />
      )}

      {tab === "eliminar" && (selected
        ? <DeleteConfirm
            titulo="Eliminar inscripción"
            descripcion={`¿Deseas eliminar la inscripción de "${selected.estudianteNombre}" en "${selected.cursoNombre}"?`}
            detalle={{ ID: `#${selected.id.toString().padStart(3, "0")}`, Estudiante: selected.estudianteNombre, Producto: selected.cursoNombre, Progreso: `${selected.progreso}%` }}
            endpoint="/api/inscripciones/:id"
            onCancel={() => setTab("listar")}
            onConfirm={handleEliminar}
          />
        : <InscripcionesListar inscripciones={inscripciones} cargando={cargando} onEditar={abrirEditar} onEliminar={abrirEliminar} />
      )}
    </div>
  );
};

export default InscripcionesSection;