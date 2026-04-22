import type { HTMLAttributes, ReactNode } from 'react'
import { Spinner } from './Spinner'

export type LoadingOverlayProps = HTMLAttributes<HTMLDivElement> & {
  /** Gdy false, nic nie renderuje */
  open: boolean
  children?: ReactNode
  spinnerLabel?: string
}

/** Półprzezroczysta warstwa z spinnerem nad fragmentem UI. */
export function LoadingOverlay({
  open,
  children,
  spinnerLabel,
  className = '',
  ...props
}: LoadingOverlayProps) {
  if (!open) return null
  return (
    <div
      className={`absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-white/80 backdrop-blur-[2px] dark:bg-zinc-950/75 ${className}`.trim()}
      {...props}
    >
      <Spinner size="lg" label={spinnerLabel} />
      {children}
    </div>
  )
}
