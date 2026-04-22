import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialIcon } from '../../icons/MaterialIcon'
import { IconButton } from './IconButton'

const meta = {
  title: 'UI/Actions/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['ghost', 'secondary'] },
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    'aria-label': 'Powiadomienia',
    children: <MaterialIcon name="notifications" />,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    'aria-label': 'Ustawienia',
    children: <MaterialIcon name="settings" />,
  },
}
