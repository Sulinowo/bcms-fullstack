/**
 * Tymczasowy widok w aplikacji: tylko shell layoutu.
 * Rozwój komponentów UI odbywa się w Storybooku (`npm run storybook`).
 */
export function AppPlaceholder() {
  return (
    <div className="max-w-xl rounded-xl border border-dashed border-frame bg-surface-container-low/50 p-8">
      <h1 className="text-lg font-semibold text-on-surface">Front w przygotowaniu</h1>
      <p className="mt-2 text-sm text-secondary">
        Ten obszar zostawiamy pusty do czasu ustalenia ekranów. Komponenty globalne
        (Button, Card, Badge, TextField itd.) budujemy i podglądamy w Storybooku:
      </p>
      <p className="mt-4">
        <code className="rounded-md bg-surface-container px-2 py-1 text-xs text-on-surface">
          npm run storybook
        </code>
      </p>
    </div>
  )
}
