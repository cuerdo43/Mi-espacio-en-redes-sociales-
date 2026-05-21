/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Share2, Globe, Heart, Award } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: 'Inicio & Perfil', value: 'inicio' },
    { label: 'Guía Educativa', value: 'recurso' },
    { label: 'Foro de Discusión', value: 'foro' },
    { label: 'Canales de Interacción', value: 'canales' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Branding */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('inicio')}>
            <div className="w-10 h-10 bg-[#D97706] rounded-xl flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
              AL
            </div>
            <div>
              <h1 className="text-stone-900 font-serif font-bold text-lg tracking-tight hover:text-[#D97706] transition-colors">
                Andrés Felipe León
              </h1>
              <p className="text-stone-500 font-mono text-[10px] uppercase tracking-wider">
                Comunicación Virtual & Redes • UMB
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.value;
              return (
                <button
                  key={item.value}
                  id={`nav-item-${item.value}`}
                  onClick={() => setActiveTab(item.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#E6F0EC] text-[#15803D] font-semibold'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right utility buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-mono border border-amber-200">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Actividad 3</span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('¡Enlace de la página copiado al portapapeles! Listo para probar en modo incógnito.');
              }}
              className="px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 text-xs font-medium rounded-lg inline-flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Copiar Enlace</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="px-2 py-0.5 bg-amber-50 text-amber-800 rounded-full text-[10px] font-mono border border-amber-200">
              Act. 3
            </div>
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-600 hover:text-stone-950 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-stone-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.value;
              return (
                <button
                  key={item.value}
                  id={`mobile-nav-item-${item.value}`}
                  onClick={() => {
                    setActiveTab(item.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#E6F0EC] text-[#15803D] font-bold border-l-4 border-[#15803D]'
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 pb-2 border-t border-stone-200 px-4 flex flex-col space-y-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('¡Enlace copiado al portapapeles! Compártelo y pruébalo en modo incógnito.');
                }}
                className="w-full text-center px-4 py-2 bg-stone-950 text-white rounded-lg text-xs font-medium inline-flex justify-center items-center h-10 space-x-2"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Copiar Enlace Público</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
