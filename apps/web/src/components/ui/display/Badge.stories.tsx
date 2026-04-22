import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'UI/Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'success', 'warning', 'critical'] },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = { args: { children: 'Stabilnie', tone: 'neutral' } }
export const Success: Story = { args: { children: 'Dobrze', tone: 'success' } }
export const Warning: Story = { args: { children: 'Nisko', tone: 'warning' } }
export const Critical: Story = { args: { children: 'Krytycznie', tone: 'critical' } }
