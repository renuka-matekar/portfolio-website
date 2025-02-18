// src/components/BackgroundEffect.tsx
"use client"

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export default function BackgroundEffect() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 50%)'
            : 'radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, transparent 50%)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 bg-grid-primary/[0.02] -z-10" />
    </div>
  )
}