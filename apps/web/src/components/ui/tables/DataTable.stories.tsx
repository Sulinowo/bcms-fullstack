import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button } from '../actions/Button'
import { DataTable } from './DataTable'

type Unit = { id: string; name: string; stock: number; updated: string }

const rows: Unit[] = [
  { id: '1', name: '0 Rh-', stock: 42, updated: '2026-04-20' },
  { id: '2', name: 'A Rh+', stock: 18, updated: '2026-04-19' },
  { id: '3', name: 'B Rh+', stock: 7, updated: '2026-04-18' },
]

const columns = [
  {
    id: 'name',
    header: 'Grupa',
    cell: (r: Unit) => r.name,
    sortable: true,
    compare: (a: Unit, b: Unit) => a.name.localeCompare(b.name, 'pl'),
  },
  {
    id: 'stock',
    header: 'Stan',
    cell: (r: Unit) => r.stock,
    align: 'right' as const,
    sortable: true,
    compare: (a: Unit, b: Unit) => a.stock - b.stock,
  },
  {
    id: 'updated',
    header: 'Aktualizacja',
    cell: (r: Unit) => r.updated,
    sortable: true,
    compare: (a: Unit, b: Unit) => a.updated.localeCompare(b.updated),
  },
]

const meta = {
  title: 'UI/Tables/DataTable',
  tags: ['autodocs'],
} satisfies Meta

export default meta

export const Default: StoryObj = {
  render: () => <DataTable<Unit> columns={columns} rows={rows} getRowKey={(r) => r.id} />,
}

export const Loading: StoryObj = {
  render: () => (
    <DataTable<Unit>
      columns={columns}
      rows={[]}
      getRowKey={(r) => r.id}
      loading
      skeletonRows={4}
    />
  ),
}

export const Empty: StoryObj = {
  render: () => (
    <DataTable<Unit>
      columns={columns}
      rows={[]}
      getRowKey={(r) => r.id}
      emptyLabel="Brak rekordów zapasu dla wybranego oddziału."
    />
  ),
}

function ToggleLoadingDemo() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="space-y-4">
      <Button type="button" variant="secondary" size="sm" onClick={() => setLoading((v) => !v)}>
        {loading ? 'Pokaż dane' : 'Symuluj ładowanie'}
      </Button>
      <DataTable<Unit>
        columns={columns}
        rows={rows}
        getRowKey={(r) => r.id}
        loading={loading}
      />
    </div>
  )
}

export const ToggleLoading: StoryObj = {
  render: () => <ToggleLoadingDemo />,
}
