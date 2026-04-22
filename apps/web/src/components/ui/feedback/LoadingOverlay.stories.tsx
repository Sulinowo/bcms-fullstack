import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from '../display/Card'
import { LoadingOverlay } from './LoadingOverlay'

const meta = {
  title: 'UI/Feedback/LoadingOverlay',
  component: LoadingOverlay,
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingOverlay>

export default meta
type Story = StoryObj<typeof meta>

export const OverCard: Story = {
  args: {
    open: true,
    spinnerLabel: 'Ładowanie danych karty',
  },
  render: (args) => (
    <div className="relative max-w-md">
      <Card>
        <p className="text-sm text-secondary">Treść karty — pod spodem overlay.</p>
      </Card>
      <LoadingOverlay {...args} />
    </div>
  ),
}
