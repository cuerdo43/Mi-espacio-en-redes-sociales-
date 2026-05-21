/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ForumThread, ForumCategory, ForumReply } from '../types';
import { INITIAL_THREADS } from '../data';
import { MessageSquare, Heart, Plus, Filter, User2, Send, CornerDownRight, Speech, CheckCircle } from 'lucide-react';

export default function ForoDiscusion() {
  const [threads, setThreads] = useState<ForumThread[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ForumCategory | 'Todos'>('Todos');
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);

  // New Thread Form State
  const [isCreatingThread, setIsCreatingThread] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ForumCategory>('General');
  const [newAuthor, setNewAuthor] = useState('');
  const [newContent, setNewContent] = useState('');

  // New Reply Form State
  const [replyAuthor, setReplyAuthor] = useState('');
  const [replyContent, setReplyContent] = useState('');

  // Load from LocalStorage or Fallback to initial
  useEffect(() => {
    const saved = localStorage.getItem('yenssy_web_forum_threads');
    if (saved) {
      try {
        setThreads(JSON.parse(saved));
      } catch (e) {
        setThreads(INITIAL_THREADS);
      }
    } else {
      setThreads(INITIAL_THREADS);
    }
  }, []);

  // Save to LocalStorage helper
  const saveThreads = (updated: ForumThread[]) => {
    setThreads(updated);
    localStorage.setItem('yenssy_web_forum_threads', JSON.stringify(updated));
  };

  // Like Toggle Function
  const handleLike = (threadId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = threads.map((th) => {
      if (th.id === threadId) {
        const hasLiked = !th.hasLiked;
        return {
          ...th,
          hasLiked,
          likes: hasLiked ? th.likes + 1 : th.likes - 1,
        };
      }
      return th;
    });
    saveThreads(updated);
  };

  // Submit Brand New Thread
  const handleSubmitThread = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim() || !newAuthor.trim()) {
      alert('Por favor completa todos los campos del nuevo hilo de discusión.');
      return;
    }

    const newThread: ForumThread = {
      id: `custom-thread-${Date.now()}`,
      category: newCategory,
      title: newTitle,
      author: newAuthor,
      authorRole: 'Usuario',
      content: newContent,
      date: 'Hace un momento',
      likes: 0,
      hasLiked: false,
      replies: [],
    };

    const updated = [newThread, ...threads];
    saveThreads(updated);
    
    // Clear forms
    setNewTitle('');
    setNewContent('');
    setNewAuthor('');
    setIsCreatingThread(false);
    setActiveThreadId(newThread.id); // auto-open new thread
  };

  // Submit Reply to active thread
  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyAuthor.trim() || !replyContent.trim() || !activeThreadId) {
      alert('Por favor completa tu nombre y las líneas de tu comentario.');
      return;
    }

    const newReply: ForumReply = {
      id: `custom-reply-${Date.now()}`,
      author: replyAuthor,
      role: 'Usuario',
      content: replyContent,
      date: 'Hace un momento',
    };

    const updated = threads.map((th) => {
      if (th.id === activeThreadId) {
        return {
          ...th,
          replies: [...th.replies, newReply],
        };
      }
      return th;
    });

    saveThreads(updated);
    setReplyContent('');
    // keep replyAuthor cached as a courtesy
  };

  const categories: (ForumCategory | 'Todos')[] = ['Todos', 'Estrategia', 'Herramientas', 'Dudas PQR', 'General'];

  const filteredThreads = selectedCategory === 'Todos'
    ? threads
    : threads.filter((t) => t.category === selectedCategory);

  const activeThread = threads.find((t) => t.id === activeThreadId);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Forum Header Banner */}
      <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2.5">
            <Speech className="w-6 h-6 text-[#D97706]" />
            <h3 className="font-serif text-2xl font-bold text-stone-900">Foro de Discusión Virtual</h3>
          </div>
          <p className="text-stone-600 font-light text-sm max-w-2xl">
            Un espacio colaborativo donde creadores de contenido, estudiantes y expertos debaten estrategias, comparten dudas sobre PQRs y resuelven desafíos técnicos digitales de manera transparente.
          </p>
        </div>

        <button
          onClick={() => setIsCreatingThread(!isCreatingThread)}
          className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer inline-flex items-center space-x-2 shadow-xs shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Iniciar Tema Nuevo</span>
        </button>
      </section>

      {/* Grid Layout: Left feed, Right thread details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: List Feed (5 Cols or 12 if no active selected) */}
        <div className={`space-y-4 lg:col-span-5 ${activeThreadId ? 'hidden lg:block' : 'lg:col-span-12 max-w-4xl mx-auto w-full'}`}>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  // clear thread details on mobile if switching filter
                  if (activeThread && activeThread.category !== cat && cat !== 'Todos') {
                    setActiveThreadId(null);
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-[#D97706] font-bold shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Create Thread Form Inline if toggled */}
          {isCreatingThread && (
            <form onSubmit={handleSubmitThread} className="bg-amber-50/50 border border-amber-200 rounded-xl p-5 space-y-4">
              <h4 className="font-serif font-bold text-stone-900 text-base">Crear Nuevo Tema de Conversación</h4>
              
              <div className="space-y-1">
                <label className="text-[10.5px] font-mono font-bold text-stone-400 uppercase">Nombre para Mostrar</label>
                <input
                  type="text"
                  placeholder="Ej: Daniel Romero"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full p-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#D97706]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10.5px] font-mono font-bold text-stone-400 uppercase">Título del Tema</label>
                  <input
                    type="text"
                    placeholder="Ej: Dudas sobre música de TikTok..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full p-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#D97706]"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10.5px] font-mono font-bold text-stone-400 uppercase">Categoría</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as ForumCategory)}
                    className="w-full p-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#D97706]"
                  >
                    <option value="Estrategia">Estrategia</option>
                    <option value="Herramientas">Herramientas</option>
                    <option value="Dudas PQR">Dudas PQR</option>
                    <option value="General">General</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10.5px] font-mono font-bold text-stone-400 uppercase font-medium">Descripción del Desafío</label>
                <textarea
                  rows={3}
                  placeholder="Explica detalladamente la problemática o sugerencia educativa..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#D97706]"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end gap-2 text-xs font-semibold pt-1">
                <button
                  type="button"
                  onClick={() => setIsCreatingThread(false)}
                  className="px-3.5 py-2 bg-stone-200 text-stone-800 rounded-lg hover:bg-stone-300 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#D97706] text-white rounded-lg hover:bg-[#B45309] transition-colors"
                >
                  Publicar en Foro
                </button>
              </div>
            </form>
          )}

          {/* Threads Feed Stack */}
          <div className="space-y-3">
            {filteredThreads.length === 0 ? (
              <div className="bg-white border border-stone-200 rounded-xl p-8 text-center text-stone-500 font-light text-sm">
                No hay hilos activos en esta categoría en este momento.
              </div>
            ) : (
              filteredThreads.map((th) => {
                const isActive = activeThreadId === th.id;
                return (
                  <div
                    key={th.id}
                    onClick={() => setActiveThreadId(th.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-amber-50/40 border-[#D97706] shadow-xs'
                        : 'bg-white border-stone-200 hover:border-stone-300 hover:shadow-xs'
                    }`}
                  >
                    <div className="flex justify-between items-start text-xs font-mono text-stone-400 gap-2">
                      <span className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded-md text-[9px] font-bold">
                        {th.category}
                      </span>
                      <span>{th.date}</span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-stone-900 tracking-tight mt-2 hover:text-[#B45309]">
                      {th.title}
                    </h4>

                    <p className="text-stone-600 text-xs font-light line-clamp-2 mt-1.5 leading-relaxed">
                      {th.content}
                    </p>

                    <div className="flex justify-between items-center text-xs text-stone-500 mt-4 border-t border-stone-50 pt-2.5">
                      <span className="flex items-center space-x-1 font-mono text-[11px]">
                        <User2 className="w-3.5 h-3.5 text-stone-400" />
                        <span>{th.author}</span>
                      </span>

                      <div className="flex items-center space-x-3 text-stone-400 font-mono text-[11px]">
                        <button
                          onClick={(e) => handleLike(th.id, e)}
                          className={`flex items-center space-x-1.5 py-1 px-2.5 rounded-md transition-colors hover:bg-stone-50 ${
                            th.hasLiked ? 'text-amber-600 bg-amber-50 font-semibold' : ''
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${th.hasLiked ? 'fill-amber-500 text-amber-640' : ''}`} />
                          <span>{th.likes}</span>
                        </button>

                        <span className="flex items-center space-x-1 py-1 px-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-stone-400" />
                          <span>{th.replies.length}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Detailed active thread (7 cols or full on mobile) */}
        {activeThreadId ? (
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6">
            
            {/* Header / Thread main info */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setActiveThreadId(null)}
                  className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-lg lg:hidden"
                >
                  ← Volver a Temas
                </button>
                <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-[10px] font-mono font-bold">
                  {activeThread.category}
                </span>
                <span className="text-stone-400 font-mono text-xs hidden lg:inline">{activeThread.date}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 leading-tight">
                {activeThread.title}
              </h3>

              <div className="flex items-center space-x-2 text-xs font-mono text-stone-500 pt-1">
                <div className="w-5 h-5 bg-[#D97706]/10 text-[#B45309] rounded-full flex items-center justify-center text-[10px] font-bold">
                  {activeThread.author.charAt(0)}
                </div>
                <span>Por <b>{activeThread.author}</b></span>
                <span className="text-stone-300">•</span>
                <span>Rol: {activeThread.authorRole}</span>
              </div>

              <hr className="border-stone-100" />

              <p className="text-stone-700 text-sm leading-relaxed font-light whitespace-pre-wrap pt-2 bg-[#FAF8F5] p-4 rounded-xl border border-stone-100">
                {activeThread.content}
              </p>
            </div>

            {/* Replie / Comments container */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
                Respuestas e Hilos de Ayuda ({activeThread.replies.length})
              </h4>

              {activeThread.replies.length === 0 ? (
                <div className="p-6 bg-stone-50 border border-stone-150 rounded-xl text-center text-stone-500 text-xs font-light">
                  Aún no hay respuestas en este tema. Sé el primero en guiar a este usuario.
                </div>
              ) : (
                <div className="space-y-3">
                  {activeThread.replies.map((rep) => {
                    const isOwner = rep.author === 'Andrés Felipe León';
                    return (
                      <div
                        key={rep.id}
                        className={`p-4 rounded-xl border flex items-start space-x-3 ${
                          isOwner
                            ? 'bg-[#E6F0EC]/55 border-[#A7F3D0]'
                            : 'bg-white border-stone-150'
                        }`}
                      >
                        <CornerDownRight className="w-4 h-4 text-stone-300 mt-1 shrink-0" />
                        <div className="space-y-1.5 flex-1">
                          <div className="flex justify-between items-center text-xs font-mono">
                            <div className="flex items-center space-x-1.5">
                              <span className="font-bold text-stone-900">{rep.author}</span>
                              {isOwner && (
                                <span className="bg-[#15803D] text-white font-mono text-[9px] px-1.5 py-0.5 rounded-full uppercase">
                                  Creadora (TAD)
                                </span>
                              )}
                              {rep.role === 'Moderador' && (
                                <span className="bg-stone-500 text-white font-mono text-[9px] px-1.5 py-0.5 rounded-full uppercase">
                                  Moderador
                                </span>
                              )}
                            </div>
                            <span className="text-stone-400 text-[10px]">{rep.date}</span>
                          </div>
                          <p className="text-stone-700 text-xs leading-relaxed font-light">
                            {rep.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Answer Form inline */}
            <form onSubmit={handleSubmitReply} className="pt-4 border-t border-stone-100 space-y-3">
              <h4 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
                Dejar tu Respuesta o Recomendación Colectiva
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Tu Nombre (Ej: Sofia Romero)"
                  value={replyAuthor}
                  onChange={(e) => setReplyAuthor(e.target.value)}
                  className="md:col-span-1 p-2.5 text-xs bg-[#FAF8F5] border border-stone-200 rounded-lg focus:outline-none focus:border-[#D97706]"
                  required
                />
                <input
                  type="text"
                  placeholder="Agrega tu aporte estratégico o técnica acá..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className="md:col-span-2 p-2.5 text-xs bg-[#FAF8F5] border border-stone-200 rounded-lg focus:outline-none focus:border-[#D97706]"
                  required
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="px-4 py-2 bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Enviar Comentario</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </form>

          </div>
        ) : (
          <div className="hidden lg:col-span-7 bg-stone-50 border border-stone-200 rounded-2xl p-8 text-center flex flex-col justify-center items-center space-y-4">
            <Speech className="w-12 h-12 text-stone-300" />
            <div>
              <h4 className="font-serif font-bold text-stone-800 text-lg">Visualizar Detalles de Tema</h4>
              <p className="text-stone-500 font-light text-xs max-w-sm mt-1 mx-auto">
                Selecciona cualquier hilo de la izquierda para expandir sus respuestas completas o formular comentarios de soporte colectivos.
              </p>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
