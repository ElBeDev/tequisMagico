'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';

// Registro único de los plugins de GSAP (todos gratuitos desde GSAP 3.13).
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP);

export const EASE = 'power3.out';
export const EASE_INOUT = 'expo.inOut';

/** Lo mismo que el CSS: si la persona pidió menos movimiento, no animamos nada. */
// SplitText con `mask` mete cada pedazo en una caja con overflow: clip del alto del renglón. Con el
// interlineado cerrado de los títulos (.display 0.92) esa caja cortaba los acentos de arriba y las
// colitas de abajo (y, g, p, j). Estas clases nombran las cajas (SplitText les agrega "-mask") para que
// globals.css les dé aire; SPLIT_HIDDEN baja el texto escondido lo suficiente para que no se asome
// por ese aire antes de animar.
export const SPLIT_CLASSES = { linesClass: 'split-line', wordsClass: 'split-word', charsClass: 'split-char' };
export const SPLIT_HIDDEN = 135;

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isDesktop() {
  return typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
}

export { gsap, ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP };
