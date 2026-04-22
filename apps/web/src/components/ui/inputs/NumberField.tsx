import type { InputHTMLAttributes, ReactNode } from 'react'

export type NumberFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  /** Ikona lub element przed polem */
  leading?: ReactNode
}

export function NumberField({ leading, className = '', id, min, max, step = 1, ...props }: NumberFieldProps) {
  return (
    <div className="relative">
      {leading ? (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-secondary [&_.material-symbols-outlined]:text-lg">
          {leading}
        </span>
      ) : null}
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={step}
        className={`w-full rounded-full border-none bg-surface-container py-2 text-sm text-on-surface outline-none ring-primary/20 [appearance:textfield] placeholder:text-secondary focus:ring-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${leading ? 'pl-10 pr-4' : 'px-4'} ${className}`.trim()}
        {...props}
      />
    </div>
  )
}
