/** Datos mock realistas. Estadísticas: solo las indicadas en el brief. */

export const stats = [
  {
    id: 'youth',
    value: 3.7,
    suffix: 'M',
    label: 'Jóvenes de 18 a 29 años en Ecuador',
    source: 'INEC',
  },
  {
    id: 'pea',
    value: 2.2,
    suffix: 'M',
    label: 'Población Económicamente Activa (PEA) joven',
    source: 'INEC',
  },
  {
    id: 'unemployment',
    value: 7.9,
    suffix: '%',
    label: 'Desempleo juvenil (mayo 2026)',
    source: 'INEC',
  },
  {
    id: 'underemployment',
    value: 22.6,
    suffix: '%',
    label: 'Subempleo juvenil (mayo 2026)',
    source: 'INEC',
  },
]

export const pillars = [
  {
    id: 'capacitar',
    title: 'Capacitar',
    description:
      'Cursos gratuitos o asequibles, simulador de entrevistas y guías para conseguir empleo sin experiencia.',
  },
  {
    id: 'conectar',
    title: 'Conectar',
    description:
      'Red de mentores y empresas comprometidas con dar la primera oportunidad a recién egresados.',
  },
  {
    id: 'emplear',
    title: 'Emplear',
    description:
      'Bolsa de pasantías y roles junior sin filtro de experiencia, con seguimiento claro de postulaciones.',
  },
]

export const causes = [
  {
    id: 'experiencia',
    title: 'El filtro de la experiencia',
    description:
      'Muchas ofertas exigen años de experiencia para roles de entrada, cerrando la puerta a quienes recién se gradúan.',
    quote:
      'Si se pide experiencia para todo, ¿cuándo van a trabajar los jóvenes?',
    quoteAuthor: 'Patricia Minango',
  },
  {
    id: 'pasantias',
    title: 'Pasantías poco valoradas',
    description:
      'Las prácticas a menudo se tratan como trámite y no como formación real, por lo que no cuentan al postular.',
    quote:
      'Las empresas se equivocan al tratar las pasantías como un papel más.',
    quoteAuthor: 'Andrés Isch',
  },
  {
    id: 'credenciales',
    title: 'Credenciales vs. potencial',
    description:
      'Tutoriales y aprendizaje informal no se reconocen sin certificados, y se ignora la capacidad de aprender en el puesto.',
    quote:
      'La experiencia no debería ser el único filtro: también importan el hambre de aprender y el potencial.',
    quoteAuthor: 'Anabel Galarza',
  },
]

export const testimonials = [
  {
    id: 'odalis',
    name: 'Odalis Córdova',
    age: 23,
    role: 'Administración — UTN',
    type: 'joven',
    quote:
      'Me gradué hace seis meses y trabajo en la frutería de mi mamá. Envía currículums y no hay respuesta; las pasantías no se valoran y los tutoriales gratis no cuentan sin certificados.',
    initials: 'OC',
  },
  {
    id: 'mateo',
    name: 'Mateo Guayasamín',
    age: 19,
    role: 'Auditoría — estudiante UDLA',
    type: 'joven',
    quote:
      'Vi a mi hermanastro desempleado seis meses después de graduarse. Quiero oportunidades para demostrar lo que sé hacer en el trabajo.',
    initials: 'MG',
  },
  {
    id: 'anabel',
    name: 'Anabel Galarza',
    age: null,
    role: '25 años en RR. HH. — Korn Ferry Ecuador',
    type: 'experto',
    quote:
      'La experiencia no debería ser el único filtro. Hay que mirar el hambre de aprender, la adaptabilidad y el potencial: pasantías, desarrollo y altos potenciales.',
    initials: 'AG',
  },
  {
    id: 'patricia',
    name: 'Patricia Minango',
    age: null,
    role: '25 años en RR. HH. — gastronomía',
    type: 'experto',
    quote:
      'Fui pasante sin sueldo dos años. Si se exige experiencia para entrar, los jóvenes nunca van a conseguir empleo. Hacen falta roles junior y pasantías reales.',
    initials: 'PM',
  },
  {
    id: 'andres',
    name: 'Andrés Isch',
    age: null,
    role: 'Exministro de Trabajo (2020–2021)',
    type: 'experto',
    quote:
      'Necesitamos educación dual, mejores pasantías y colaboración universidad–empresa. Las empresas se equivocan al tratar las pasantías como un trámite.',
    initials: 'AI',
  },
]

export const careers = [
  'Administración',
  'Auditoría',
  'Marketing',
  'Ingeniería',
  'Diseño',
  'Tecnología',
  'Psicología',
  'Comunicación',
]

