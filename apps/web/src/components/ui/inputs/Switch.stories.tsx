import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './Switch'

const meta = {
  title: 'UI/Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'switch-rodo',
    label: 'Wyrażam zgodę na przetwarzanie danych osobowych',
    defaultChecked: false,
  },
}

export const Checked: Story = {
  args: {
    id: 'switch-notify',
    label: 'Powiadomienia e-mail o terminach',
    defaultChecked: true,
  },
}
