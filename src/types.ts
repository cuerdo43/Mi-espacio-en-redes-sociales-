/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ForumCategory = 'Estrategia' | 'Herramientas' | 'Dudas PQR' | 'General';

export interface ForumReply {
  id: string;
  author: string;
  role: 'Usuario' | 'Creador' | 'Moderador';
  content: string;
  date: string;
}

export interface ForumThread {
  id: string;
  category: ForumCategory;
  title: string;
  author: string;
  authorRole: 'Usuario' | 'Creador';
  content: string;
  date: string;
  likes: number;
  hasLiked?: boolean;
  replies: ForumReply[];
}

export type PQRType = 'Petición' | 'Queja' | 'Reclamo' | 'Sugerencia';

export interface PQRRecord {
  id: string;
  type: PQRType;
  fullName: string;
  email: string;
  subject: string;
  description: string;
  status: 'Recibido' | 'En revisión' | 'Resuelto';
  date: string;
  response?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface SurveyOption {
  id: string;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  question: string;
  options: SurveyOption[];
  totalVotes: number;
}
