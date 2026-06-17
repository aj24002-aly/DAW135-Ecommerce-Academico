// ============================================================
// data/index.ts — Datos principales de MedalyTech
// ============================================================

export const NAV_LINKS = [
  { label: "Inicio", href: "#" },
  { label: "Cursos", href: "#courses" },
  { label: "Cobranza", href: "#" },
  { label: "Preguntas", href: "#" },
  { label: "Registrarse", href: "#", isButton: false },
  { label: "Iniciar Sesión", href: "#", isButton: true },
];

export const STATS = [
  {
    value: "15K+",
    label: "Estudiantes",
  },
  {
    value: "75%",
    label: "Éxito Académico",
  },
  {
    value: "35",
    label: "Profesores Expertos",
  },
  {
    value: "26",
    label: "Cursos Disponibles",
  },
];

export const FEATURES_CARDS = [
  {
    icon: "💳",
    title: "Cobros y Facturación Inteligente",
    description:
      "Gestiona pagos, facturas y contratos académicos de forma rápida, segura y totalmente en línea.",
  },
  {
    icon: "📅",
    title: "Horarios y Asistencia",
    description:
      "Organiza clases, controla asistencia y administra calendarios académicos desde un solo lugar.",
  },
  {
    icon: "👥",
    title: "Gestión de Estudiantes",
    description:
      "Administra estudiantes, matrículas y seguimiento académico de manera moderna y eficiente.",
  },
];

export const WHAT_IS_ITEMS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop",
    title: "Clase de prueba gratuita",
    tag: "Prueba",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop",
    title: "Clases en vivo",
    tag: "En Vivo",
  },
];

export const FEATURES_LIST = [
  {
    icon: "🎨",
    title: "Interfaz diseñada para el aula",
    description:
      "Los docentes pueden concentrarse en enseñar mientras los estudiantes disfrutan una experiencia intuitiva y dinámica.",
    bullets: [
      "Diseñado para docentes y estudiantes",
      "Fácil de usar y navegar",
      "Compatible con dispositivos móviles",
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=350&fit=crop",
    align: "right",
  },
  {
    icon: "📚",
    title: "Herramientas para aprender y enseñar",
    description:
      "Brinda a docentes y estudiantes herramientas modernas para mejorar el aprendizaje en línea.",
    bullets: [
      "Cuestionarios y tareas interactivas",
      "Retroalimentación en tiempo real",
      "Seguimiento académico avanzado",
    ],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=350&fit=crop",
    align: "left",
  },
  {
    icon: "✅",
    title: "Evaluaciones y exámenes",
    description:
      "Crea evaluaciones fácilmente y obtén resultados automáticos con estadísticas detalladas.",
    bullets: [
      "Diferentes tipos de preguntas",
      "Corrección automática",
      "Reportes de rendimiento",
    ],
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=500&h=350&fit=crop",
    align: "right",
  },
  {
    icon: "🏫",
    title: "Administración académica",
    description:
      "Gestiona cursos, estudiantes y planificación académica desde una sola plataforma.",
    bullets: [
      "Control de estudiantes",
      "Planificación de contenidos",
      "Comunicación con padres y alumnos",
    ],
    image:
      "https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=500&h=350&fit=crop",
    align: "left",
  },
  {
    icon: "💬",
    title: "Comunicación personalizada",
    description:
      "Facilita conversaciones privadas entre docentes y estudiantes para mejorar el aprendizaje.",
    bullets: [
      "Mensajería privada",
      "Videollamadas integradas",
      "Grabación de sesiones",
    ],
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&h=350&fit=crop",
    align: "right",
  },
];

export const STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1494790108755-2616b9e77f2a?w=60&h=60&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
];

export const COURSE_CATEGORIES = [
  { label: "Diseño", color: "#FF6B6B" },
  { label: "Programación", color: "#4ECDC4" },
  { label: "Marketing", color: "#45B7D1" },
  { label: "Negocios", color: "#96CEB4" },
  { label: "Idiomas", color: "#FFEAA7" },
  { label: "Tecnología", color: "#DDA0DD" },
  { label: "Creatividad", color: "#98D8C8" },
];

export const COURSES = [
  {
    id: 1,
    title: "Desarrollo Web Profesional",
    instructor: "Carlos Martínez",
    rating: 5,
    reviews: 12,
    price: 49,
    category: "Programación",
    categoryColor: "#14b8a6",
    image: "/images/course1.jpg",
  },
  {
    id: 2,
    title: "Diseño UI/UX Moderno",
    instructor: "Ana López",
    rating: 4,
    reviews: 9,
    price: 39,
    category: "Diseño",
    categoryColor: "#8b5cf6",
    image: "/images/course2.jpg",
  },
  {
    id: 3,
    title: "Marketing Digital Estratégico",
    instructor: "José Ramírez",
    rating: 5,
    reviews: 15,
    price: 59,
    category: "Marketing",
    categoryColor: "#f97316",
    image: "/images/course3.jpg",
  },
  {
    id: 4,
    title: "Análisis de Datos con Python",
    instructor: "María González",
    rating: 5,
    reviews: 20,
    price: 69,
    category: "Tecnología",
    categoryColor: "#3b82f6",
    image: "/images/course4.jpg",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Daniela Martínez",
    role: "Estudiante",
    text:
      "La plataforma me ayudó a organizar mis clases y aprender de una manera mucho más dinámica e interactiva.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "José Ramírez",
    role: "Docente",
    text:
      "Las herramientas educativas facilitan muchísimo la enseñanza y el seguimiento de estudiantes.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
];

export const NEWS = [
  {
    id: 1,
    title: "Cómo mejorar la educación virtual en 2026",
    date: "12 Ene, 2026",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&h=200&fit=crop",
    category: "Noticias",
  },
  {
    id: 2,
    title: "Herramientas digitales para estudiantes modernos",
    date: "10 Ene, 2026",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=200&fit=crop",
    category: "Recursos",
  },
  {
    id: 3,
    title: "Tendencias en plataformas educativas online",
    date: "8 Ene, 2026",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop",
    category: "Noticias",
  },
];

export const FOOTER_LINKS = {
  Empresa: [
    "Nosotros",
    "Carreras",
    "Prensa",
    "Blog",
  ],

  Producto: [
    "Funciones",
    "Precios",
    "Seguridad",
    "Integraciones",
  ],

  Soporte: [
    "Centro de Ayuda",
    "Comunidad",
    "Contáctanos",
    "Estado del Sistema",
  ],

  Legal: [
    "Política de Privacidad",
    "Términos y Condiciones",
    "Política de Cookies",
  ],
};