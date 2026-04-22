import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../display/Badge'
import { Table, TBody, Td, Th, THead, Tr } from './Table'

const meta = {
  title: 'UI/Tables/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const DonationsExample: Story = {
  args: {},
  render: () => (
    <Table>
      <THead>
        <Tr>
          <Th>Data</Th>
          <Th>Typ</Th>
          <Th>Placówka</Th>
          <Th>Status</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>2026-04-12</Td>
          <Td>Krew pełna</Td>
          <Td>RCKiK Warszawa</Td>
          <Td>
            <Badge tone="success">Zakończono</Badge>
          </Td>
        </Tr>
        <Tr>
          <Td>2026-01-08</Td>
          <Td>Osocze</Td>
          <Td>Regionalny Kraków</Td>
          <Td>
            <Badge tone="neutral">Zaplanowano</Badge>
          </Td>
        </Tr>
      </TBody>
    </Table>
  ),
}
