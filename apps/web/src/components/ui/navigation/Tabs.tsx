import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { ComponentPropsWithoutRef } from 'react'

export const Tabs = TabsPrimitive.Root

export const TabsList = ({ className = '', ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    className={`inline-flex h-11 items-center justify-start gap-1 rounded-xl border border-frame bg-surface-container-low p-1 dark:border-zinc-700 ${className}`.trim()}
    {...props}
  />
)

export const TabsTrigger = ({
  className = '',
  ...props
}: ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger
    className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-on-surface-variant transition data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=active]:text-on-surface data-[state=active]:shadow-sm dark:data-[state=active]:bg-zinc-900 ${className}`.trim()}
    {...props}
  />
)

export const TabsContent = ({
  className = '',
  ...props
}: ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content
    className={`mt-4 rounded-xl border border-frame bg-white p-6 outline-none dark:border-zinc-700 dark:bg-zinc-900 ${className}`.trim()}
    {...props}
  />
)
