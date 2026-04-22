import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta = {
  title: 'UI/Actions/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { children: 'Zapisz', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Anuluj', variant: 'secondary' },
}

export const Ghost: Story = {
  args: { children: 'Więcej', variant: 'ghost' },
}

export const Small: Story = {
  args: { children: 'Oddaj krew', variant: 'primary', size: 'sm' },
}
