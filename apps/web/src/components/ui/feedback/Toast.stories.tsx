import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../actions/Button'
import { useToast } from './Toast'

const meta = {
  title: 'UI/Feedback/Toast',
  tags: ['autodocs'],
} satisfies Meta

export default meta

function ToastDemo() {
  const toast = useToast()
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={() => toast({ title: 'Zapisano zmiany', description: 'Profil dawcy został zaktualizowany.' })}
      >
        Domyślny
      </Button>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={() =>
          toast({
            title: 'Wizyta potwierdzona',
            description: 'Przypomnienie wyślemy dzień przed terminem.',
            variant: 'success',
          })
        }
      >
        Sukces
      </Button>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={() =>
          toast({
            title: 'Błąd sieci',
            description: 'Spróbuj ponownie za chwilę.',
            variant: 'error',
          })
        }
      >
        Błąd
      </Button>
    </div>
  )
}

export const Playground: StoryObj = {
  render: () => <ToastDemo />,
}
