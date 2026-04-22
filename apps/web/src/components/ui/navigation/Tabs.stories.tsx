import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'

const meta = {
  title: 'UI/Navigation/Tabs',
  tags: ['autodocs'],
} satisfies Meta

export default meta

export const ControlledExample: StoryObj = {
  render: () => (
    <Tabs defaultValue="dane" className="max-w-2xl">
      <TabsList aria-label="Sekcje profilu">
        <TabsTrigger value="dane">Dane</TabsTrigger>
        <TabsTrigger value="historia">Historia</TabsTrigger>
        <TabsTrigger value="dokumenty">Dokumenty</TabsTrigger>
      </TabsList>
      <TabsContent value="dane">
        <p className="text-sm text-secondary">Podstawowe dane dawcy (placeholder).</p>
      </TabsContent>
      <TabsContent value="historia">
        <p className="text-sm text-secondary">Lista donacji (placeholder).</p>
      </TabsContent>
      <TabsContent value="dokumenty">
        <p className="text-sm text-secondary">Załączniki (placeholder).</p>
      </TabsContent>
    </Tabs>
  ),
}
