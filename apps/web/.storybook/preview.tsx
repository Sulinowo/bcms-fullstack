import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { ToastProvider } from '../src/components/ui/feedback/Toast'
import React from 'react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
