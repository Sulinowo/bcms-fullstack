import type { Meta, StoryObj } from '@storybook/react-vite'
import { LabeledField } from '../forms/LabeledField'
import { NumberField } from './NumberField'

const meta = {
  title: 'UI/Inputs/NumberField',
  component: NumberField,
  tags: ['autodocs'],
} satisfies Meta<typeof NumberField>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    id: 'units',
    placeholder: '0',
    min: 0,
    max: 10,
    defaultValue: 1,
  },
}

export const WithLabel: StoryObj = {
  render: () => (
    <LabeledField label="Liczba worków" htmlFor="bags" hint="Maksymalnie 5 na wizytę.">
      <NumberField id="bags" name="bags" min={1} max={5} defaultValue={2} />
    </LabeledField>
  ),
}
