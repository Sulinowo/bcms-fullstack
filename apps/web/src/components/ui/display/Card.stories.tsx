import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  title: 'UI/Display/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-base font-semibold text-on-surface">Tytuł karty</h3>
        <p className="mt-2 text-sm text-secondary">
          Treść — kontener na wykres, tabelę lub formularz.
        </p>
      </div>
    ),
  },
}

export const Dense: Story = {
  args: {
    dense: true,
    children: <p className="text-sm text-secondary">Kompaktowy padding (dense).</p>,
  },
}
