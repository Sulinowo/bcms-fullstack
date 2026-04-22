import type { HTMLAttributes, ReactNode } from 'react'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant
  title?: string
  children: ReactNode
}

const variantClass: Record<AlertVariant, string> = {
  info: 'border-sky-200 bg-sky-50 text-sky-950 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-100',
  success:
    'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100',
  warning:
    'border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100',
  error:
    'border-red-200 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/40 dark:text-red-100',
}

export function Alert({
  variant = 'info',
  title,
  className = '',
  children,
  role = 'status',
  ...props
}: AlertProps) {
  return (
    <div
      role={role}
      className={`rounded-xl border px-4 py-3 text-sm ${variantClass[variant]} ${className}`.trim()}
      {...props}
    >
      {title ? <p className="mb-1 font-semibold">{title}</p> : null}
      <div className="leading-relaxed">{children}</div>
    </div>
  )
}
