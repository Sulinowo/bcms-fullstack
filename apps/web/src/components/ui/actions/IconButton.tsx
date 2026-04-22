import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type IconButtonVariant = 'ghost' | 'secondary'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: IconButtonVariant
  /** Ikona lub krótki element (np. MaterialIcon) */
  children: ReactNode
  /** Wymagane dla czytników ekranu */
  'aria-label': string
}

const variantClass: Record<IconButtonVariant, string> = {
  ghost:
    'text-zinc-700 hover:bg-surface-container hover:text-primary dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-primary-fixed',
  secondary:
    'border border-frame bg-white text-zinc-900 hover:bg-surface-container-low dark:border-zinc-500 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800',
}

export function IconButton({
  variant = 'ghost',
  className = '',
  type = 'button',
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 ${variantClass[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
