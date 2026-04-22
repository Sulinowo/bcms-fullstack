import type { TextareaHTMLAttributes } from 'react'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextArea({ className = '', rows = 4, ...props }: TextAreaProps) {
  return (
    <textarea
      rows={rows}
      className={`w-full resize-y rounded-xl border border-frame bg-white px-4 py-3 text-sm text-on-surface outline-none ring-primary/20 placeholder:text-secondary focus:border-primary focus:ring-2 dark:border-zinc-600 dark:bg-zinc-900 ${className}`.trim()}
      {...props}
    />
  )
}
