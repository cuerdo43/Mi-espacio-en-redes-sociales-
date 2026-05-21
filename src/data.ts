/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ForumThread, Poll } from './types';

export const INITIAL_THREADS: ForumThread[] = [
  {
    id: 'thread-1',
    category: 'Estrategia',
    title: '¿Siguen funcionando los hashtags en Instagram este año?',
    author: 'Mateo Delgado',
    authorRole: 'Usuario',
    content: 'Hola comunidad, he notado que el alcance orgánico de mis publicaciones ha bajado drásticamente a pesar de usar 15-20 hashtags relevantes. ¿Será que Instagram está penalizando esta práctica o el algoritmo prioriza otra cosa?',
    date: 'Hace 2 días',
    likes: 12,
    replies: [
      {
        id: 'reply-1-1',
        author: 'Andrés Felipe León',
        role: 'Creador',
        content: '¡Hola Mateo! Totalmente cierto. Mosseri (CEO de Instagram) ha confirmado que los hashtags ya no son el foco principal para el alcance, sino la optimización SEO en el texto (palabras clave en el pie de foto). Te aconsejo usar entre 3 y 5 hashtags muy específicos y enfocarte en generar contenido compartible y con alta retención (un buen "Hook" en el segundo 1 del reel).',
        date: 'Hace 1 día'
      },
      {
        id: 'reply-1-2',
        author: 'Sofia Ruiz',
        role: 'Moderador',
        content: 'Apoyo el punto de Andrés. También notarás una gran mejoría si pones transcripciones o textos nativos dentro del propio video, ya que la IA de la plataforma escanea visualmente e indexa las palabras ocultas.',
        date: 'Hace 18 horas'
      }
    ]
  },
  {
    id: 'thread-2',
    category: 'Herramientas',
    title: 'Alternativas de bajo presupuesto para programar publicaciones',
    author: 'Camilo Torres',
    authorRole: 'Usuario',
    content: 'Estoy empezando un emprendimiento y las plataformas grandes como Buffer o Hootsuite me quedan un poco caras en sus planes de equipo. ¿Qué herramienta gratuita o económica me recomiendan para automatizar feeds y stories?',
    date: 'Hace 4 días',
    likes: 8,
    replies: [
      {
        id: 'reply-2-1',
        author: 'Andrés Felipe León',
        role: 'Creador',
        content: 'Hola Camilo, para empezar con costo cero, la herramienta oficial de Meta: Meta Business Suite es lo más seguro y te permite programar Reels, Posts y Stories en Facebook e Instagram gratis. Si buscas algo más visual para planificar tu grid, Later tiene un plan gratuito muy decente que te da hasta 30 posts al mes por canal.',
        date: 'Hace 3 días'
      }
    ]
  },
  {
    id: 'thread-3',
    category: 'Dudas PQR',
    title: 'Cómo solicitar formalmente la recuperación de alcance tras un Shadowban',
    author: 'Laura Mendez',
    authorRole: 'Usuario',
    content: 'Mi página de arte digital sufrió una caída del 95% de visualizaciones de la noche a la mañana tras publicar una ilustración que el algoritmo clasificó erróneamente como spam. Ya radiqué una queja en "Reportar un problema" pero no me responden. ¿Hay algún canal más efectivo?',
    date: 'Hace 5 días',
    likes: 15,
    replies: [
      {
        id: 'reply-3-1',
        author: 'Andrés Pérez',
        role: 'Usuario',
        content: 'Me pasó algo parecido Laura. Lastimosamente las redes grandes no atienden rápidamente estas dudas individuales. Lo mejor es revisar detalladamente el "Estado de la cuenta" desde el panel de creadores para ver si tienes infracciones de distribución activas y borrarlas.',
        date: 'Hace 4 días'
      },
      {
        id: 'reply-3-2',
        author: 'Andrés Felipe León',
        role: 'Creador',
        content: '¡Laura! Lamento mucho que pases por eso. Revisa el tutorial sobre "Protección y Soluciones Digitales" en el menú de arriba. He dejado un paso a paso y un diagrama de flujo sobre qué hacer ante restricciones algorítmicas o sospechas de Shadowban. ¡Te servirá muchísimo!',
        date: 'Hace 3 días'
      }
    ]
  }
];

export const INITIAL_POLLS: Poll[] = [
  {
    id: 'poll-1',
    question: '¿Cuál es tu principal desafío actualmente en redes sociales?',
    options: [
      { id: 'opt-1', text: 'Crear ideas de contenido constantes', votes: 42 },
      { id: 'opt-2', text: 'Entender el algoritmo y alcance', votes: 58 },
      { id: 'opt-3', text: 'Edición de video y diseño visual', votes: 21 },
      { id: 'opt-4', text: 'Convertir seguidores en clientes', votes: 35 }
    ],
    totalVotes: 156
  },
  {
    id: 'poll-2',
    question: '¿Qué formato de contenido consume más tu audiencia objetivo?',
    options: [
      { id: 'opt-2-1', text: 'Videos cortos (Reels / TikTok)', votes: 85 },
      { id: 'opt-2-2', text: 'Carruseles informativos', votes: 39 },
      { id: 'opt-2-3', text: 'Transmisiones en vivo', votes: 14 },
      { id: 'opt-2-4', text: 'Textos cortos e hilos', votes: 19 }
    ],
    totalVotes: 157
  }
];

