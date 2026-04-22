import { MaterialIcon } from '../components/icons/MaterialIcon'
import { TextField } from '../components/ui/inputs/TextField'

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-frame bg-white/90 px-6 shadow-sm backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-950/90 md:px-8">
      <div className="flex min-w-0 flex-1 items-center">
        <div className="w-full max-w-md">
          <TextField
            type="search"
            leading={<MaterialIcon name="search" />}
            placeholder="Szukaj placówek, wpisów, porad…"
            aria-label="Szukaj"
          />
        </div>
      </div>

      <div className="ml-4 flex shrink-0 items-center gap-4 md:gap-6">
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            className="text-secondary transition-opacity hover:text-primary dark:text-zinc-400"
            aria-label="Powiadomienia"
          >
            <MaterialIcon name="notifications" />
          </button>
          <button
            type="button"
            className="text-secondary transition-opacity hover:text-primary dark:text-zinc-400"
            aria-label="Ustawienia"
          >
            <MaterialIcon name="settings" />
          </button>
        </div>
        <div className="flex items-center gap-3 border-l border-frame pl-4 dark:border-zinc-700">
          <div className="hidden text-right sm:block">
            <p className="text-xs font-bold text-on-surface">Jan Kowalski</p>
            <p className="text-[10px] text-secondary">Dawca</p>
          </div>
          <div
            className="h-9 w-9 shrink-0 rounded-full border-2 border-primary/20 bg-surface-container"
            aria-hidden
          />
        </div>
      </div>
    </header>
  )
}
