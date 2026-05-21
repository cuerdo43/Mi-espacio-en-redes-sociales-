/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EDUCATIONAL_STEPS, PQRS_TEMPLATES } from '../data';
import { ArrowRight, Sparkles, AlertCircle, HelpCircle, Flame, CheckCircle, Info, Heart, Award } from 'lucide-react';

export default function RecursoEducativo() {
  const [selectedStep, setSelectedStep] = useState(0);
  const [activeTab, setActiveTab] = useState<'guia' | 'simulador' | 'faq-pqr'>('guia');

  // Simulator State
  const [platform, setPlatform] = useState<'instagram' | 'tiktok' | 'linkedin'>('instagram');
  const [format, setFormat] = useState<'reel' | 'carousel' | 'text'>('reel');
  const [goal, setGoal] = useState<'reach' | 'edu' | 'sales'>('edu');

  // Handler for custom strategic simulator advice
  const getSimulatedStrategy = () => {
    let hook = '';
    let callToAction = '';
    let estimatedAudit = { reach: 0, engagement: 0, difficulty: '' };
    let outline = '';

    if (platform === 'instagram') {
      if (format === 'reel') {
        hook = '“Esto cambió las reglas del juego para siempre en mis redes...” o “Deja de cometer este error clásico hoy mismo.”';
        callToAction = '“Guarda este video en tus favoritos para cuando vayas a planificar tu contenido esta noche.”';
        outline = 'Graba en formato vertical 9:16 de máximo 30 segundos, acelerando el primer segundo y agregando subtítulos dinámicos de alto contraste.';
        estimatedAudit = { reach: 85, engagement: 65, difficulty: 'Moderada / Alta' };
      } else if (format === 'carousel') {
        hook = 'Página 1: “La guía definitiva de 4 pasos para...” con un elemento visual en degradé que obligue a deslizar.';
        callToAction = '“Desliza al final para descargar el recurso en PDF o envíame la palabra GUIA por mensaje para enviarte el enlace.”';
        outline = 'Crea 5 a 6 diapositivas con contraste de colores (ej. fondo blanco con botones ámbar), explicando 1 solo tip sustancial en cada hoja.';
        estimatedAudit = { reach: 55, engagement: 85, difficulty: 'Baja' };
      } else {
        hook = 'Un texto con tipografía mono muy elegante o una captura de pantalla corta con fondo de gradiente sutil.';
        callToAction = '“¿Qué opinas sobre este cambio estructural? Te leo en los comentarios abajo.”';
        outline = 'Ideal para publicar pensamientos breves, memes ejecutivos o citas inspiradoras rápidas en tus historias o hilos secundarios.';
        estimatedAudit = { reach: 45, engagement: 75, difficulty: 'Baja' };
      }
    } else if (platform === 'tiktok') {
      if (format === 'reel') {
        hook = '“Aquí tienes una verdad incómoda sobre el algoritmo que nadie te va a decir gratis...” o “La manera más rápida de resolver esto.”';
        callToAction = '“Dale clic al botón de seguir para recibir un nuevo hack diario y comparte esto con tu socio.”';
        outline = 'Enfoque hiper-orgánico. Sin música corporativa aburrida, usa audios en tendencia, lenguaje rápido con cortes constantes de silencio.';
        estimatedAudit = { reach: 95, engagement: 70, difficulty: 'Alta' };
      } else if (format === 'carousel') {
        hook = 'Imágenes tipo meme sobre dolores empresariales seguidas de capturas de pantalla de tus analíticas reales.';
        callToAction = '“Comenta cuál de estas soluciones necesitas implementar primero hoy.”';
        outline = 'Fotos consecutivas utilizando la herramienta nativa de carretes de fotos animados de TikTok con sonido popular pegado de fondo.';
        estimatedAudit = { reach: 75, engagement: 80, difficulty: 'Baja / Media' };
      } else {
        hook = 'Hilos textuales formateados en imágenes elegantes.';
        callToAction = '“Visita el enlace de mi perfil para agendar una consultoría de media hora.”';
        outline = 'Adecuado para responder en video a preguntas cortas que tus seguidores te dejen en comentarios.';
        estimatedAudit = { reach: 60, engagement: 50, difficulty: 'Baja' };
      }
    } else { // linkedin
      if (format === 'reel') {
        hook = '“En mi experiencia liderando campañas, aprendí que la sobre-comunicación es más efectiva que un diseño costoso...”';
        callToAction = '“¿Te ha sucedido esto en tu equipo de mercadeo? Comparte esta publicación con tu red profesional.”';
        outline = 'Video corporativo directo a cámara, preferiblemente con subtítulos nativos, discutiendo un caso de estudio real.';
        estimatedAudit = { reach: 65, engagement: 55, difficulty: 'Alta' };
      } else if (format === 'carousel') {
        hook = '“Diagrama de Flujo Completo: De seguidor en LinkedIn a cliente fidelizado (Paso a paso documentado).”';
        callToAction = '“¿Deseas el archivo Excel para replicar este proceso? Deja un comentario abajo y te lo compartiré de inmediato.”';
        outline = 'Documento PDF auto-contenido cargado como carrusel, con colores sobrios, gráficas lógicas y estadísticas reales de la industria.';
        estimatedAudit = { reach: 90, engagement: 95, difficulty: 'Media' };
      } else {
        hook = '“A los 22 años pensé que la clave del marketing era el logo. 10 años después, descubrí que la real clave es ésta...”';
        callToAction = '“Espero que estas reflexiones te sirvan. Sígueme para leer mis columnas de opinión semanales.”';
        outline = 'Textos largos con estructura de storytelling (problema ➔ clímax ➔ aprendizaje), utilizando saltos de renglón legibles.';
        estimatedAudit = { reach: 80, engagement: 80, difficulty: 'Compleja' };
      }
    }

    // Refine tips based on Goal
    let goalAdvice = '';
    if (goal === 'reach') {
      goalAdvice = 'Prioridad: Viralizar mediante ganchos emocionales. Mantén el video debajo de 15 segundos o haz un carrusel de máximo debate. Busca que compartan el recurso de forma masiva.';
    } else if (goal === 'edu') {
      goalAdvice = 'Prioridad: Demostrar autoridad. Explica un concepto técnico complejo simplificándolo en metáforas. Promueve que los usuarios lo guarden en sus marcadores, que es la métrica de valor.';
    } else {
      goalAdvice = 'Prioridad: Llamado a la acción (CTA) directo. Explica brevemente el problema y cómo tu herramienta o consultoría lo soluciona, redirigiéndoles de inmediato al formulario de contacto de la web.';
    }

    return { hook, callToAction, outline, estimatedAudit, goalAdvice };
  };

  const currentStrategy = getSimulatedStrategy();

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Tab bar header */}
      <div className="flex border-b border-stone-200">
        <button
          onClick={() => setActiveTab('guia')}
          className={`flex-1 py-4 text-center border-b-2 font-serif text-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'guia' ? 'border-[#D97706] text-stone-900 font-bold' : 'border-transparent text-stone-500 hover:text-stone-800'
          }`}
        >
          1. Metodología Educativa
        </button>
        <button
          onClick={() => setActiveTab('simulador')}
          className={`flex-1 py-4 text-center border-b-2 font-serif text-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'simulador' ? 'border-[#D97706] text-stone-900 font-bold' : 'border-transparent text-stone-500 hover:text-stone-800'
          }`}
        >
          2. Planificador Táctico
        </button>
        <button
          onClick={() => setActiveTab('faq-pqr')}
          className={`flex-1 py-4 text-center border-b-2 font-serif text-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'faq-pqr' ? 'border-[#D97706] text-stone-900 font-bold' : 'border-transparent text-stone-500 hover:text-stone-800'
          }`}
        >
          3. Soluciones a Problemas Habituales
        </button>
      </div>

      {activeTab === 'guia' && (
        <div className="space-y-6">
          <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-2xl">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Metodología: El Ciclo de Vida del Contenido Virtual</h3>
            <p className="text-stone-700 font-light leading-relaxed text-sm">
              Esta infografía y mapa paso a paso conceptual (desarrollada formalmente para este proyecto en la materia de Técnicas de Comunicación Virtual) describe el camino estructurado que recorre un mensaje digital efectivo: desde la prospección lógica de la audiencia hasta el análisis de la retroalimentación.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Step Selection List */}
            <div className="lg:col-span-1 space-y-2.5">
              <span className="text-xs font-mono tracking-wider text-stone-400 font-bold uppercase block px-1">Fases de la Estrategia</span>
              {EDUCATIONAL_STEPS.map((step, index) => {
                const isSelected = selectedStep === index;
                return (
                  <button
                    key={step.id}
                    onClick={() => setSelectedStep(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 border-stone-900 text-stone-100 shadow-sm'
                        : 'bg-white border-stone-200 text-stone-800 hover:bg-stone-50 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <p className={`font-mono text-xs ${isSelected ? 'text-amber-400' : 'text-[#B45309]'}`}>{step.title.split('.')[0]}. Fase</p>
                      {isSelected && <ArrowRight className="w-4 h-4 text-amber-400" />}
                    </div>
                    <h4 className="font-serif font-bold text-base tracking-tight mt-1">{step.title.split('. ')[1]}</h4>
                  </button>
                );
              })}
            </div>

            {/* Step Explanatory Visual Interactive Panel */}
            <div className="lg:col-span-2 bg-white border border-stone-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
              
              {/* Illustrated Header */}
              <div className="space-y-3">
                <span className="px-3 py-1 bg-amber-50 text-amber-800 font-mono text-[10px] uppercase rounded-full border border-amber-200">
                  Fase {selectedStep + 1} del Ciclo Estratégico
                </span>
                
                <h4 className="font-serif text-3xl font-bold text-stone-950">
                  {EDUCATIONAL_STEPS[selectedStep].title}
                </h4>
                <p className="text-[#B45309] font-mono text-xs font-semibold uppercase tracking-wider">
                  {EDUCATIONAL_STEPS[selectedStep].subtitle}
                </p>
                <hr className="border-stone-100" />
                <p className="text-stone-700 leading-relaxed font-light text-base pt-2">
                  {EDUCATIONAL_STEPS[selectedStep].description}
                </p>
              </div>

              {/* Dynamic Interactive Diagram of the Flow built with clean CSS */}
              <div className="bg-[#FAF8F5] p-5 rounded-xl border border-stone-150 space-y-4">
                <p className="text-stone-500 font-mono text-[11px] uppercase tracking-wider font-bold">Estado actual del flujo web:</p>
                <div className="hidden sm:flex items-center justify-between gap-2">
                  {EDUCATIONAL_STEPS.map((s, idx) => (
                    <React.Fragment key={s.id}>
                      <div
                        onClick={() => setSelectedStep(idx)}
                        className={`px-3 py-1.5 text-[11px] font-mono rounded-lg border text-center transition-all cursor-pointer flex-1 ${
                          idx === selectedStep
                            ? 'bg-[#E6F0EC] text-[#15803D] border-[#15803D] font-bold shadow-xs scale-105'
                            : idx < selectedStep
                            ? 'bg-stone-200 text-stone-500 border-stone-300'
                            : 'bg-white text-stone-400 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        Paso {idx + 1}
                      </div>
                      {idx < EDUCATIONAL_STEPS.length - 1 && (
                        <div className="text-stone-300 font-bold">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                {/* Mobile text-indicator of flow */}
                <div className="sm:hidden text-stone-600 font-mono text-xs">
                  Progreso del flujo: <span className="font-bold text-[#15803D]">Paso {selectedStep + 1} de {EDUCATIONAL_STEPS.length} ({Math.round(((selectedStep + 1) / EDUCATIONAL_STEPS.length) * 100)}%)</span>
                </div>
              </div>

              {/* Pro Tips list */}
              <div className="space-y-2 pt-2">
                <h5 className="text-sm font-semibold text-stone-900 flex items-center space-x-1.5">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>Consejos Tácticos de Andrés Felipe León</span>
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {EDUCATIONAL_STEPS[selectedStep].tips.map((tip, idx) => (
                    <li key={idx} className="p-3 bg-stone-50 rounded-lg text-stone-700 text-xs font-light border border-stone-200 flex items-start space-x-2">
                      <span className="text-stone-400 font-mono font-bold mt-0.5">{idx + 1}.</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}

      {activeTab === 'simulador' && (
        <div className="space-y-6">
          <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-2xl space-y-2">
            <h3 className="font-serif text-2xl font-bold text-stone-900">Simulador de Planificación de Contenidos</h3>
            <p className="text-stone-700 font-light text-sm max-w-4xl">
              Selecciona tu canal principal, el formato de comunicación virtual y el fin que persigues para generar al instante tu hoja de ruta con ideas de ganchos argumentativos, estructura de video y previsiones de alcance algorítmico elaborados bajo mi auditoría.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Control Sandbox Form (Left/3cols) */}
            <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-6 space-y-6 shadow-xs">
              
              {/* Factor 1: Plataforma */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-stone-400 uppercase block">1. Canal de Red Social</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'instagram', label: 'Instagram' },
                    { id: 'tiktok', label: 'TikTok' },
                    { id: 'linkedin', label: 'LinkedIn' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPlatform(p.id as any)}
                      className={`py-2 px-1 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                        platform === p.id
                          ? 'bg-[#E6F0EC] border-[#15803D] text-[#15803D] font-bold'
                          : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-600'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Factor 2: Formato */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-stone-400 uppercase block">2. Formato del Contenido</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'reel', label: 'Video Corto' },
                    { id: 'carousel', label: 'Carrusel PDF' },
                    { id: 'text', label: 'Texto / Cita' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFormat(f.id as any)}
                      className={`py-2 px-1 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                        format === f.id
                          ? 'bg-[#E6F0EC] border-[#15803D] text-[#15803D] font-bold'
                          : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-600'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Factor 3: Objetivo */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-stone-400 uppercase block">3. Objetivo Principal de Conversión</label>
                <div className="space-y-2">
                  {[
                    { id: 'reach', title: 'Alcance & Atracción de Seguidores', text: 'Optimizar para que compartan la cuenta' },
                    { id: 'edu', title: 'Educar, Demostrar Valor e Impactar', text: 'Optimizar para guardados e interacción' },
                    { id: 'sales', title: 'Conversión a Negocios / Contacto', text: 'Optimizar para clics al botón formulario' }
                  ].map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setGoal(g.id as any)}
                      className={`w-full py-2.5 px-3 text-left rounded-lg border transition-all cursor-pointer flex justify-between items-center ${
                        goal === g.id
                          ? 'bg-amber-50 border-[#D97706] text-stone-900 font-semibold'
                          : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-600'
                      }`}
                    >
                      <div className="text-left">
                        <p className="text-xs">{g.title}</p>
                        <p className="text-[10px] text-stone-400 font-light">{g.text}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full border-2 ${goal === g.id ? 'border-[#D97706] bg-[#D97706]' : 'border-stone-300'}`}></div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Strategic Advice Representation (Right/7cols) */}
            <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6">
              
              <div className="flex justify-between items-start border-b border-stone-100 pb-4">
                <div>
                  <span className="text-xs font-mono tracking-wide text-stone-400 uppercase font-bold block">Ficha Estratégica Generadora</span>
                  <h4 className="font-serif text-2xl font-bold text-stone-950 mt-1 capitalize">
                    {platform} / {format === 'reel' ? 'Video Corto' : format === 'carousel' ? 'Carrusel' : 'Texto Corto'}
                  </h4>
                </div>
                
                <div className="flex space-x-1.5 font-mono text-[10px]">
                  <span className="px-2 py-1 bg-stone-100 text-stone-700 rounded-lg">Costo: Gratuito</span>
                  <span className="px-2 py-1 bg-[#E6F0EC] text-[#15803D] rounded-lg font-bold">Simulación OK</span>
                </div>
              </div>

              {/* Forecast metric panel */}
              <div className="grid grid-cols-3 gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200 text-center">
                <div>
                  <p className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">Potencial de Alcance</p>
                  <p className="font-serif text-2xl font-bold text-stone-900 mt-1">{currentStrategy.estimatedAudit.reach}%</p>
                  <div className="w-full bg-stone-200 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: `${currentStrategy.estimatedAudit.reach}%` }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">Fidelización (Engagement)</p>
                  <p className="font-serif text-2xl font-bold text-stone-900 mt-1">{currentStrategy.estimatedAudit.engagement}%</p>
                  <div className="w-full bg-stone-200 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-[#15803D] h-full rounded-full" style={{ width: `${currentStrategy.estimatedAudit.engagement}%` }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">Complejidad Exigida</p>
                  <p className="font-serif text-sm font-semibold text-stone-900 mt-3">{currentStrategy.estimatedAudit.difficulty}</p>
                </div>
              </div>

              <div className="space-y-4">
                
                {/* Gancho Text */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>El Gancho Inicial Recomendado (Hook de Entrada):</span>
                  </h5>
                  <blockquote className="p-3 bg-stone-50 border-l-4 border-amber-500 rounded-r-lg font-serif italic text-stone-800 text-sm">
                    {currentStrategy.hook}
                  </blockquote>
                </div>

                {/* Content logic */}
                <div className="space-y-1">
                  <h5 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">Estructura del Contenido del Post:</h5>
                  <p className="text-stone-700 text-sm leading-relaxed font-light bg-stone-50 p-3 rounded-lg border border-stone-150">
                    {currentStrategy.outline}
                  </p>
                </div>

                {/* CTA logic */}
                <div className="space-y-1">
                  <h5 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">Llamado a la Acción (CTA de Tráfico):</h5>
                  <p className="text-stone-700 text-sm italic font-medium bg-stone-50 p-3 rounded-lg border border-stone-150">
                    {currentStrategy.callToAction}
                  </p>
                </div>

                {/* Core Advice based on Objective */}
                <div className="p-4 bg-[#E6F0EC]/50 border border-[#E6F0EC] rounded-xl flex items-start space-x-2.5">
                  <Info className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <p className="text-stone-700 text-xs font-light leading-relaxed">
                    <span className="font-semibold text-stone-900">Enfoque de Conversión:</span> {currentStrategy.goalAdvice}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {activeTab === 'faq-pqr' && (
        <div className="space-y-6">
          <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-2xl">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Canal PQR Informativo: Resolución de Dudas de Tráfico</h3>
            <p className="text-stone-700 font-light text-sm">
              Muchas de las dificultades habituales en el ecosistema virtual no se solucionan enviando solicitudes de ayuda a corporativos gigantes (que tardan semanas), sino entendiendo la ingeniería detrás del algoritmo. He elaborado este catálogo de incidencias frecuentes sobre el uso de redes virtuales para darte soluciones de fondo inmediatas de libre consulta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PQRS_TEMPLATES.map((item, index) => (
              <div key={item.id} className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-amber-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded-md text-[10px] font-mono">
                      {item.category}
                    </span>
                    <span className="text-stone-400 font-mono text-xs font-bold">0{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-stone-900 text-sm leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                
                <div className="border-t border-stone-105 pt-3 mt-1 flex items-center space-x-2 text-[10.5px] text-[#B45309] font-mono">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Solución Autogestionable de Andrés</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white border border-stone-200 rounded-2xl text-center space-y-4 max-w-2xl mx-auto">
            <HelpCircle className="w-8 h-8 text-[#D97706] mx-auto" />
            <h4 className="font-serif font-bold text-lg text-stone-900">¿Tienes un caso particular o personalizado?</h4>
            <p className="text-stone-600 text-xs font-light leading-relaxed">
              No te preocupes. Puedes ir a la pestaña de <b>Canales de Interacción</b> para radicar un PQRS oficial a mi buzón (que simulará un ticket automático), o abrir mi <b>Chat Interactivo</b> abajo para resolver dudas de manera inmediata.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
