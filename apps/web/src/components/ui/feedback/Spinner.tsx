import type { HTMLAttributes } from 'react'

export type SpinnerSize = 'sm' | 'md' | 'lg'

export type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
  size?: SpinnerSize
  /** Tekst dla czytników ekranu (np. „Ładowanie danych”) */
  label?: string
}

const sizePx: Record<SpinnerSize, string> = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-[3px]',
  lg: 'h-12 w-12 border-4',
}

export function Spinner({
  size = 'md',
  label = 'Ładowanie',
  className = '',
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={`inline-flex items-center justify-center ${className}`.trim()}
      {...props}
    >
      <span
        className={`animate-spin rounded-full border-primary border-t-transparent ${sizePx[size]}`}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}
