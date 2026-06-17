import { Target, Eye } from 'lucide-react'

export const heroContent = {
  tag: '¿Quiénes somos?',
  title: ['Un problema real.', 'Una solución.'],
  description:
    'CampusDigital no es un proyecto tecnológico. Es una propuesta de mejora de servicio público universitario, construida desde adentro: por estudiantes que viven el problema todos los días.',
}

export const origenContent = {
  label: 'El punto de partida',
  title: '¿Por qué existe este portal?',
  paragraphs: [
    'En el cuarto semestre de la materia de Gobierno Electrónico y Administración Pública, identificamos una brecha concreta en la experiencia estudiantil de nuestra universidad: la información está dispersa, algunos trámites exigen presencia física innecesaria y los recursos académicos suelen ser complicados de encontrar.',
    'La propuesta es directa: un portal digital centralizado, enfocado exclusivamente en el estudiante universitario, que resuelva esas fricciones aplicando los principios del gobierno electrónico que aprendemos en clase.',
    'No es una app nueva. No reemplaza sistemas existentes. Es una capa de acceso que pone todo en un solo lugar.',
  ],
  quote: {
    text: 'El gobierno electrónico no es digitalizar trámites. Es rediseñar el servicio desde la perspectiva del ciudadano. Nosotros aplicamos ese principio a nuestra propia universidad.',
    attribution: 'Equipo CampusDigital · 2026',
    marco:
      'Marco teórico: Carta Iberoamericana de Gobierno Electrónico, modelos de madurez digital de la ONU y principios de administración pública orientada a resultados.',
    marcoHighlights: [
      'Carta Iberoamericana de Gobierno Electrónico',
      'ONU',
      'administración pública orientada a resultados',
    ],
  },
}

export const propositoContent = {
  label: 'Propósito',
  title: 'Lo que queremos lograr.',
  cards: [
    {
      id: 'mision',
      icon: Target,
      title: 'Misión',
      description:
        'Centralizar los recursos académicos y administrativos de la universidad en una plataforma accesible, eficiente y diseñada completamente para el estudiante.',
      variant: 'lime',
    },
    {
      id: 'vision',
      icon: Eye,
      title: 'Visión',
      description:
        'Demostrar que el gobierno electrónico puede transformar la experiencia universitaria desde adentro, con una propuesta replicable en otras instituciones.',
      variant: 'dark',
    },
  ],
}

export const equipoContent = {
  label: 'El equipo',
  title: '¿Quiénes lo construimos?',
  description:
    'Somos estudiantes de cuarto semestre que identificamos un problema real y decidimos proponer una solución concreta, aplicando los principios de gobierno electrónico aprendidos en clase.',
  members: [
    {
      id: 'ID',
      initials: 'ID',
      area: 'Investigación y diagnóstico',
      role: 'Levantamiento de necesidades estudiantiles',
      tags: ['Análisis', 'Encuestas', 'Benchmarking'],
    },
    {
      id: 'DX',
      initials: 'DX',
      area: 'Diseño de experiencia',
      role: 'Arquitectura del portal y flujos de usuario',
      tags: ['UX', 'Wireframes', 'Prototipo'],
    },
    {
      id: 'GC',
      initials: 'GC',
      area: 'Gestión de contenido',
      role: 'Producción de videos, manuales y materiales',
      tags: ['Redacción', 'Video', 'Documentación'],
    },
  ],
}

export const impactoContent = {
  label: 'Por qué importa',
  title: ['Menos fricción.', 'Más resultados.'],
  titleHighlight: 'resultados.',
  description:
    'Cada módulo del portal fue diseñado para resolver una fricción específica que el estudiante enfrenta hoy. No es tecnología por tecnología: es servicio público mejorado con criterio.',
  stats: [
    {
      value: '-60%',
      label: 'Visitas presenciales a secretaría estimadas que se eliminan',
    },
    {
      value: '+80%',
      label: 'Trámites que pueden resolverse sin desplazamiento',
    },
    {
      value: '24/7',
      label: 'Disponibilidad del portal, sin depender de horarios de oficina',
    },
  ],
}

export const ctaContent = {
  title: ['El portal ya', 'está listo.'],
  titleHighlight: 'está listo.',
  description:
    'Entra y explora todo lo que diseñamos para hacer tu vida universitaria más fácil.',
  buttonLabel: 'Explorar el portal',
  buttonTo: '/#modulos',
}
