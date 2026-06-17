// ─── Ejemplo de uso en App.tsx ────────────────────────────────
//
// Agregás un botón en el hero que navega al panel admin.
// Podés manejar la navegación con React Router o con estado local.

// ── OPCIÓN A: Con React Router (recomendado) ──────────────────
//
// 1. Instalá: npm install react-router-dom @types/react-router-dom
//
// App.tsx:
//
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from "./components/Hero";
// import AdminPanel from "./admin/AdminPanel";
//
// const App = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/"      element={<Hero />} />
//       <Route path="/admin" element={<AdminPanel />} />
//     </Routes>
//   </BrowserRouter>
// );

// ── OPCIÓN B: Con estado local (sin instalar nada extra) ───────

import React, { useState } from "react";
import AdminPanel from "./AdminPanel";

// En tu Hero agrega este botón junto a "Únete gratis":
//
// <a href="/admin" className="btn btn--admin">
//   ⚙️ Panel Admin
// </a>
//
// CSS del botón:
// .btn--admin {
//   background: rgba(255,255,255,0.15);
//   color: var(--white);
//   border: 2px solid rgba(255,255,255,0.5);
//   padding: 12px 28px;
//   border-radius: 999px;
//   font-weight: 600;
//   font-size: 15px;
//   backdrop-filter: blur(4px);
//   transition: all 0.2s;
//   text-decoration: none;
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
// }
// .btn--admin:hover {
//   background: rgba(255,255,255,0.25);
//   border-color: var(--white);
// }

type Vista = "landing" | "admin";

const AppConEstado: React.FC = () => {
  const [vista, setVista] = useState<Vista>("landing");

  if (vista === "admin") {
    return <AdminPanel onVolver={() => setVista("landing")} />;
  }

  // Tu landing normal, con el botón extra en el hero:
  return (
    <div>
      {/* ... tu Navbar, Hero, etc ... */}
      {/* Dentro del hero, agrega: */}
      <button onClick={() => setVista("admin")} className="btn btn--admin">
        ⚙️ Panel Admin
      </button>
    </div>
  );
};

export default AppConEstado;
