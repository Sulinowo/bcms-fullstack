import type { InputHTMLAttributes } from 'react'

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
}

export function Checkbox({ id, label, className = '', ...props }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-start gap-3 text-sm text-on-surface ${className}`.trim()}
    >
      <input
        id={id}
        type="checkbox"
        className="mt-0.5 size-4 shrink-0 rounded border border-frame-strong text-primary focus:ring-primary/30 dark:border-zinc-500"
        {...props}
      />
      <span>{label}</span>
    </label>
  )
}
