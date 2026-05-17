import type {
  Curso,
  Estudiante,
  Inscripcion
} from "./types";

export const CURSOS_MOCK: Curso[] = [
  { id: 1, nombre: "UX/UI Design", instructor: "Ana López", categoria: "Diseño", estado: "Activo", duracion: 32, precio: 59.99, descripcion: "Domina los principios de UX e interfaz con casos reales." },
  { id: 2, nombre: "React Avanzado", instructor: "Carlos Mena", categoria: "Desarrollo", estado: "Activo", duracion: 40, precio: 79.99, descripcion: "Hooks, Context, performance y arquitectura en React." },
  { id: 3, nombre: "Marketing Digital", instructor: "María Flores", categoria: "Marketing", estado: "Próximo", duracion: 20, precio: 39.99, descripcion: "Estrategias SEO, SEM y redes sociales para tu negocio." },
  { id: 4, nombre: "Python para Datos", instructor: "Luis Ramos", categoria: "Data", estado: "Inactivo", duracion: 48, precio: 89.99, descripcion: "Análisis y visualización de datos con Python y Pandas." },
  { id: 5, nombre: "Figma Esencial", instructor: "Ana López", categoria: "Diseño", estado: "Activo", duracion: 24, precio: 49.99, descripcion: "Aprende Figma desde cero hasta nivel profesional." },
];

export const ESTUDIANTES_MOCK: Estudiante[] = [
  { id: 1, nombre: "Pedro", apellido: "García", email: "pedro@gmail.com", telefono: "7777-1234", estado: "Activo", fechaRegistro: "2025-01-15" },
  { id: 2, nombre: "Sofía", apellido: "Martínez", email: "sofia@gmail.com", telefono: "7888-5678", estado: "Activo", fechaRegistro: "2025-02-03" },
  { id: 3, nombre: "Diego", apellido: "Hernández", email: "diego@gmail.com", telefono: "7999-9012", estado: "Inactivo", fechaRegistro: "2025-01-28" },
  { id: 4, nombre: "Valentina", apellido: "Cruz", email: "vale@gmail.com", telefono: "7666-3456", estado: "Activo", fechaRegistro: "2025-03-10" },
  { id: 5, nombre: "Andrés", apellido: "Ruiz", email: "andres@gmail.com", telefono: "7555-7890", estado: "Activo", fechaRegistro: "2025-03-22" },
];

export const INSCRIPCIONES_MOCK: Inscripcion[] = [
  { id: 1, estudianteId: 1, cursoId: 1, estudianteNombre: "Pedro García", cursoNombre: "UX/UI Design", fechaInscripcion: "2025-01-20", estado: "Inscrito", progreso: 45 },
  { id: 2, estudianteId: 2, cursoId: 2, estudianteNombre: "Sofía Martínez", cursoNombre: "React Avanzado", fechaInscripcion: "2025-02-10", estado: "Completado", progreso: 100 },
  { id: 3, estudianteId: 3, cursoId: 3, estudianteNombre: "Diego Hernández", cursoNombre: "Marketing Digital", fechaInscripcion: "2025-02-14", estado: "Cancelado", progreso: 20 },
  { id: 4, estudianteId: 4, cursoId: 1, estudianteNombre: "Valentina Cruz", cursoNombre: "UX/UI Design", fechaInscripcion: "2025-03-12", estado: "Inscrito", progreso: 70 },
  { id: 5, estudianteId: 5, cursoId: 4, estudianteNombre: "Andrés Ruiz", cursoNombre: "Python para Datos", fechaInscripcion: "2025-03-25", estado: "Inscrito", progreso: 15 },
];
