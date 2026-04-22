import type { HTMLAttributes } from 'react'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Mniejszy padding (np. listy) */
  dense?: boolean
}

export function Card({ className = '', dense, children, ...props }: CardProps) {
  const padding = dense ? 'p-4' : 'p-6'
  return (
    <div
      className={`rounded-xl border border-frame bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900 ${padding} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}
