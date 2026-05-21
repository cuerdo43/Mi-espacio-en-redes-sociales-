/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import RecursoEducativo from './components/RecursoEducativo';
import ForoDiscusion from './components/ForoDiscusion';
import CanalesInteraccion from './components/CanalesInteraccion';
import { Eye, ShieldAlert, Award, Globe, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900 flex flex-col justify-between">
      
      <div>
        {/* Header Navigation */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Floating Academic Alert Helper */}
        <div className="bg-amber-100/70 border-b border-amber-200 py-3 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-amber-900 font-sans">
            <span className="flex items-center space-x-1.5 font-medium">
              <Award className="w-4 h-4 text-amber-700 shrink-0" />
              <span><b>Entregable Actividad 3:</b> Mi espacio en la web: Redes sociales. Diseñado con paleta de 5 colores y tipografías personalizadas.</span>
            </span>
            <div className="flex items-center space-x-3 shrink-0 font-mono text-[10.5px]">
              <span className="flex items-center space-x-1">
                <Globe className="w-3.5 h-3.5 text-stone-500" />
                <span className="font-bold underline">100% Públicas - Sin claves</span>
              </span>
              <span className="text-stone-300">|</span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("¡Enlace copiado! Puedes probarlo en incógnito pulsando Ctrl+Shift+N en Chrome.");
                }}
                className="text-amber-800 hover:text-stone-950 font-bold transition-all cursor-pointer underline"
              >
                Probar en Incógnito
              </button>
            </div>
          </div>
        </div>

        {/* Main Viewport Content mapping */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          {activeTab === 'inicio' && <Inicio onNavigate={(tab) => setActiveTab(tab)} />}
          {activeTab === 'recurso' && <RecursoEducativo />}
          {activeTab === 'foro' && <ForoDiscusion />}
          {activeTab === 'canales' && <CanalesInteraccion />}
        </main>
      </div>

      {/* Sleek structured institutional Footer */}
      <footer className="bg-stone-900 text-stone-400 border-t border-stone-850 py-12 px-4 sm:px-6 lg:px-8 mt-12 bg-linear-to-b from-[#1C1917] to-stone-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Identity column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#D97706] rounded-lg flex items-center justify-center text-white font-serif font-bold text-base">
                AL
              </div>
              <div>
                <h4 className="text-white font-serif font-semibold text-sm">Andrés Felipe León</h4>
                <p className="text-xs text-stone-500 font-mono">Estudiante • UMB</p>
              </div>
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Desarrolladora de espacios interactivos de difusión de contenidos personales y profesionales sobre técnicas de comunicación virtual y estrategias SEO en redes.
            </p>
          </div>

          {/* Academic Info */}
          <div className="space-y-3">
            <h5 className="text-stone-300 font-mono text-xs font-bold uppercase tracking-wider">Bitácora Académica</h5>
            <ul className="text-xs space-y-2 font-light">
              <li>Materia: <span className="font-semibold text-stone-300">TÉCNICAS COMUNICACIÓN VIRTUAL</span></li>
              <li>Institución: <span className="text-stone-300">Universidad Manuela Beltrán</span></li>
              <li>Estudiante: <span className="text-[#D97706] font-semibold">Andrés Felipe León</span></li>
              <li>Entorno: <span className="text-amber-500 font-mono">Vercel - Front End</span></li>
            </ul>
          </div>


        </div>

        <hr className="border-stone-850 my-6" />

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-500 gap-4">
          <p>© 2026 Andrés Felipe León. All rights reserved. Código licenciado bajo licencia de código abierto de Apache 2.0.</p>
          <p className="flex items-center space-x-1">
            <span>Hecho en Bogotá, Colombia</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </p>
        </div>
      </footer>

    </div>
  );
}
