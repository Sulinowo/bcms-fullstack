import * as DialogPrimitive from '@radix-ui/react-dialog'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close
export const DialogPortal = DialogPrimitive.Portal

export type DialogOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>

export const DialogOverlay = ({ className = '', ...props }: DialogOverlayProps) => (
  <DialogPrimitive.Overlay
    className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px] ${className}`.trim()}
    {...props}
  />
)

export type DialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  children: ReactNode
}

export function DialogContent({ className = '', children, ...props }: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={`fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-frame-strong bg-white p-6 shadow-xl outline-none dark:border-zinc-600 dark:bg-zinc-950 ${className}`.trim()}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

export const DialogTitle = ({ className = '', ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title
    className={`text-lg font-semibold text-on-surface ${className}`.trim()}
    {...props}
  />
)

export const DialogDescription = ({
  className = '',
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description
    className={`mt-1 text-sm text-secondary ${className}`.trim()}
    {...props}
  />
)