export const courses = [
  {
    id: 'c1',
    title: 'CV que abre puertas (sin experiencia)',
    career: 'Administración',
    level: 'Gratis',
    duration: '4 h',
    price: 0,
    description: 'Cómo contar proyectos, pasantías y logros académicos de forma concreta.',
  },
  {
    id: 'c2',
    title: 'Excel para analistas junior',
    career: 'Auditoría',
    level: 'Asequible',
    duration: '8 h',
    price: 12,
    description: 'Tablas dinámicas, limpieza de datos y reportes listos para la oficina.',
  },
  {
    id: 'c3',
    title: 'Marketing digital desde cero',
    career: 'Marketing',
    level: 'Gratis',
    duration: '6 h',
    price: 0,
    description: 'Campañas, métricas básicas y portafolio con casos reales simulados.',
  },
  {
    id: 'c4',
    title: 'Fundamentos de desarrollo web',
    career: 'Tecnología',
    level: 'Asequible',
    duration: '12 h',
    price: 18,
    description: 'HTML, CSS y un proyecto deployable para tu primer portafolio.',
  },
  {
    id: 'c5',
    title: 'Diseño UI con Figma',
    career: 'Diseño',
    level: 'Gratis',
    duration: '5 h',
    price: 0,
    description: 'Wireframes, componentes y un case study listo para postular.',
  },
  {
    id: 'c6',
    title: 'Comunicación profesional en entrevistas',
    career: 'Comunicación',
    level: 'Gratis',
    duration: '3 h',
    price: 0,
    description: 'Estructura STAR, lenguaje corporal y respuestas a “no tengo experiencia”.',
  },
  {
    id: 'c7',
    title: 'Introducción a procesos industriales',
    career: 'Ingeniería',
    level: 'Asequible',
    duration: '7 h',
    price: 15,
    description: 'Seguridad, mejora continua y cómo hablar de proyectos universitarios.',
  },
  {
    id: 'c8',
    title: 'Psicología organizacional aplicada',
    career: 'Psicología',
    level: 'Gratis',
    duration: '4 h',
    price: 0,
    description: 'Clima laboral, selección básica y ética en el primer rol de RR. HH.',
  },
]

