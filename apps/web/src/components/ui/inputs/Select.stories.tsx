import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from './Select'

const meta = {
  title: 'UI/Inputs/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Select {...args} aria-label="Placówka">
      <option value="">Wybierz placówkę</option>
      <option value="1">RCKiK — Warszawa</option>
      <option value="2">Regionalny — Kraków</option>
    </Select>
  ),
}
