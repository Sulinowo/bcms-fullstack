import type { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary shadow-sm hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
  secondary:
    'border border-frame bg-white text-primary hover:bg-surface-container-low hover:text-primary dark:border-zinc-500 dark:bg-zinc-900 dark:text-primary-fixed dark:hover:bg-zinc-800 dark:hover:text-red-100',
  ghost:
    'bg-transparent text-zinc-900 hover:bg-surface-container-low hover:text-zinc-950 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-white',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'min-h-9 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wide',
  md: 'min-h-11 rounded-lg px-4 py-2 text-sm font-semibold',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex cursor-pointer items-center justify-center transition disabled:cursor-not-allowed disabled:opacity-50 ${variantClass[variant]} ${sizeClass[size]} ${className}`.trim()}
      {...props}
    />
  )
}
