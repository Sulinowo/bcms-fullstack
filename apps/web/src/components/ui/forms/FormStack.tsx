import type { HTMLAttributes } from 'react'

export type FormStackProps = HTMLAttributes<HTMLDivElement>

/** Pionowy odstęp między polami formularza (rytm 8px × 2.5). */
export function FormStack({ className = '', children, ...props }: FormStackProps) {
  return (
    <div className={`flex flex-col gap-5 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
