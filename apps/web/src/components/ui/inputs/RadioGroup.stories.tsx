import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioGroupField, RadioOption } from './RadioGroup'

const meta = {
  title: 'UI/Inputs/RadioGroup',
  tags: ['autodocs'],
} satisfies Meta

export default meta

export const DonationType: StoryObj = {
  render: () => (
    <RadioGroupField
      name="donation"
      defaultValue="whole"
      legend="Typ donacji"
      description="Wybierz jedną opcję — możesz ją zmienić przed zapisem."
      className="max-w-md"
    >
      <RadioOption
        value="whole"
        id="don-whole"
        label="Krew pełna"
        description="Standardowa donacja ok. 450 ml."
      />
      <RadioOption value="plasma" id="don-plasma" label="Osocze" />
      <RadioOption value="platelets" id="don-platelets" label="Płytki krwi" disabled />
    </RadioGroupField>
  ),
}
