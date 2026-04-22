import type { Meta, StoryObj } from '@storybook/react-vite'
import { Divider } from './Divider'

const meta = {
  title: 'UI/Display/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {},
  render: () => (
    <div className="max-w-sm">
      <p className="text-sm">Sekcja powyżej</p>
      <Divider className="my-6" />
      <p className="text-sm">Sekcja poniżej</p>
    </div>
  ),
}

export const Vertical: Story = {
  args: {},
  render: () => (
    <div className="flex h-12 items-center gap-2">
      <span className="text-sm">Lewo</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Prawo</span>
    </div>
  ),
}
