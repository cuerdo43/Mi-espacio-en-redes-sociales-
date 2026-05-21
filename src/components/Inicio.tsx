/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, BookOpen, Users, Compass, Eye, Shield, CheckCircle, Palette, Sparkles, MessageCircleCode } from 'lucide-react';

interface InicioProps {
  onNavigate: (tab: string) => void;
}

export default function Inicio({ onNavigate }: InicioProps) {
  return (
    <div className="space-y-12 pb-16 animate-fade-in">
      
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-stone-50 to-[#FAF8F5] border border-stone-200 p-8 md:p-14 shadow-xs">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#E6F0EC] rounded-full blur-3xl opacity-60 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FAF8F5] rounded-full blur-2xl opacity-40 -ml-20 -mb-20"></div>
        
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#E6F0EC] text-[#15803D] px-3 py-1 rounded-full text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultoría & Estrategia Digital</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight tracking-tight">
            Escribir con claridad, conectar con <span className="italic text-[#B45309]">propósito</span>.
          </h2>
          
          <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            Bienvenidos a mi espacio en la web. Soy <span className="font-semibold text-stone-900">Andrés Felipe León</span>, estudiante del programa de la Universidad Manuela Beltrán apasionado de la comunicación virtual y la estrategia de difusión de contenidos. Aquí diseño puentes interactivos entre las marcas y sus comunidades.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('recurso')}
              className="px-6 py-3 bg-[#D97706] hover:bg-[#B45309] text-white font-medium rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center space-x-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver Guía Educativa</span>
            </button>
            <button
              onClick={() => onNavigate('canales')}
              className="px-6 py-3 bg-stone-950 hover:bg-stone-800 text-white font-medium rounded-xl transition-all cursor-pointer flex items-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>Interactuar Conmigo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Style Guide & Palette Section - SATISFIES THE COLOR/TYPO REQUIREMENT DIRECTLY AND BEAUTIFULLY */}
      <section className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 space-y-6">
        <div className="flex items-center space-x-3 border-b border-stone-100 pb-4">
          <Palette className="w-6 h-6 text-[#D97706]" />
          <div>
            <h3 className="font-serif text-2xl text-stone-900 font-bold">Identidad de Diseño del Sitio</h3>
            <p className="text-stone-500 font-mono text-xs">Cumplimiento formal de la Paleta y Tipografía requerida para la Actividad</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Colors palette */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-stone-500 uppercase font-mono">Paleta de Colores (5 Tonos Seleccionados)</h4>
            <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono">
              <div className="space-y-1.5">
                <div className="h-16 bg-[#FAF8F5] rounded-xl border border-stone-200" title="Beige Arena"></div>
                <p className="font-bold text-stone-800">#FAF8F5</p>
                <span className="text-[10px] text-stone-500 block">Ambiente Base</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 bg-[#1C1917] rounded-xl" title="Pizarra Carbón"></div>
                <p className="font-bold text-stone-800">#1C1917</p>
                <span className="text-[10px] text-stone-500 block">Texto & Trazos</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 bg-[#D97706] rounded-xl" title="Terracota Ámbar"></div>
                <p className="font-bold text-stone-800">#D97706</p>
                <span className="text-[10px] text-stone-500 block">Primario Accl</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 bg-[#E6F0EC] rounded-xl" title="Menta Místico"></div>
                <p className="font-bold text-stone-800">#E6F0EC</p>
                <span className="text-[10px] text-stone-500 block">Soporte/Fondo</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 bg-[#15803D] rounded-xl" title="Verde Esmeralda"></div>
                <p className="font-bold text-stone-800">#15803D</p>
                <span className="text-[10px] text-stone-500 block">Enfoque Éxito</span>
              </div>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              Esta paleta transmite serenidad, organización y pulcritud intelectual, idónea para la <span className="font-semibold text-stone-900">difusión de contenidos educativos y técnicos sobre marketing y comunicación virtual</span>, evitando el agotamiento visual comúnmente asociado a las redes sociales.
            </p>
          </div>

          {/* Typography */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-stone-500 uppercase font-mono">Tipografía Académica & Profesional</h4>
            <div className="space-y-3.5 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-medium text-stone-400">FUENTE DE TITULARES: <b>Playfair Display</b> (Serif)</span>
                <p className="font-serif text-2xl text-stone-900 italic font-medium">Calidez, estatus intelectual y claridad editorial.</p>
              </div>
              <hr className="border-stone-200" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-medium text-stone-400">FUENTE DEL CUERPO DE TEXTO: <b>Plus Jakarta Sans</b> (Sans-Serif)</span>
                <p className="font-sans text-sm text-stone-700 leading-relaxed font-light">Optimizado para legibilidad digital móvil en pantallas de alta densidad de pixeles. Estructura minimalista y moderna.</p>
              </div>
              <hr className="border-stone-200" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-medium text-stone-400">FUENTE DE CONTROL & DATOS: <b>JetBrains Mono</b> (Monospace)</span>
                <p className="font-mono text-xs text-stone-600">Para metadatos, tags y métricas analíticas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Profile and Core Competency Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Profile Details Container */}
        <div className="lg:col-span-1 bg-white border border-stone-200 p-6 rounded-2xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-tr from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-3xl font-serif font-bold shadow-xs">
              A
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-stone-900">Andrés Felipe León</h4>
              <p className="text-[#B45309] font-mono text-xs font-semibold">Consultor de Estrategia & Comunicación • UMB</p>
              <p className="text-stone-400 text-xs font-mono">andres.leon@correo.com</p>
            </div>
            
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              Estudiante del programa de Comunicación Virtual en la Universidad Manuela Beltrán con especialización en mediación digital y analítica de audiencias en redes.
            </p>
            
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold font-mono tracking-wider text-stone-400 block uppercase">Competencias Clave</span>
              <div className="flex flex-wrap gap-1.5">
                {['Planificación de Canales', 'Gestión de Crisis PQR', 'Auditoría SEO en Bio', 'Análisis de Métricas'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-medium rounded-lg border border-stone-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-stone-100 pt-4 text-xs text-stone-500 flex items-center space-x-2">
            <Award className="w-4 h-4 text-stone-400" />
            <span>Materia: Técnicas de Comunicación Virtual</span>
          </div>
        </div>

        {/* Pillars / Competency Framework */}
        <div className="lg:col-span-2 bg-white border border-stone-200 p-6 md:p-8 rounded-2xl space-y-6">
          <h3 className="font-serif text-2xl text-stone-900 font-bold">Estrategia de Comunicación</h3>
          <p className="text-stone-600 font-light leading-relaxed">
            A través de las redes virtuales, desarrollamos espacios inteligentes para compartir, motivar y entablar diálogos constructivos. Mi marco de trabajo profesional se rige por tres pilares fundamentales que todo canal debería implementar para tener éxito en la web:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            <div className="space-y-2 p-4 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-150">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-700">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-stone-900 text-base">Contenido de Valor</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-light">
                No aportes mas ruido digital. Cada post debe educar, inspirar o dar respuestas concretas y viables a las personas.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-150">
              <div className="w-10 h-10 bg-[#E6F0EC] rounded-lg flex items-center justify-center text-[#15803D]">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-stone-900 text-base">Transparencia y Ética</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-light">
                Consistencia y respeto al usuario. Brindar canales formales abiertos a quejas (PQRs) y proteger su privacidad.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-150">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-stone-900 text-base">Conversación Activa</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-light">
                Las redes son humanas. Debemos habilitar foros de discusión integrados, chats automáticos y encuestas ágiles de feedback.
              </p>
            </div>

          </div>

          <div className="p-4 bg-[#E6F0EC]/50 border border-[#E6F0EC] rounded-xl flex items-start space-x-3 text-stone-800 text-sm">
            <CheckCircle className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
            <p className="font-light">
              <span className="font-semibold text-stone-900">Proyecto Académico:</span> Esta plataforma contiene un simulador interactivo para poner en práctica estos criterios. Puedes debatir tus ideas de manera segura en el <b>Foro de Discusión</b> o probar los sistemas de retroalimentación en tiempo real.
            </p>
          </div>
        </div>

      </section>

      {/* Bottom CTA Card */}
      <section className="bg-stone-950 text-stone-100 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left max-w-xl">
          <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold">¿Listo para auditar tu presencia en redes sociales?</h3>
          <p className="text-stone-400 font-light text-sm">
            He preparado una guía didáctica interactiva detallando el ciclo de vida de un contenido viral, su optimización de bio y resolución de dudas sobre shadowban.
          </p>
        </div>
        <button
          onClick={() => onNavigate('recurso')}
          className="px-6 py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white text-sm font-semibold rounded-xl inline-flex items-center space-x-2 transition-all cursor-pointer whitespace-nowrap"
        >
          <span>Comenzar el Tutorial</span>
          <BookOpen className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
