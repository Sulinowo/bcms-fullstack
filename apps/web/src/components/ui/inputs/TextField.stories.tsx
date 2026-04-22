import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialIcon } from '../../icons/MaterialIcon'
import { TextField } from './TextField'

const meta = {
  title: 'UI/Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Szukaj placówek, wpisów…',
    'aria-label': 'Szukaj',
  },
}

export const WithLeadingIcon: Story = {
  args: {
    leading: <MaterialIcon name="search" />,
    placeholder: 'Szukaj placówek, wpisów…',
    'aria-label': 'Szukaj',
  },
}
