// cursosApi.ts
// Capa de servicio que conecta el frontend con el backend Spring Boot
// Ajusta BASE_URL según tu entorno

const BASE_URL = "http://localhost:8080/productos"; // ← cambia el puerto si es necesario

// ─── Tipos ────────────────────────────────────────────────────────────────────
// Ajusta los campos para que coincidan con tu ProductoDTO de Java
export interface ProductoDTO {
  id: number;
  nombre: string;
  instructor: string;   // ← si tu DTO no tiene este campo, mapéalo o agrégalo en Java
  categoria: string;
  estado: string;
  duracion: number;
  precio: number;
  descripcion: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const msg = await res.text().catch(() => res.statusText);
    throw new Error(`Error ${res.status}: ${msg}`);
  }
  // DELETE devuelve 204 sin body
  if (res.status === 204) return undefined as T;
  return res.json();
}

const headers = { "Content-Type": "application/json" };

// ─── CRUD ─────────────────────────────────────────────────────────────────────

/** GET /productos → lista completa */
export async function listarCursos(): Promise<ProductoDTO[]> {
  const res = await fetch(BASE_URL);
  return handleResponse<ProductoDTO[]>(res);
}

/** GET /productos/:id */
export async function obtenerCurso(id: number): Promise<ProductoDTO> {
  const res = await fetch(`${BASE_URL}/${id}`);
  return handleResponse<ProductoDTO>(res);
}

/** POST /productos */
export async function crearCurso(data: Omit<ProductoDTO, "id">): Promise<ProductoDTO> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
  return handleResponse<ProductoDTO>(res);
}

/** PUT /productos/:id */
export async function actualizarCurso(id: number, data: Omit<ProductoDTO, "id">): Promise<ProductoDTO> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  });
  return handleResponse<ProductoDTO>(res);
}

/** DELETE /productos/:id */
export async function eliminarCurso(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  return handleResponse<void>(res);
}