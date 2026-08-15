import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, Download } from 'lucide-react';
import magazinePreviewImg from '../assets/images/magazine_preview_1785099730458.jpg';
const heroBundleImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/todos-los-libros.png";
const explorerCoverImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/SIMPLE-CASUALIDAD-alumno-LK.png";
const explorerMockup1Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/103.png";
const explorerMockup2Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/Copia-de-Agente-Hunter-Modelo-de-Mockups-1-1.png";
const educatorGuideImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/102.png";
const worksheetsTableImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/ChatGPT-Image-30-jul-2026-09_43_14.png";
const fichasCap1_7_9 = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/104-1.png";
const fichasCap1_10_12 = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/105-1.png";
const enigmaImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/106.png";
const fichasCap7_7_9 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/Cap7-F1-7-9a.png";
const fichasCap3_7_9 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/cap3-F1-7-9a.png";
const fichasCap8_7_9 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/Cap8-F2-7-9a.png";
const fichasSet1 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/ChatGPT-Image-30-jul-2026-13_04_19.png";
const fichasSet2 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/ChatGPT-Image-30-jul-2026-11_12_38.png";
const fichasSet3 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/ChatGPT-Image-30-jul-2026-11_05_58.png";
const familyDialogueImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/1-7.png";
const conversemosCap1Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/1-7.png";
const conversemosCap2Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/2-3.png";
const conversemosCap6Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/6-4.png";
const conversemosCap8Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/8-4.png";
const image90 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/90.png";
const image75 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/75.png";
const imageMockup3 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/Copia-de-Agente-Hunter-Modelo-de-Mockups-1-copia-1.png";
const imageMockup4 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/112.png";
const imageMockup5 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/Copia-de-Agente-Hunter-Modelo-de-Mockups-1-4.png";
const imageMockup6 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/Copia-de-Agente-Hunter-Modelo-de-Mockups-1-copia-4.png";
const image4_1 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/4-1.png";
const image4_2 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/4-2.png";
const image5_2 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/5-2.png";
const image3_2 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/3-2.png";
const image6_1 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/6-1.png";
const image6_2 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/6-2.png";
const image7_3 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/7-3.png";
const image26 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/26.png";
const image27 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/27.png";
import familyDialogueMockupImg from '../assets/images/family_dialogue_mockup_1785101721359.jpg';
import kidsFaithImg from '../assets/images/kids_faith_science_hero_1785101748946.jpg';
import bonusDigitalImg from '../assets/images/bonus_digital_1785099742961.jpg';
import { LifeKidsLogo } from './LifeKidsLogo';

interface BookItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  badgeColor: string;
  pages: string;
  image: string;
}

