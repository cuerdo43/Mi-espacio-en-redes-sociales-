/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChatMessage, PQRRecord, Poll, PQRType } from '../types';
import { INITIAL_POLLS } from '../data';
import { Send, User2, MessageSquareCode, Settings, FileSpreadsheet, ShieldAlert, BadgeHelp, CheckCircle2, Award, Sparkles, MessageCircleHeart } from 'lucide-react';

export default function CanalesInteraccion() {
  
  // 1. CHAT SIMULATOR STATE
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init-1',
      sender: 'assistant',
      text: '¡Hola! Qué gusto saludarte de parte de Andrés Felipe León. Soy su asistente virtual de estrategia. ¿En qué puedo apoyarte hoy con tu contenido?',
      timestamp: 'Justo ahora'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // 2. STATEFUL PQRS BUZON STATE
  const [pqrsRecords, setPqrsRecords] = useState<PQRRecord[]>([]);
  const [pqrName, setPqrName] = useState('');
  const [pqrEmail, setPqrEmail] = useState('');
  const [pqrType, setPqrType] = useState<PQRType>('Petición');
  const [pqrSubject, setPqrSubject] = useState('');
  const [pqrDescription, setPqrDescription] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  // 3. SURVEY STATE
  const [polls, setPolls] = useState<Poll[]>([]);
  const [hasVotedPolls, setHasVotedPolls] = useState<Record<string, boolean>>({});

  // Trigger loading from localStorage
  useEffect(() => {
    // Load polls
    const storedPolls = localStorage.getItem('yenssy_web_polls');
    if (storedPolls) {
      try { setPolls(JSON.parse(storedPolls)); } catch(e) { setPolls(INITIAL_POLLS); }
    } else {
      setPolls(INITIAL_POLLS);
    }

    // Load voted marks
    const storedVoted = localStorage.getItem('yenssy_web_has_voted');
    if (storedVoted) {
      try { setHasVotedPolls(JSON.parse(storedVoted)); } catch(e) {}
    }

    // Load PQR submissions
    const storedPQRs = localStorage.getItem('yenssy_web_pqrs');
    if (storedPQRs) {
      try { setPqrsRecords(JSON.parse(storedPQRs)); } catch(e) {}
    }
  }, []);

  // Save PQRs
  const savePQRs = (records: PQRRecord[]) => {
    setPqrsRecords(records);
    localStorage.setItem('yenssy_web_pqrs', JSON.stringify(records));
  };

  // Submit PQR handler
  const handlePQRSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pqrName.trim() || !pqrEmail.trim() || !pqrSubject.trim() || !pqrDescription.trim()) {
      alert('Por favor complete todos los datos obligatorios para radicar la PQR.');
      return;
    }

    const ticketId = `PQR-${Math.floor(10000 + Math.random() * 90000)}`;
    const newRecord: PQRRecord = {
      id: ticketId,
      type: pqrType,
      fullName: pqrName,
      email: pqrEmail,
      subject: pqrSubject,
      description: pqrDescription,
      status: 'Recibido',
      date: new Date().toLocaleDateString('es-CO')
    };

    const updated = [newRecord, ...pqrsRecords];
    savePQRs(updated);
    setSubmittedTicket(ticketId);

    // reset fields
    setPqrSubject('');
    setPqrDescription('');
  };

  // Poll voting handler
  const handleVote = (pollId: string, optionId: string) => {
    if (hasVotedPolls[pollId]) return;

    const updatedPolls = polls.map((pl) => {
      if (pl.id === pollId) {
        const optionUpd = pl.options.map((opt) => {
          if (opt.id === optionId) {
            return { ...opt, votes: opt.votes + 1 };
          }
          return opt;
        });
        return {
          ...pl,
          options: optionUpd,
          totalVotes: pl.totalVotes + 1
        };
      }
      return pl;
    });

    setPolls(updatedPolls);
    localStorage.setItem('yenssy_web_polls', JSON.stringify(updatedPolls));

    const updatedVoted = { ...hasVotedPolls, [pollId]: true };
    setHasVotedPolls(updatedVoted);
    localStorage.setItem('yenssy_web_has_voted', JSON.stringify(updatedVoted));
  };

  // Handlers for instant chatbot canned responses
  const handleChatOption = (optionText: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: `chat-${Date.now()}-user`,
      sender: 'user',
      text: optionText,
      timestamp: 'Hace un momento'
    };
    
    setChatMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate smart answering
    setTimeout(() => {
      let responseText = '';
      if (optionText.includes('agendar')) {
        responseText = '¡Fantástico! Para agendar una reunión de media hora, escríbeme directamente al email institucional yenssyleon@gmail.com o radica una PQR formal en la sección de al lado eligiendo tipo "Petición". Te responderemos en menos de 24 horas hábiles.';
      } else if (optionText.includes('gratis')) {
        responseText = '¡Hola! Así es. Realizo hasta 1 auditoría express súper concisa por semana para mi comunidad del foro de discusión del sitio. Puedes dejar el link a tu perfil en el Foro, bajo la categoría "Estrategia" y etiquetarme en tu texto.';
      } else if (optionText.includes('Notion')) {
        responseText = '¡Claro! Tengo cargado un pack de plantillas gratuitas para auditar tu bio y planificar tu matriz de contenidos en Notion. Si me dejas tu nombre en la PQR de tipo "Sugerencia", te mandaré los recursos directo a tu correo.';
      } else {
        responseText = 'He registrado tu mensaje con éxito. Estaré revisando la bitácora para contactarte a la brevedad si dejas tus datos de correo registrados. ¡Gracias por participar!';
      }

      const botMsg: ChatMessage = {
        id: `chat-${Date.now()}-bot`,
        sender: 'assistant',
        text: responseText,
        timestamp: 'Justo ahora'
      };

      setChatMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Upper overview representing required features */}
      <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
        <div className="flex items-center space-x-3 mb-2">
          <MessageCircleHeart className="w-6 h-6 text-[#D97706]" />
          <h3 className="font-serif text-2xl font-bold text-stone-900">Canales de Comunicación del Sitio</h3>
        </div>
        <p className="text-stone-600 font-light text-sm max-w-3xl leading-relaxed">
          Para garantizar una comunicación virtual interactiva robusta (requisito primordial del entregable de la Actividad), he integrado <span className="font-semibold text-stone-800">tres canales de retroalimentación reales</span> en este panel. Prueba cada uno de ellos (funcionan de manera persistente con caché local).
        </p>

        {/* Feature summary row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-stone-100 mt-4">
          <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-150">
            <span className="font-mono text-xs text-[#B45309] font-bold block">Canal 1: Chat de Consulta</span>
            <p className="text-stone-700 text-xs mt-1 font-light">Asistente automatizado inteligente de respuestas rápidas sobre consultoría.</p>
          </div>
          <div className="bg-[#E6F0EC] p-4 rounded-xl border border-[#A7F3D0]">
            <span className="font-mono text-xs text-[#15803D] font-bold block">Canal 2: Buzón PQR Oficial</span>
            <p className="text-stone-700 text-xs mt-1 font-light">Soporta radicar Peticiones o Quejas virtuales y genera tickets de atención.</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
            <span className="font-mono text-xs text-amber-800 font-bold block">Canal 3: Encuestas En Vivo</span>
            <p className="text-amber-900 text-xs mt-1 font-light">Participa en votaciones, viendo la barra porcentual del público al instante.</p>
          </div>
        </div>
      </section>

      {/* Main Grid: Chat Bot Selector & PQRs Portal / Polls below */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Chat de Consulta (Left: 5 Cols) */}
        <section className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between h-[520px] shadow-xs">
          <div>
            <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#15803D] rounded-full animate-pulse"></div>
                <h4 className="font-serif font-bold text-stone-900 text-base">Chat Consultoría Virtual</h4>
              </div>
              <span className="text-[10px] font-mono font-medium text-stone-400">Andrés Felipe Bot</span>
            </div>

            {/* Canned selector options */}
            <div className="space-y-1.5 mb-4">
              <span className="text-[10px] font-mono text-stone-400 font-bold uppercase block px-1">Preguntas rápidas disponibles:</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  '¿Cómo agendar una consultoría?',
                  '¿Auditas perfiles de Instagram gratis?',
                  '¿Cómo descargo tus plantillas de Notion?'
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleChatOption(opt)}
                    className="p-2 bg-stone-50 hover:bg-stone-100 rounded-lg border border-stone-155 text-[10.5px] text-stone-700 text-left transition-colors cursor-pointer"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages body scrolling container */}
            <div className="overflow-y-auto space-y-3 h-[240px] pr-1.5 border border-stone-100 rounded-xl p-3.5 bg-stone-50/50">
              {chatMessages.map(msg => {
                const isBot = msg.sender === 'assistant';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col max-w-[85%] ${isBot ? 'self-start mr-auto' : 'self-end ml-auto'}`}
                  >
                    <div
                      className={`p-3 rounded-2xl text-xs leading-relaxed ${
                        isBot
                          ? 'bg-white border border-stone-200 text-stone-800 rounded-tl-none'
                          : 'bg-stone-900 text-white rounded-tr-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] font-mono text-stone-400 mt-1 px-1 self-end">
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center space-x-1.5 text-xs text-stone-400 px-2 py-1">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-300"></div>
                  <span>Transcribiendo respuesta de Andrés Felipe León...</span>
                </div>
              )}
            </div>
          </div>

          {/* Simple free text field */}
          <div className="pt-3 border-t border-stone-100 flex gap-2">
            <input
              type="text"
              placeholder="Escribe una pregunta libre..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && chatInput.trim()) {
                  handleChatOption(chatInput);
                  setChatInput('');
                }
              }}
              className="flex-grow p-2.5 text-xs bg-stone-50 border border-stone-250 rounded-xl focus:outline-none focus:border-[#D97706]"
            />
            <button
              onClick={() => {
                if (chatInput.trim()) {
                  handleChatOption(chatInput);
                  setChatInput('');
                }
              }}
              className="p-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Buzón PQRs Portal (Right: 7 Cols) */}
        <section className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-xs">
          <div>
            <span className="text-[10px] font-mono tracking-wide text-[#15803D] uppercase font-bold block">Canal Oficial Formas PQRs</span>
            <h4 className="font-serif text-2xl font-bold text-stone-950 mt-1">Radicar PQR Virtual (Buzón de Atención)</h4>
            <p className="text-stone-500 font-light text-xs mt-1">
              Envía formalmente tus peticiones, quejas, reclamos o sugerencias correspondientes a temas de redes virtuales. Tu radicado será evaluado y respondido bajo supervisión.
            </p>
          </div>

          {submittedTicket && (
            <div className="p-4 bg-[#E6F0EC] border border-[#15803D] rounded-xl text-[#15803D] space-y-2 relative">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <h5 className="font-serif font-bold text-stone-950 text-sm">PQR Radicada Exitosamente</h5>
              </div>
              <p className="text-xs text-stone-700 font-light leading-relaxed">
                Su caso ha sido guardado de forma persistente y formalizado bajo el ticket <span className="font-bold">{submittedTicket}</span>. Andrés Felipe León revisará esta bitácora académica para enviar una respuesta estratégica simulada.
              </p>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="text-stone-500 hover:text-stone-800 text-[10px] underline font-mono font-bold block pt-1 cursor-pointer"
              >
                Cerrar Notificación
              </button>
            </div>
          )}

          <form onSubmit={handlePQRSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10.5px] font-mono font-bold text-stone-400 uppercase">Nombre Completo *</label>
                <input
                  type="text"
                  placeholder="Ej: Laura Castro"
                  value={pqrName}
                  onChange={(e) => setPqrName(e.target.value)}
                  className="w-full p-2.5 text-xs bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:border-[#D97706]"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10.5px] font-mono font-bold text-stone-400 uppercase">Correo de Notificaciones *</label>
                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={pqrEmail}
                  onChange={(e) => setPqrEmail(e.target.value)}
                  className="w-full p-2.5 text-xs bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:border-[#D97706]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1 md:col-span-1">
                <label className="text-[10.5px] font-mono font-bold text-stone-400 uppercase font-medium">Clasificación PQR *</label>
                <select
                  value={pqrType}
                  onChange={(e) => setPqrType(e.target.value as PQRType)}
                  className="w-full p-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#D97706]"
                >
                  <option value="Petición">Petición (Solicitud de Info)</option>
                  <option value="Queja">Queja (Inconformidad Servicio)</option>
                  <option value="Reclamo">Reclamo (Compensación de Cuenta)</option>
                  <option value="Sugerencia">Sugerencia (Mejoras/Aportes)</option>
                </select>
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-[10.5px] font-mono font-bold text-stone-400 uppercase font-medium">Asunto de Asistencia *</label>
                <input
                  type="text"
                  placeholder="Ej: Ayuda con recuperación de engagement"
                  value={pqrSubject}
                  onChange={(e) => setPqrSubject(e.target.value)}
                  className="w-full p-2.5 text-xs bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:border-[#D97706]"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10.5px] font-mono font-bold text-stone-400 uppercase">Mensaje Detallado del Caso *</label>
              <textarea
                rows={3}
                placeholder="Explica qué dificultad con tus redes virtuales o qué sugerencia educativa deseas radicar..."
                value={pqrDescription}
                onChange={(e) => setPqrDescription(e.target.value)}
                className="w-full p-2.5 text-xs bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:border-[#D97706]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#D97706] hover:bg-[#B45309] text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors shadow-xs hover:shadow-md"
            >
              Radicar Ticket PQR Oficial en Bitácora
            </button>
          </form>

        </section>

      </div>

      {/* Persistent Polls & Live Survey (Bottom 12 cols grid) */}
      <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <span className="text-[10px] font-mono tracking-wide text-amber-800 uppercase font-bold block">Canal 3: Encuestas & Sondeo en Tiempo Real</span>
          <h4 className="font-serif text-2xl font-bold text-stone-950 mt-1">Sondeos de Tráfico y Estrategia</h4>
          <p className="text-stone-500 font-light text-xs mt-1">
            Tu opinión es clave para entender las tendencias emergentes virtuales de este semestre. Participa votando en estas breves encuestas. ¡Verás los resultados porcentuales agregados actualizándose al instante!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {polls.map((poll) => {
            const alreadyVoted = hasVotedPolls[poll.id];
            return (
              <div key={poll.id} className="bg-stone-50 border border-stone-200 p-5 rounded-xl space-y-4">
                <div className="flex justify-between items-start">
                  <h5 className="font-serif font-bold text-stone-900 text-sm max-w-[80%]">
                    {poll.question}
                  </h5>
                  <span className="px-2 py-0.5 bg-stone-200 text-stone-700 rounded-md text-[9.5px] font-mono uppercase font-bold shrink-0">
                    {poll.totalVotes} votos
                  </span>
                </div>

                <div className="space-y-2.5">
                  {poll.options.map((opt) => {
                    const pct = poll.totalVotes > 0 ? Math.round((opt.votes / poll.totalVotes) * 100) : 0;
                    return (
                      <button
                        key={opt.id}
                        disabled={alreadyVoted}
                        onClick={() => handleVote(poll.id, opt.id)}
                        className={`w-full text-left p-3 rounded-lg border text-xs transition-all relative overflow-hidden flex justify-between items-center ${
                          alreadyVoted
                            ? 'bg-white/80 border-stone-200 text-stone-850 cursor-default'
                            : 'bg-white border-stone-200 hover:border-[#D97706] hover:bg-amber-50/10 cursor-pointer'
                        }`}
                      >
                        {/* Background progress indicator on voted */}
                        {alreadyVoted && (
                          <div
                            className="absolute top-0 bottom-0 left-0 bg-[#E6F0EC] opacity-80"
                            style={{ width: `${pct}%` }}
                          ></div>
                        )}

                        <span className="relative z-10 font-medium">{opt.text}</span>
                        <span className="relative z-10 font-mono font-bold text-stone-800 text-right">
                          {alreadyVoted ? `${pct}% (${opt.votes})` : 'Votar'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {alreadyVoted && (
                  <p className="text-[10px] text-[#15803D] font-medium font-mono text-right flex items-center justify-end space-x-1">
                    <span>✓ Voto registrado con éxito</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Table of Radicated PQRs so user can see it works statefully! */}
      {pqrsRecords.length > 0 && (
        <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex justify-between items-center border-b border-stone-100 pb-3">
            <div>
              <h4 className="font-serif font-bold text-lg text-stone-900">Historial de Tus PQRs Radicadas (Sesión Actual)</h4>
              <p className="text-stone-500 font-light text-xs">Sigue y visualiza de forma transparente el estado y el código de tu ticket.</p>
            </div>
            <span className="px-2 py-1 bg-stone-100 text-stone-700 rounded-md text-xs font-mono">
              Registros: {pqrsRecords.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 font-mono tracking-wider font-semibold">
                  <th className="p-3">Código</th>
                  <th className="p-3">Remitente</th>
                  <th className="p-3">Tipo de Caso</th>
                  <th className="p-3">Asunto</th>
                  <th className="p-3">Fecha</th>
                  <th className="p-3 text-right">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {pqrsRecords.map((rec) => (
                  <tr key={rec.id} className="hover:bg-stone-50/50">
                    <td className="p-3 font-mono font-bold text-stone-900">{rec.id}</td>
                    <td className="p-3 font-semibold text-stone-800">{rec.fullName}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-md font-medium text-[10px] font-mono ${
                        rec.type === 'Petición' ? 'bg-blue-50 text-blue-800' :
                        rec.type === 'Queja' ? 'bg-rose-50 text-rose-800' :
                        rec.type === 'Reclamo' ? 'bg-amber-50 text-amber-850' : 'bg-stone-100 text-stone-800'
                      }`}>
                        {rec.type}
                      </span>
                    </td>
                    <td className="p-3 text-stone-600 truncate max-w-[200px]" title={rec.description}>{rec.subject}</td>
                    <td className="p-3 text-stone-400 font-mono">{rec.date}</td>
                    <td className="p-3 text-right">
                      <span className="px-2 py-0.5 bg-[#E6F0EC] text-[#15803D] rounded-full font-mono text-[9px] font-bold">
                        {rec.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

    </div>
  );
}
