export type EstadoCurso = "Activo" | "Próximo" | "Inactivo";
export type EstadoEstudiante = "Activo" | "Inactivo";
export type EstadoInscripcion = "Inscrito" | "Completado" | "Cancelado";

export interface Curso {
  id: number;
  nombre: string;
  instructor: string;
  categoria: string;
  estado: EstadoCurso;
  duracion: number;
  precio: number;
  descripcion: string;
}

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  estado: EstadoEstudiante;
  fechaRegistro: string;
}

export interface Inscripcion {
  id: number;
  estudianteId: number;
  cursoId: number;
  estudianteNombre: string;
  cursoNombre: string;
  fechaInscripcion: string;
  estado: EstadoInscripcion;
  progreso: number;
}

export type Seccion = "cursos" | "estudiantes" | "inscripciones";
export type TabCRUD = "listar" | "crear" | "editar" | "eliminar";
