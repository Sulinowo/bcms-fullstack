import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

const meta = {
  title: 'UI/Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Informacja',
    children: 'Możesz uzupełnić profil dawcy w dowolnym momencie.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Zapisano',
    children: 'Twoja rejestracja została przyjęta.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Uwaga',
    children: 'Przed oddaniem sprawdź, czy spełniasz kryteria kwalifikacji.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Błąd',
    role: 'alert',
    children: 'Nie udało się połączyć z serwerem. Spróbuj ponownie.',
  },
}