const BOOKS: BookItem[] = [
  {
    id: 'mat-11',
    title: 'Material Extra Life Kids 1',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    pages: 'Contenido Ilustrado',
    image: image90,
  },
  {
    id: 'mat-12',
    title: 'Material Extra Life Kids 2',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/Documento-A4-Vertical-Hoja-de-Papel-Con-Flores-Aesthetic-Negro-copia.png',
  },
  {
    id: 'mat-12-juntos',
    title: 'Material Extra Life Kids - Temas Juntos',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/juntos-temas.png',
  },
  {
    id: 'mat-12b',
    title: 'Material Extra Life Kids 3',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    pages: 'Contenido Ilustrado',
    image: imageMockup3,
  },
  {
    id: 'mat-13',
    title: 'Material Extra Life Kids 5',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    pages: 'Contenido Ilustrado',
    image: image75,
  },
  {
    id: 'mat-7b',
    title: 'Material Ilustrado Agente Hunter',
    category: 'Recurso de Exploración',
    badge: 'GUÍA DE TRABAJO',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    pages: 'Fichas y Guías',
    image: imageMockup6,
  },
  {
    id: 'mat-5-79',
    title: 'Ficha de Actividades: Capítulo 1 (7 a 9 años)',
    category: 'Etapa 1 (7–9 Años)',
    badge: 'FICHAS NIVEL 1',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Actividades Prácticas',
    image: fichasCap1_7_9,
  },
  {
    id: 'mat-6',
    title: 'Ficha de Actividades: Capítulo 1 (10 a 12 años)',
    category: 'Etapa 2 (10–12 Años)',
    badge: 'FICHAS NIVEL 2',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    pages: 'Análisis y Desafíos',
    image: fichasCap1_10_12,
  },
  {
    id: 'mat-enigma',
    title: 'Resolviendo el Enigma',
    category: 'Aprendizaje Activo',
    badge: 'CÓDIGOS Y DESAFÍOS',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    pages: 'Investigación y Razonamiento',
    image: enigmaImg,
  },
  {
    id: 'mat-7d',
    title: 'Colección de Fichas de Aprendizaje I',
    category: 'Fichas de Trabajo',
    badge: 'FICHAS ILUSTRADAS',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    pages: 'Actividades Prácticas',
    image: fichasSet1,
  },
  {
    id: 'mat-new-1',
    title: 'Ficha Capítulo 1 LK',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/CAPITULO-1-LK-8.png',
  },
  {
    id: 'mat-add-10a',
    title: 'Ficha Capítulo 2 (7-9 años)',
    category: 'Etapa 1 (7–9 Años)',
    badge: 'FICHAS NIVEL 1',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Actividades Prácticas',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/cap2-f1-7-9a.png',
  },
  {
    id: 'mat-add-10b',
    title: 'Ficha Didáctica Ilustrada',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/ChatGPT-Image-29-jul-2026-23_03_24.png',
  },
  {
    id: 'mat-add-10c',
    title: 'Lámina Educativa 24-1',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/24-1.png',
  },
  {
    id: 'mat-add-10d',
    title: 'Ficha Didáctica Ilustrada II',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/ChatGPT-Image-29-jul-2026-23_07_09.png',
  },
  {
    id: 'mat-new-2',
    title: 'Ficha de Actividades Ilustrada',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/ChatGPT-Image-30-jul-2026-09_43_14.png',
  },
  {
    id: 'mat-new-3',
    title: 'Ficha Capítulo 4 (7-9 años)',
    category: 'Etapa 1 (7–9 Años)',
    badge: 'FICHAS NIVEL 1',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Actividades Prácticas',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/Cap4-F1-7-9.png',
  },
  {
    id: 'mat-new-4',
    title: 'Ficha Didáctica Especial',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/ChatGPT-Image-30-jul-2026-11_34_54.png',
  },
  {
    id: 'mat-new-5',
    title: 'Lámina Educativa 5',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/5.png',
  },
  {
    id: 'mat-new-6',
    title: 'Lámina Educativa 1',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/1.png',
  },
  {
    id: 'mat-new-7',
    title: 'Lámina Educativa 9',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/9.png',
  },
  {
    id: 'mat-new-8',
    title: 'Lámina Educativa 24',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/24.png',
  },
  {
    id: 'mat-new-9',
    title: 'Lámina Educativa 8',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/8.png',
  },
  {
    id: 'mat-new-10',
    title: 'Lámina Educativa 19',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/19.png',
  },
  {
    id: 'mat-new-12',
    title: 'Lámina Educativa 3-2',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/3-2.png',
  },
  {
    id: 'mat-new-13',
    title: 'Lámina Educativa 1-5',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/07/1-5.png',
  },
  {
    id: 'mat-7e',
    title: 'Colección de Fichas de Aprendizaje II',
    category: 'Fichas de Trabajo',
    badge: 'FICHAS ILUSTRADAS',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    pages: 'Actividades Prácticas',
    image: fichasSet2,
  },
  {
    id: 'mat-7f',
    title: 'Colección de Fichas de Aprendizaje III',
    category: 'Fichas de Trabajo',
    badge: 'FICHAS ILUSTRADAS',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    pages: 'Actividades Prácticas',
    image: fichasSet3,
  },
  {
    id: 'mat-26',
    title: 'Ficha de Actividades Capítulo 2-A',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Contenido Ilustrado',
    image: image26,
  },
  {
    id: 'mat-27',
    title: 'Ficha de Actividades Capítulo 2-B',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Contenido Ilustrado',
    image: image27,
  },

  {
    id: 'mat-8e',
    title: 'Ficha de Actividades Extra (Lección 4-A)',
    category: 'Recurso Educativo',
    badge: 'RECURSO ADICIONAL',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Contenido Ilustrado',
    image: image4_1,
  },
  {
    id: 'mat-8f',
    title: 'Ficha de Actividades Extra (Lección 4-B)',
    category: 'Recurso Educativo',
    badge: 'RECURSO ADICIONAL',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Contenido Ilustrado',
    image: image4_2,
  },
  {
    id: 'mat-15',
    title: 'Ficha de Actividades Complementaria 5',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    pages: 'Contenido Ilustrado',
    image: image5_2,
  },
  {
    id: 'mat-16',
    title: 'Ficha de Actividades Complementaria 3',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    pages: 'Contenido Ilustrado',
    image: image3_2,
  },
  {
    id: 'mat-17',
    title: 'Ficha de Actividades Capítulo 6-A',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    pages: 'Contenido Ilustrado',
    image: image6_1,
  },
  {
    id: 'mat-18',
    title: 'Ficha de Actividades Capítulo 6-B',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    pages: 'Contenido Ilustrado',
    image: image6_2,
  },
  {
    id: 'mat-20',
    title: 'Ficha de Actividades Capítulo 7-B',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    pages: 'Contenido Ilustrado',
    image: image7_3,
  },
  {
    id: 'mat-end-1',
    title: 'Lámina Educativa 7-1',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/07/7-1.png',
  },
  {
    id: 'mat-end-3',
    title: 'Lámina Educativa 7-1 (Adicional)',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/7-1.png',
  },
  {
    id: 'mat-end-4',
    title: 'Lámina Educativa 6-2 (Adicional)',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/6-2.png',
  },
  {
    id: 'mat-add-8-3',
    title: 'Lámina Educativa 8-3',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/8-3.png',
  },
  {
    id: 'mat-add-9-2',
    title: 'Lámina Educativa 9-2',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/9-2.png',
  },
  {
    id: 'mat-add-11-1',
    title: 'Lámina Educativa 11-1',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/11-1.png',
  },
  {
    id: 'mat-add-10',
    title: 'Lámina Educativa 10',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/10.png',
  },
  {
    id: 'mat-add-4-1',
    title: 'Lámina Educativa 4-1',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/4-1.png',
  },
  {
    id: 'mat-add-3-3',
    title: 'Lámina Educativa 3-3',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/3-3.png',
  },
  {
    id: 'mat-add-2-1',
    title: 'Lámina Educativa 2-1',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/2-1.png',
  },
  {
    id: 'mat-add-1-2',
    title: 'Lámina Educativa 1-2',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/1-2.png',
  },
  {
    id: 'mat-add-5-2',
    title: 'Lámina Educativa 5-2',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/5-2.png',
  },
  {
    id: 'mat-add-6-3',
    title: 'Lámina Educativa 6-3',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/6-3.png',
  },
  {
    id: 'mat-add-8-6',
    title: 'Lámina Educativa 8-6',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/8-6.png',
  },
  {
    id: 'mat-add-11-2',
    title: 'Lámina Educativa 11-2',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/11-2.png',
  },
  {
    id: 'mat-add-14',
    title: 'Lámina Educativa 14',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/14.png',
  },
  {
    id: 'mat-add-9-3',
    title: 'Lámina Educativa 9-3',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/9-3.png',
  },
  {
    id: 'mat-add-13',
    title: 'Lámina Educativa 13',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/13.png',
  },
  {
    id: 'mat-add-15',
    title: 'Lámina Educativa 15',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/15.png',
  },
  {
    id: 'mat-add-10-2',
    title: 'Lámina Educativa 10-2',
    category: 'Recurso Educativo',
    badge: 'MATERIAL ADICIONAL',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/10-2.png',
  },
  {
    id: 'mat-add-wa-1',
    title: 'Material Extra Life Kids',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-11.11.52.jpeg',
  },
  {
    id: 'mat-add-wa-2',
    title: 'Material Extra Life Kids',
    category: 'Recurso Educativo',
    badge: 'MATERIAL EXTRA',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pages: 'Contenido Ilustrado',
    image: 'https://www.lifekidsclub.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-10.29.38-1.jpeg',
  },
];

