import React, { useState } from "react";
import type { Seccion } from "./types";import CursosSection from "./components/CursosSection";
import EstudiantesSection from "./components/EstudiantesSection";
import InscripcionesSection from "./components/InscripcionesSection";
import "./AdminPanel.css";

interface NavItem {
  key: Seccion;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: "cursos",        label: "Cursos",        icon: "" },
  { key: "estudiantes",   label: "Estudiantes",   icon: "" },
  { key: "inscripciones", label: "Inscripciones", icon: "" },
];

const TITULOS: Record<Seccion, string> = {
  cursos:        "Gestión de Cursos",
  estudiantes:   "Gestión de Estudiantes",
  inscripciones: "Inscripciones",
};

interface AdminPanelProps {
  onVolver?: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onVolver }) => {
  const [seccion, setSeccion] = useState<Seccion>("cursos");

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="admin-brand-icon"></span>
          <div>
            <div className="admin-brand-name">Panel Admin</div>
            <div className="admin-brand-sub">MEDALYTECH</div>
          </div>
        </div>

        <nav className="admin-nav">
          {NAV_ITEMS.map(item => (
            <button
              key={item.key}
              className={`admin-nav-item ${seccion === item.key ? "active" : ""}`}
              onClick={() => setSeccion(item.key)}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          {onVolver && (
            <button className="admin-nav-item" onClick={onVolver}>
              <span>←</span> Volver al inicio
            </button>
          )}
        </div>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        <div className="admin-topbar">
          <h1 className="admin-topbar-title">{TITULOS[seccion]}</h1>
          <div className="admin-topbar-meta">
            <span className="admin-endpoint-hint">
              API Base: <code>/api/{seccion}</code>
            </span>
          </div>
        </div>

        <div className="admin-content">
          {seccion === "cursos"        && <CursosSection />}
          {seccion === "estudiantes"   && <EstudiantesSection />}
          {seccion === "inscripciones" && <InscripcionesSection />}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
