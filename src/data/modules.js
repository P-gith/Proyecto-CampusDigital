import {
  Video,
  BookOpen,
  GraduationCap,
  Library,
  FileText,
  Calendar,
} from 'lucide-react'

export const modules = [
  {
    id: 1,
    title: 'Videoteca académica',
    description:
      'Tutoriales paso a paso, grabaciones de clases y contenido de inducción.',
    icon: Video,
    color: 'from-primary-400 to-primary-600',
    bgLight: 'bg-primary-50',
    iconColor: 'text-primary-700',
  },
  {
    id: 2,
    title: 'Manuales y guías',
    description:
      'Reglamentos, requisitos, procesos académicos y administrativos descargables.',
    icon: BookOpen,
    color: 'from-charcoal-500 to-charcoal-700',
    bgLight: 'bg-charcoal-50',
    iconColor: 'text-charcoal-700',
  },
  {
    id: 3,
    title: 'Aulas virtuales',
    description:
      'Materiales, tareas y actividades complementarias por materia.',
    icon: GraduationCap,
    color: 'from-primary-500 to-primary-700',
    bgLight: 'bg-primary-100',
    iconColor: 'text-primary-800',
  },
  {
    id: 4,
    title: 'Biblioteca virtual',
    description:
      'Libros digitales, artículos científicos, tesis y repositorio académico.',
    icon: Library,
    color: 'from-primary-300 to-primary-500',
    bgLight: 'bg-brand-mint',
    iconColor: 'text-primary-600',
  },
  {
    id: 5,
    title: 'Trámites digitales',
    description:
      'Solicitud de certificados, matrículas y procesos administrativos online.',
    icon: FileText,
    color: 'from-charcoal-600 to-charcoal-800',
    bgLight: 'bg-charcoal-50',
    iconColor: 'text-charcoal-700',
  },
  {
    id: 6,
    title: 'Agenda y noticias',
    description:
      'Calendario académico, eventos y comunicados institucionales.',
    icon: Calendar,
    color: 'from-primary-600 to-primary-800',
    bgLight: 'bg-primary-50',
    iconColor: 'text-primary-700',
  },
]

export const problemCards = [
  {
    id: 1,
    title: 'Información centralizada',
    description:
      'Todos los recursos académicos y administrativos en un único punto de acceso.',
    icon: 'layers',
  },
  {
    id: 2,
    title: 'Procesos digitales',
    description:
      'Trámites simplificados con seguimiento en línea y menos burocracia.',
    icon: 'workflow',
  },
  {
    id: 3,
    title: 'Acceso académico',
    description:
      'Materiales de estudio, biblioteca y aulas virtuales disponibles siempre.',
    icon: 'access',
  },
]

export const benefits = [
  {
    id: 1,
    title: 'Ahorro de tiempo',
    description:
      'Reduce tiempos de espera y desplazamientos con trámites y consultas en línea.',
    icon: 'clock',
  },
  {
    id: 2,
    title: 'Mayor transparencia',
    description:
      'Información clara sobre procesos, requisitos y estados de solicitudes.',
    icon: 'eye',
  },
  {
    id: 3,
    title: 'Acceso 24/7',
    description:
      'Consulta recursos académicos y realiza gestiones en cualquier momento.',
    icon: 'globe',
  },
  {
    id: 4,
    title: 'Mejor experiencia estudiantil',
    description:
      'Un entorno digital intuitivo que facilita el aprendizaje y la vida universitaria.',
    icon: 'sparkles',
  },
]

export const news = [
  {
    id: 1,
    date: '12 Jun 2026',
    title: 'Nuevas fechas de matrícula',
    description:
      'Se abre el periodo de matrícula para el semestre 2026-II. Consulta requisitos y plazos en el módulo de trámites digitales.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    category: 'Académico',
  },
  {
    id: 2,
    date: '8 Jun 2026',
    title: 'Convocatoria de becas',
    description:
      'Estudiantes destacados pueden postular a becas de excelencia académica. Inscripciones abiertas hasta el 30 de junio.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    category: 'Becas',
  },
  {
    id: 3,
    date: '3 Jun 2026',
    title: 'Evento académico',
    description:
      'Jornada de innovación educativa con ponentes nacionales e internacionales. Inscripción gratuita para la comunidad universitaria.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    category: 'Eventos',
  },
]

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tour', href: '#tour' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Noticias', href: '#noticias' },
  { label: 'Contacto', href: '#contacto' },
]

export const footerLinks = {
  institucional: [
    { label: 'Sobre nosotros', href: '#' },
    { label: 'Misión y visión', href: '#' },
    { label: 'Políticas', href: '#' },
    { label: 'Transparencia', href: '#' },
  ],
  recursos: [
    { label: 'Videoteca', href: '#modulos' },
    { label: 'Biblioteca', href: '#modulos' },
    { label: 'Trámites', href: '#modulos' },
    { label: 'Calendario', href: '#noticias' },
  ],
  soporte: [
    { label: 'Centro de ayuda', href: '#' },
    { label: 'Preguntas frecuentes', href: '#' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Accesibilidad', href: '#' },
  ],
}
