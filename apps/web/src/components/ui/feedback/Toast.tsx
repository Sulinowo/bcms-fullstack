import * as ToastPrimitive from '@radix-ui/react-toast'
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

export type ToastVariant = 'default' | 'success' | 'error'

export type ToastPayload = {
  title: string
  description?: string
  variant?: ToastVariant
}

type ToastRecord = ToastPayload & { id: string; open: boolean }

function toastSurface(variant: ToastVariant | undefined) {
  switch (variant) {
    case 'success':
      return 'border-green-200 bg-green-50 text-green-950 dark:border-green-900 dark:bg-green-950/40 dark:text-green-50'
    case 'error':
      return 'border-red-200 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/40 dark:text-red-50'
    default:
      return 'border-frame-strong bg-white text-on-surface dark:border-zinc-600 dark:bg-zinc-950'
  }
}

const ToastDispatchContext = createContext<((payload: ToastPayload) => void) | null>(null)

export function useToast() {
  const ctx = useContext(ToastDispatchContext)
  if (!ctx) {
    throw new Error('useToast musi być użyty wewnątrz ToastProvider')
  }
  return ctx
}

export type ToastProviderProps = {
  children: ReactNode
  /** Czas wyświetlania w ms (Radix). */
  duration?: number
}

export function ToastProvider({ children, duration = 5000 }: ToastProviderProps) {
  const [items, setItems] = useState<ToastRecord[]>([])

  const push = useCallback((payload: ToastPayload) => {
    const id = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`
    setItems((prev) => [...prev, { ...payload, id, open: true }])
  }, [])

  const value = useMemo(() => push, [push])

  return (
    <ToastPrimitive.Provider duration={duration} swipeDirection="right">
      <ToastDispatchContext.Provider value={value}>
        {children}
        {items.map((t) => (
          <ToastPrimitive.Root
            key={t.id}
            open={t.open}
            onOpenChange={(open) => {
              if (!open) {
                setItems((prev) => prev.filter((x) => x.id !== t.id))
              }
            }}
            className={`grid max-w-sm grid-cols-[1fr_auto] items-start gap-x-3 gap-y-1 rounded-xl border p-4 shadow-lg transition-opacity data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none ${toastSurface(t.variant)}`.trim()}
          >
            <ToastPrimitive.Title className="text-sm font-semibold">{t.title}</ToastPrimitive.Title>
            <ToastPrimitive.Close
              type="button"
              className="rounded-md p-1 text-secondary transition hover:bg-black/5 hover:text-on-surface dark:hover:bg-white/10"
              aria-label="Zamknij"
            >
              ×
            </ToastPrimitive.Close>
            {t.description ? (
              <ToastPrimitive.Description className="col-span-2 text-sm text-secondary">
                {t.description}
              </ToastPrimitive.Description>
            ) : null}
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[100] flex w-full max-w-[420px] flex-col gap-2 p-4 sm:bottom-4 sm:right-4" />
      </ToastDispatchContext.Provider>
    </ToastPrimitive.Provider>
  )
}
