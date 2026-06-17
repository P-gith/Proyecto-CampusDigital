import {
  Clock,
  ShieldCheck,
  Smartphone,
  LayoutGrid,
  FileText,
  Newspaper,
  Rocket,
} from 'lucide-react'

export const tourSteps = [
  {
    id: 1,
    badge: 'ES',
    stepLabel: 'Bienvenida',
    heading: 'Bienvenido,',
    headingHighlight: 'estudiante.',
    description:
      'En menos de 2 minutos te mostramos todo lo que puedes hacer desde este portal. Sin filas. Sin papeleo. Sin horarios.',
    features: [
      { icon: Clock, text: 'Acceso 24/7 desde cualquier dispositivo' },
      { icon: ShieldCheck, text: 'Tu información institucional, protegida' },
      { icon: Smartphone, text: 'Funciona igual en celular y computador' },
    ],
  },
  {
    id: 2,
    badge: 'MD',
    stepLabel: 'Módulos',
    heading: 'Explora los',
    headingHighlight: 'módulos.',
    description:
      'Accede a videoteca, manuales, aulas virtuales, biblioteca digital y más. Todo organizado por área académica.',
    features: [
      { icon: LayoutGrid, text: '6 módulos integrados en un solo portal' },
      { icon: Clock, text: 'Recursos disponibles cuando los necesites' },
      { icon: Smartphone, text: 'Navegación simple desde cualquier pantalla' },
    ],
  },
  {
    id: 3,
    badge: 'TR',
    stepLabel: 'Trámites',
    heading: 'Gestiona tus',
    headingHighlight: 'trámites.',
    description:
      'Solicita certificados, consulta el estado de matrículas y realiza procesos administrativos en línea, con seguimiento claro.',
    features: [
      { icon: FileText, text: 'Certificados y constancias digitales' },
      { icon: ShieldCheck, text: 'Procesos transparentes y rastreables' },
      { icon: Clock, text: 'Menos tiempo en ventanillas y filas' },
    ],
  },
  {
    id: 4,
    badge: 'NT',
    stepLabel: 'Noticias',
    heading: 'Mantente',
    headingHighlight: 'informado.',
    description:
      'Consulta fechas de matrícula, convocatorias de becas y eventos académicos. Toda la información institucional al día.',
    features: [
      { icon: Newspaper, text: 'Comunicados y avisos oficiales' },
      { icon: Clock, text: 'Calendario académico siempre actualizado' },
      { icon: ShieldCheck, text: 'Información verificada por la universidad' },
    ],
  },
  {
    id: 5,
    badge: 'GO',
    stepLabel: 'Comienza',
    heading: 'Listo para',
    headingHighlight: 'empezar.',
    description:
      'Ya conoces lo esencial del portal. Explora los módulos, revisa las noticias o contacta a soporte si necesitas ayuda.',
    features: [
      { icon: Rocket, text: 'Comienza explorando los módulos principales' },
      { icon: LayoutGrid, text: 'Todo centralizado en CampusDigital' },
      { icon: ShieldCheck, text: 'Tu experiencia académica, simplificada' },
    ],
    cta: { label: 'Explorar módulos', href: '#modulos' },
  },
]