export const EDUCATIONAL_STEPS = [
  {
    id: 'step-1',
    title: '1. Diagnóstico e Identificación',
    subtitle: 'Comprender tu audiencia y meta real',
    description: 'Antes de publicar, defines el por qué. ¿Cuál es tu nicho? ¿A qué dolores ("pain points") responde tu perfil? Detalla tu cliente/interlocutor ideal en una ficha de Buyer Persona virtual.',
    tips: [
      'Define tu palabra clave principal para tu bio.',
      'Analiza a tres cuentas referentes y anota lo que SÍ y lo que NO te gusta.'
    ]
  },
  {
    id: 'step-2',
    title: '2. Planificación y Mix de Contenidos',
    subtitle: 'La regla del 70/20/10 en comunicaciones',
    description: 'Distribuye tu esfuerzo estratégico: 70% contenido de valor y educativo (tips, soluciones a dolores), 20% contenido de interacción (encuestas, debates, novedades) y solo 10% de autopromoción directa.',
    tips: [
      'Crea un calendario de contenidos en Notion o Trello.',
      'Planifica con 1 semana de anticipación para evitar el estrés del día a día.'
    ]
  },
  {
    id: 'step-3',
    title: '3. Optimización Visual e Identidad',
    subtitle: 'La primera impresión dura 3 segundos',
    description: 'Consistencia gráfica. Selecciona una tipografía sans-serif limpia, limita tu paleta de diseño a 3 colores clave y mantén un tono de voz coherente (cercano, técnico o corporativo).',
    tips: [
      'Usa portadas estandarizadas para tus contenidos de video.',
      'Mantén tu foto de perfil visible, con buena iluminación y de preferencia con fondo neutro contrastante.'
    ]
  },
  {
    id: 'step-4',
    title: '4. Distribución y Conversación Activa',
    subtitle: 'Vencer el algoritmo mediante interacción humana',
    description: 'El algoritmo premia la reciprocidad. Dedica los primeros 20 minutos tras publicar a interactuar con otras cuentas e hilos de tu mismo campo y responde de inmediato a cada comentario entrante.',
    tips: [
      'Finaliza siempre tus textos con una pregunta abierta o una CTA (Llamado a la Acción) clara.',
      'Usa las historias diarias de Instagram para hacer encuestas breves que activen el flujo.'
    ]
  },
  {
    id: 'step-5',
    title: '5. Análisis y Ajuste Iterativo',
    subtitle: 'Aprender de las métricas crudas',
    description: 'Ignora las métricas de vanidad (como los likes solitarios). Evalúa la tasa de "Guardados" (indica valor educativo) y "Compartidos" (indica identificabilidad y comunidad). Ajusta el rumbo mensualmente.',
    tips: [
      'Si un post fue muy guardado, haz un video detallado sobre ese mismo tema.',
      'Si tuvo muchos compartidos, replica el formato visual o el gancho inicial.'
    ]
  }
];

export const PQRS_TEMPLATES = [
  {
    id: 'pqr-temp-1',
    title: '¿Mi alcance orgánico ha caído al mínimo, es Shadowban?',
    category: 'Estrategia de Alcance',
    description: 'El Shadowban ocurre al incumplir normas de la comunidad de forma leve (o recurrente). El algoritmo limita temporalmente tu alcance al público no seguidor. Revisa Ajustes > Estado de cuenta. Solución: Evita usar hashtags prohibidos, detén softwares de automatización no oficiales y tómate 2-3 días de reposo sin publicar actividades repetitivas.'
  },
  {
    id: 'pqr-temp-2',
    title: 'La música de mi video fue silenciada por derechos de autor',
    category: 'Uso de Herramientas',
    description: 'Esto sucede cuando perfiles comerciales usan música popular con derechos reservados de discográficas. Solución: Configura tu tipo de cuenta como "Creador en lugar de Cuenta Comercial" para acceder a un catálogo más ágil, o utiliza exclusivamente la biblioteca de música libre de regalías proporcionada por la propia app.'
  },
  {
    id: 'pqr-temp-3',
    title: 'Se han creado cuentas clonadas suplantando mi identidad',
    category: 'Seguridad Digital',
    description: 'Este es una problemática común de seguridad. El canal para formalizar un reclamo es a través del formulario oficial de suplantación de identidad adjuntando tu documento de identidad oficial. Nunca interactúes con la cuenta clonada para evitar que te bloquee y pierdas la capacidad de reportarlo directamente en las plataformas.'
  }
];
