import * as SwitchPrimitive from '@radix-ui/react-switch'
import type { ComponentPropsWithoutRef } from 'react'

export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
  label: string
}

export function Switch({ id, label, className = '', disabled, ...props }: SwitchProps) {
  return (
    <div className={`flex items-center justify-between gap-4 ${className}`.trim()}>
      <label htmlFor={id} className={`text-sm text-on-surface ${disabled ? 'opacity-50' : ''}`.trim()}>
        {label}
      </label>
      <SwitchPrimitive.Root
        id={id}
        disabled={disabled}
        className="inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border border-frame bg-surface-container-high outline-none transition focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary dark:border-zinc-600"
        {...props}
      >
        <SwitchPrimitive.Thumb className="pointer-events-none block size-6 translate-x-0.5 rounded-full bg-white shadow-sm transition will-change-transform data-[state=checked]:translate-x-5 rtl:data-[state=checked]:-translate-x-5" />
      </SwitchPrimitive.Root>
    </div>
  )
}
