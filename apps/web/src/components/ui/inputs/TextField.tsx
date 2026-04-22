import type { InputHTMLAttributes, ReactNode } from 'react'

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Ikona lub element przed polem (np. lupa) */
  leading?: ReactNode
}

export function TextField({ leading, className = '', id, ...props }: TextFieldProps) {
  return (
    <div className="relative">
      {leading ? (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-secondary [&_.material-symbols-outlined]:text-lg">
          {leading}
        </span>
      ) : null}
      <input
        id={id}
        className={`w-full rounded-full border-none bg-surface-container py-2 text-sm text-on-surface outline-none ring-primary/20 placeholder:text-secondary focus:ring-2 ${leading ? 'pl-10 pr-4' : 'px-4'} ${className}`.trim()}
        {...props}
      />
    </div>
  )
}