interface BooksScrollBannerProps {
  onOpenCheckout?: () => void;
}

export const BooksScrollBanner: React.FC<BooksScrollBannerProps> = ({
  onOpenCheckout,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-slate-950 py-12 md:py-16 border-y-2 border-orange-500/50 shadow-2xl relative overflow-hidden my-6">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <LifeKidsLogo size="sm" />
            <span className="bg-orange-500/20 text-orange-400 text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-orange-500/30 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-orange-400" />
              GALERÍA DE MATERIALES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Materiales Incluidos en el Programa Life Kids
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-medium mt-1">
            Conoce los libros, guías pedagógicas, fichas de trabajo y recursos del kit.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleScrollLeft}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center transition-all hover:scale-105 shadow-md active:scale-95"
            aria-label="Anterior libro"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleScrollRight}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center transition-all hover:scale-105 shadow-md active:scale-95"
            aria-label="Siguiente libro"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Edge-to-Edge Manual Scroll Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Overlay */}
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Right Fade Overlay */}
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-4 px-6 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {BOOKS.map((book, index) => (
            <div
              key={`${book.id}-${index}`}
              className="flex-none w-[280px] sm:w-[350px] bg-slate-900 rounded-2xl border border-slate-800 hover:border-orange-500/80 transition-all duration-300 hover:-translate-y-1.5 group shadow-2xl overflow-hidden flex items-center justify-center"
            >
              {/* Book Cover Image Container */}
              <div className="relative w-full aspect-[16/11] bg-slate-950 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.triedFallback) return;
                    img.dataset.triedFallback = 'true';
                    if (img.src.includes('/2026/08/')) {
                      img.src = img.src.replace('/2026/08/', '/2026/07/');
                    } else if (img.src.includes('/2026/07/')) {
                      img.src = img.src.replace('/2026/07/', '/2026/08/');
                    }
                  }}
                />

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="text-center mt-4">
        <p className="text-xs text-slate-300 font-medium inline-flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Pasa el cursor del ratón o mantén pulsada cualquier imagen para pausar el movimiento y ver los detalles con calma.</span>
        </p>
      </div>
    </section>
  );
};
