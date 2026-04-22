import { useMemo, useState, type ReactNode } from 'react'
import { Table, TBody, THead, Td, Th, Tr } from './Table'

export type SortDirection = 'asc' | 'desc'

export type DataTableColumn<Row> = {
  id: string
  header: string
  cell: (row: Row) => ReactNode
  /** Włącza sortowanie po kliknięciu nagłówka (lokalnie, w pamięci). */
  sortable?: boolean
  /** Porównanie dwóch wierszy — wymagane, gdy `sortable` jest true. */
  compare?: (a: Row, b: Row) => number
  /** Wyrównanie komórki (domyślnie w lewo). */
  align?: 'left' | 'right'
}

export type DataTableProps<Row> = {
  columns: DataTableColumn<Row>[]
  rows: Row[]
  getRowKey: (row: Row) => string
  /** Pokaż szkielet zamiast wierszy (np. podczas ładowania z API). */
  loading?: boolean
  /** Liczba szkieletowych wierszy przy `loading`. */
  skeletonRows?: number
  emptyLabel?: string
  className?: string
}

function SortGlyph({ active, dir }: { active: boolean; dir: SortDirection | null }) {
  if (!active || !dir) {
    return <span className="ml-1 text-secondary opacity-40" aria-hidden>
      ↕
    </span>
  }
  return (
    <span className="ml-1 text-on-surface" aria-hidden>
      {dir === 'asc' ? '↑' : '↓'}
    </span>
  )
}

export function DataTable<Row>({
  columns,
  rows,
  getRowKey,
  loading = false,
  skeletonRows = 5,
  emptyLabel = 'Brak danych',
  className = '',
}: DataTableProps<Row>) {
  const [sort, setSort] = useState<{ columnId: string; dir: SortDirection } | null>(null)

  const sortedRows = useMemo(() => {
    if (!sort) return rows
    const col = columns.find((c) => c.id === sort.columnId)
    if (!col?.sortable || !col.compare) return rows
    const next = [...rows]
    next.sort((a, b) => (sort.dir === 'asc' ? col.compare!(a, b) : col.compare!(b, a)))
    return next
  }, [columns, rows, sort])

  const onHeaderClick = (col: DataTableColumn<Row>) => {
    if (!col.sortable || !col.compare) return
    setSort((prev) => {
      if (!prev || prev.columnId !== col.id) return { columnId: col.id, dir: 'asc' }
      return prev.dir === 'asc' ? { columnId: col.id, dir: 'desc' } : { columnId: col.id, dir: 'asc' }
    })
  }

  return (
    <Table className={className}>
      <THead>
        <Tr>
          {columns.map((col) => {
            const active = sort?.columnId === col.id
            const dir = active ? sort!.dir : null
            const sortable = Boolean(col.sortable && col.compare)
            return (
              <Th
                key={col.id}
                scope="col"
                className={col.align === 'right' ? 'text-right' : ''}
              >
                {sortable ? (
                  <button
                    type="button"
                    aria-sort={active ? (dir === 'asc' ? 'ascending' : 'descending') : 'none'}
                    className="inline-flex items-center gap-0.5 rounded-md px-1 py-0.5 text-left font-semibold text-on-surface hover:bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    onClick={() => onHeaderClick(col)}
                  >
                    {col.header}
                    <SortGlyph active={active} dir={dir} />
                  </button>
                ) : (
                  col.header
                )}
              </Th>
            )
          })}
        </Tr>
      </THead>
      <TBody>
        {loading
          ? Array.from({ length: skeletonRows }).map((_, i) => (
              <Tr key={`sk-${i}`}>
                {columns.map((col) => (
                  <Td key={col.id} className={col.align === 'right' ? 'text-right' : ''}>
                    <div className="h-4 w-full max-w-[12rem] animate-pulse rounded bg-surface-container-high" />
                  </Td>
                ))}
              </Tr>
            ))
          : sortedRows.length === 0
            ? (
                <Tr>
                  <Td colSpan={columns.length} className="py-8 text-center text-sm text-secondary">
                    {emptyLabel}
                  </Td>
                </Tr>
              )
            : (
                sortedRows.map((row) => (
                  <Tr key={getRowKey(row)}>
                    {columns.map((col) => (
                      <Td key={col.id} className={col.align === 'right' ? 'text-right' : ''}>
                        {col.cell(row)}
                      </Td>
                    ))}
                  </Tr>
                ))
              )}
      </TBody>
    </Table>
  )
}
