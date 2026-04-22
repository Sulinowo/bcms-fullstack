import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextField } from '../inputs/TextField'
import { FormStack } from './FormStack'
import { LabeledField } from './LabeledField'

const meta = {
  title: 'UI/Forms/FormStack',
  component: FormStack,
  tags: ['autodocs'],
} satisfies Meta<typeof FormStack>

export default meta
type Story = StoryObj<typeof meta>

export const WithLabeledFields: Story = {
  render: () => (
    <FormStack className="max-w-md">
      <LabeledField label="Imię i nazwisko" htmlFor="f-name" hint="Jak w dowodzie.">
        <TextField id="f-name" placeholder="Jan Kowalski" />
      </LabeledField>
      <LabeledField label="E-mail" htmlFor="f-mail" error="Niepoprawny format adresu.">
        <TextField id="f-mail" type="email" placeholder="jan@example.com" aria-invalid />
      </LabeledField>
    </FormStack>
  ),
}
