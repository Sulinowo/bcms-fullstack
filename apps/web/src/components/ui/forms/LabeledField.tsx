import type { ReactNode } from 'react'

export type LabeledFieldProps = {
  label: string
  htmlFor: string
  hint?: string
  error?: string
  children: ReactNode
  className?: string
}

/** Etykieta + pole + opcjonalna podpowiedź / błąd walidacji. */
export function LabeledField({
  label,
  htmlFor,
  hint,
  error,
  children,
  className = '',
}: LabeledFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`.trim()}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-on-surface">
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-error" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-xs text-secondary">{hint}</p>
      ) : null}
    </div>
  )
}
