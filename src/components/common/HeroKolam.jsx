
import React from "react";

export default function HeroKolam({ size = 420, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 420 420" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="fire" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDBA74"/>
          <stop offset="45%" stopColor="#F97316"/>
          <stop offset="100%" stopColor="#EA580C"/>
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#fire)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)">
        <path d="M210 35 C210 70 250 70 250 105 C250 140 210 140 210 175 C210 210 250 210 250 245 C250 280 210 280 210 315 C210 350 250 350 250 385"/>
        <path d="M210 35 C210 70 170 70 170 105 C170 140 210 140 210 175 C210 210 170 210 170 245 C170 280 210 280 210 315 C210 350 170 350 170 385"/>
        <path d="M35 210 C70 210 70 170 105 170 C140 170 140 210 175 210 C210 210 210 170 245 170 C280 170 280 210 315 210 C350 210 350 170 385 170"/>
        <path d="M35 210 C70 210 70 250 105 250 C140 250 140 210 175 210 C210 210 210 250 245 250 C280 250 280 210 315 210 C350 210 350 250 385 250"/>
      </g>

      <circle cx="210" cy="210" r="8" fill="#FDBA74"/>
      <circle cx="210" cy="35" r="5" fill="#F97316"/>
      <circle cx="210" cy="385" r="5" fill="#F97316"/>
      <circle cx="35" cy="210" r="5" fill="#F97316"/>
      <circle cx="385" cy="210" r="5" fill="#F97316"/>
    </svg>
  );
}
