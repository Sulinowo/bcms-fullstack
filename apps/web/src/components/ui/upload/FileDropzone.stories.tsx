import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileDropzone } from './FileDropzone'

const meta = {
  title: 'UI/Upload/FileDropzone',
  component: FileDropzone,
  tags: ['autodocs'],
} satisfies Meta<typeof FileDropzone>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    accept: '.pdf,image/*',
    onFilesSelected: (files) => {
      console.log('Wybrane pliki:', files.map((f) => f.name))
    },
  },
}

export const Multiple: Story = {
  args: {
    multiple: true,
    accept: 'image/*',
    description: 'Możesz wybrać kilka zdjęć naraz.',
    onFilesSelected: (files) => {
      console.log('Liczba plików:', files.length)
    },
  },
}
