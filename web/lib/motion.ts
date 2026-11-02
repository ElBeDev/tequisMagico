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
export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isDesktop() {
  return typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
}

export { gsap, ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP };
