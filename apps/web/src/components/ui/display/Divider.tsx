import type { HTMLAttributes } from 'react'

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  /** Pionowy separator (np. w nagłówku) */
  orientation?: 'horizontal' | 'vertical'
}

export function Divider({
  orientation = 'horizontal',
  className = '',
  role = 'separator',
  'aria-orientation': ariaOrientation,
  ...props
}: DividerProps) {
  const vertical = orientation === 'vertical'
  return (
    <hr
      role={role}
      aria-orientation={ariaOrientation ?? (vertical ? 'vertical' : 'horizontal')}
      className={
        vertical
          ? `mx-2 h-6 w-px shrink-0 border-0 bg-frame dark:bg-zinc-600 ${className}`.trim()
          : `my-4 h-px w-full border-0 bg-frame dark:bg-zinc-600 ${className}`.trim()
      }
      {...props}
    />
  )
}