export const interviewAreas = [
  {
    id: 'general',
    name: 'General / primera oportunidad',
    questions: [
      {
        q: '¿Por qué deberíamos contratarte si no tienes experiencia laboral formal?',
        tip: 'Habla de proyectos, pasantías, voluntariado y cómo aprendes rápido. Usa un ejemplo concreto.',
        goodSignals: ['ejemplos concretos', 'aprendizaje', 'impacto'],
      },
      {
        q: 'Cuéntanos de un problema que resolviste en la universidad o en un proyecto.',
        tip: 'Usa STAR: Situación, Tarea, Acción, Resultado. Cuantifica si puedes.',
        goodSignals: ['STAR', 'resultado', 'colaboración'],
      },
      {
        q: '¿Qué harías en tus primeros 30 días en el puesto?',
        tip: 'Muestra curiosidad: observar, preguntar, documentar y aportar con lo que ya sabes.',
        goodSignals: ['escuchar', 'preguntar', 'priorizar'],
      },
    ],
  },
  {
    id: 'admin',
    name: 'Administración',
    questions: [
      {
        q: '¿Cómo organizas varias tareas con plazos cortos?',
        tip: 'Menciona priorización, listas y comunicación proactiva si algo se atrasa.',
        goodSignals: ['priorización', 'comunicación', 'herramientas'],
      },
      {
        q: 'Describe un proceso que hayas mejorado, aunque sea pequeño.',
        tip: 'Incluso un flujo de clase o un negocio familiar cuenta si muestras el antes/después.',
        goodSignals: ['antes/después', 'eficiencia', 'iniciativa'],
      },
    ],
  },
  {
    id: 'tech',
    name: 'Tecnología',
    questions: [
      {
        q: '¿Cómo aprendes una tecnología nueva cuando el plazo es corto?',
        tip: 'Habla de documentación oficial, proyectos mínimos y pedir feedback temprano.',
        goodSignals: ['docs', 'MVP', 'feedback'],
      },
      {
        q: 'Explícanos un proyecto de tu portafolio y una decisión técnica que tomaste.',
        tip: 'Evita jerga vacía: dilema, opciones, trade-off y qué aprendiste.',
        goodSignals: ['trade-off', 'aprendizaje', 'claridad'],
      },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    questions: [
      {
        q: '¿Cómo medirías el éxito de una campaña pequeña con poco presupuesto?',
        tip: 'Define un objetivo (leads, alcance, conversión) y 1–2 métricas claras.',
        goodSignals: ['objetivo', 'métricas', 'presupuesto'],
      },
    ],
  },
]

export const employmentTips = [
  {
    title: 'Traduce lo que ya hiciste',
    body: 'Pasantías, tesis, clubes y ayuda en negocios familiares son experiencia si describes impacto.',
  },
  {
    title: 'Certifica lo aprendido',
    body: 'Los tutoriales suman más cuando hay un certificado o un proyecto público que lo demuestre.',
  },
  {
    title: 'Apunta a roles junior y pasantías reales',
    body: 'Filtra ofertas que no exijan años de experiencia y busca empresas con sello Primera Oportunidad.',
  },
  {
    title: 'Practica la entrevista',
    body: 'Usa el simulador: responde en voz alta, pide feedback y mejora una respuesta a la vez.',
  },
]

export const mentors = [
  {
    id: 'm1',
    name: 'Carolina Vega',
    role: 'People Partner · Fintech',
    city: 'Quito',
    areas: ['Administración', 'RR. HH.'],
    bio: 'Acompaña a egresados a preparar CV y primeras entrevistas en empresas de servicios.',
    initials: 'CV',
  },
  {
    id: 'm2',
    name: 'Diego Andrade',
    role: 'Lead Engineer · Software',
    city: 'Guayaquil',
    areas: ['Tecnología'],
    bio: 'Revisa portafolios y mock interviews técnicas para roles junior.',
    initials: 'DA',
  },
  {
    id: 'm3',
    name: 'Lucía Paredes',
    role: 'Brand Manager',
    city: 'Cuenca',
    areas: ['Marketing', 'Comunicación'],
    bio: 'Ayuda a armar case studies y portfolios creativos con poco presupuesto.',
    initials: 'LP',
  },
  {
    id: 'm4',
    name: 'Miguel Torres',
    role: 'Auditor senior',
    city: 'Quito',
    areas: ['Auditoría'],
    bio: 'Orienta sobre primeras pasantías en firmas y cómo hablar de Excel y ética.',
    initials: 'MT',
  },
]

export const youngProfile = {
  name: 'Valentina Ruiz',
  age: 22,
  career: 'Administración — recién egresada',
  city: 'Ibarra',
  headline: 'Busco mi primera oportunidad en operaciones o coordinación.',
  skills: ['Excel intermedio', 'Atención al cliente', 'Organización de eventos', 'Comunicación escrita'],
  courses: ['CV que abre puertas', 'Comunicación profesional en entrevistas'],
  internships: [
    { place: 'Gobierno estudiantil UTN', detail: 'Coordinación logística de ferias (4 meses)' },
  ],
  projects: [
    { name: 'Inventario familiar', detail: 'Digitalizó stock de la frutería familiar con hojas de cálculo' },
  ],
}

export const cities = ['Quito', 'Guayaquil', 'Cuenca', 'Ibarra', 'Ambato', 'Remoto']
export const modalities = ['Presencial', 'Híbrido', 'Remoto']

export const jobs = [
  {
    id: 'j1',
    title: 'Asistente administrativo junior',
    company: 'Nexo Servicios',
    career: 'Administración',
    city: 'Quito',
    modality: 'Híbrido',
    salary: 'USD 450–550',
    salaryMin: 450,
    experience: 'Sin experiencia',
    primeraOportunidad: true,
    description: 'Apoyo en agenda, documentos y seguimiento a proveedores. Inducción guiada.',
  },
  {
    id: 'j2',
    title: 'Pasantía en auditoría',
    company: 'Firma Andina',
    career: 'Auditoría',
    city: 'Quito',
    modality: 'Presencial',
    salary: 'Ayuda económica',
    salaryMin: 200,
    experience: 'Sin experiencia',
    primeraOportunidad: true,
    description: 'Apoyo en papeles de trabajo y revisión documental con mentor asignado.',
  },
  {
    id: 'j3',
    title: 'Community junior',
    company: 'Estudio Norte',
    career: 'Marketing',
    city: 'Cuenca',
    modality: 'Remoto',
    salary: 'USD 400–500',
    salaryMin: 400,
    experience: 'Sin experiencia',
    primeraOportunidad: true,
    description: 'Contenido, calendario y reportes básicos. Se valora portafolio universitario.',
  },
  {
    id: 'j4',
    title: 'Desarrollador junior',
    company: 'CodeCosta',
    career: 'Tecnología',
    city: 'Guayaquil',
    modality: 'Híbrido',
    salary: 'USD 600–750',
    salaryMin: 600,
    experience: 'Junior / sin experiencia formal',
    primeraOportunidad: true,
    description: 'Bugs, features pequeñas y pair programming. Stack: React y Node.',
  },
  {
    id: 'j5',
    title: 'Diseñador UI en formación',
    company: 'Pixel Pacífico',
    career: 'Diseño',
    city: 'Remoto',
    modality: 'Remoto',
    salary: 'USD 380–480',
    salaryMin: 380,
    experience: 'Sin experiencia',
    primeraOportunidad: false,
    description: 'Soporte a diseñador senior en wireframes y handoff.',
  },
  {
    id: 'j6',
    title: 'Auxiliar de comunicación',
    company: 'Fundación AbrePuerta',
    career: 'Comunicación',
    city: 'Ibarra',
    modality: 'Presencial',
    salary: 'USD 420',
    salaryMin: 420,
    experience: 'Sin experiencia',
    primeraOportunidad: true,
    description: 'Notas, redes y apoyo a eventos comunitarios.',
  },
  {
    id: 'j7',
    title: 'Pasantía en ingeniería de procesos',
    company: 'Industrias Sierra',
    career: 'Ingeniería',
    city: 'Ambato',
    modality: 'Presencial',
    salary: 'Ayuda económica',
    salaryMin: 250,
    experience: 'Sin experiencia',
    primeraOportunidad: true,
    description: 'Observación de planta, checklists de seguridad y proyectos 5S.',
  },
  {
    id: 'j8',
    title: 'Asistente de selección junior',
    company: 'Talento Cercano',
    career: 'Psicología',
    city: 'Guayaquil',
    modality: 'Híbrido',
    salary: 'USD 480–560',
    salaryMin: 480,
    experience: 'Sin experiencia',
    primeraOportunidad: false,
    description: 'Coordinación de entrevistas y screening inicial con supervisión.',
  },
]

export const applicationStatuses = [
  'Enviada',
  'Vista',
  'En revisión',
  'Entrevista',
  'Resultado',
]

export const initialApplications = [
  {
    id: 'a1',
    jobId: 'j1',
    status: 'En revisión',
    updatedAt: '2026-05-18',
    alert: 'La empresa actualizó tu estado hace 2 días.',
  },
  {
    id: 'a2',
    jobId: 'j3',
    status: 'Entrevista',
    updatedAt: '2026-05-20',
    alert: 'Entrevista virtual programable — revisa tu correo.',
  },
  {
    id: 'a3',
    jobId: 'j6',
    status: 'Vista',
    updatedAt: '2026-05-15',
    alert: null,
  },
  {
    id: 'a4',
    jobId: 'j2',
    status: 'Enviada',
    updatedAt: '2026-05-21',
    alert: null,
  },
]

export const recommendations = [
  {
    id: 'r1',
    title: 'Completa el simulador de entrevistas (área Administración)',
    reason: 'Tienes 2 postulaciones activas en roles administrativos.',
  },
  {
    id: 'r2',
    title: 'Postula a “Pasantía en auditoría” si te interesa finanzas',
    reason: 'Coincide con perfiles junior sin experiencia en Quito.',
  },
  {
    id: 'r3',
    title: 'Solicita mentoría con Carolina Vega',
    reason: 'Especialista en primeras entrevistas para administración.',
  },
]

export const companyBenefits = [
  {
    title: 'Talento motivado',
    body: 'Jóvenes con hambre de aprender y disponibilidad para formarse en el puesto.',
  },
  {
    title: 'Proceso simple',
    body: 'Publica ofertas junior o pasantías en minutos y recibe perfiles con cursos y proyectos.',
  },
  {
    title: 'Sello Primera Oportunidad',
    body: 'Destaca tu compromiso con roles sin filtro de experiencia y pasantías reales.',
  },
  {
    title: 'Acompañamiento',
    body: 'Plantillas de entrevista y buenas prácticas para incorporar sin “años de experiencia”.',
  },
]

export const team = [
  {
    name: 'Equipo de validación',
    role: 'Investigación de campo',
    bio: 'Entrevistas a jóvenes egresados, estudiantes y profesionales de RR. HH. en Ecuador.',
  },
  {
    name: 'Equipo de producto',
    role: 'Diseño y plataforma',
    bio: 'Construye la experiencia digital: capacitaciones, bolsa de empleo y panel del usuario.',
  },
  {
    name: 'Aliados',
    role: 'Empresas y mentores',
    bio: 'Red que abre vacantes junior y acompaña el primer paso laboral.',
  },
]

export const methodology = [
  {
    step: '1',
    title: 'Escuchar',
    body: 'Conversaciones en primera persona con jóvenes y expertos en talento (sin inventar cifras adicionales).',
  },
  {
    step: '2',
    title: 'Contrastar',
    body: 'Contrastar relatos con indicadores oficiales INEC sobre juventud, PEA, desempleo y subempleo.',
  },
  {
    step: '3',
    title: 'Diseñar',
    body: 'Traducir causas validadas en pilares: capacitar, conectar y emplear.',
  },
]
