import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react'

/** Owinęta tabela z przewijaniem poziomym na wąskich ekranach. */
export function Table({ className = '', ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto rounded-xl border border-frame dark:border-zinc-700">
      <table
        className={`w-full min-w-[28rem] border-collapse text-left text-sm text-on-surface ${className}`.trim()}
        {...props}
      />
    </div>
  )
}

export function THead(props: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className="border-b border-frame bg-surface-container-low dark:border-zinc-700"
      {...props}
    />
  )
}

export function TBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className="divide-y divide-frame dark:divide-zinc-700" {...props} />
}

export function Tr({ className = '', ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={`transition-colors hover:bg-surface-container-low dark:hover:bg-zinc-800/60 ${className}`.trim()}
      {...props}
    />
  )
}

export function Th({ className = '', ...props }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-on-surface-variant ${className}`.trim()}
      {...props}
    />
  )
}

export function Td({ className = '', ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={`px-4 py-3 ${className}`.trim()} {...props} />
}
