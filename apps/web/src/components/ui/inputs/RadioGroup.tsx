import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export const RadioGroup = ({ className = '', ...props }: ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>) => (
  <RadioGroupPrimitive.Root className={`flex flex-col gap-3 ${className}`.trim()} {...props} />
)

export type RadioOptionProps = {
  value: string
  id: string
  label: string
  description?: string
  disabled?: boolean
}

export function RadioOption({ value, id, label, description, disabled }: RadioOptionProps) {
  return (
    <div className="flex items-start gap-3">
      <RadioGroupPrimitive.Item
        value={value}
        id={id}
        disabled={disabled}
        className="mt-0.5 flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-frame-strong bg-white outline-none transition focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary/10 dark:border-zinc-500 dark:bg-zinc-900"
      >
        <RadioGroupPrimitive.Indicator className="size-2 rounded-full bg-primary" />
      </RadioGroupPrimitive.Item>
      <div className="min-w-0">
        <label htmlFor={id} className={`cursor-pointer text-sm font-medium text-on-surface ${disabled ? 'opacity-50' : ''}`.trim()}>
          {label}
        </label>
        {description ? <p className="mt-0.5 text-xs text-secondary">{description}</p> : null}
      </div>
    </div>
  )
}

export type RadioGroupFieldProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
  legend: string
  description?: string
  children: ReactNode
}

/** Grupa opcji wzajemnie wykluczających z nagłówkiem (fieldset semantics przez `role="group"`). */
export function RadioGroupField({ legend, description, className = '', children, ...props }: RadioGroupFieldProps) {
  return (
    <fieldset className={`space-y-2 ${className}`.trim()}>
      <legend className="text-sm font-medium text-on-surface">{legend}</legend>
      {description ? <p className="text-xs text-secondary">{description}</p> : null}
      <RadioGroup {...props}>{children}</RadioGroup>
    </fieldset>
  )
}
