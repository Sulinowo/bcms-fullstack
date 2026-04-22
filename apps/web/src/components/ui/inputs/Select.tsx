import type { SelectHTMLAttributes } from 'react'

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function Select({ className = '', children, ...props }: SelectProps) {
  return (
    <select
      className={`w-full appearance-none rounded-xl border border-frame bg-white bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat px-4 py-2.5 text-sm text-on-surface outline-none ring-primary/20 focus:border-primary focus:ring-2 dark:border-zinc-600 dark:bg-zinc-900 ${className}`.trim()}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235f5e5e'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
      }}
      {...props}
    >
      {children}
    </select>
  )
}
