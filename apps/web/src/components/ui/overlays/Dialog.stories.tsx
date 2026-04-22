import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../actions/Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './Dialog'

const meta = {
  title: 'UI/Overlays/Dialog',
  tags: ['autodocs'],
} satisfies Meta

export default meta

export const Confirm: StoryObj = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Otwórz dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Anulować wizytę?</DialogTitle>
        <DialogDescription>
          Tej operacji nie cofniesz. W razie potrzeby umów się ponownie w punkcie.
        </DialogDescription>
        <div className="mt-6 flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="ghost">Zamknij</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary">Potwierdź</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  ),
}
