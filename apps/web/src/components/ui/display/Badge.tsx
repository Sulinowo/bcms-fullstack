import type { HTMLAttributes } from 'react'

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'critical'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone
}

const toneClass: Record<BadgeTone, string> = {
  neutral: 'bg-secondary-container text-on-secondary-container',
  success: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100',
  warning: 'bg-amber-100 text-amber-950 dark:bg-amber-900/40 dark:text-amber-100',
  critical: 'bg-error text-on-error',
}

export function Badge({ tone = 'neutral', className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${toneClass[tone]} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  )
}
