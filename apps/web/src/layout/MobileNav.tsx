import { NavLink } from 'react-router-dom'
import { mainNav } from './navConfig'

const pill = ({ isActive }: { isActive: boolean }) =>
  [
    'shrink-0 rounded-full px-3 py-1.5 text-xs font-medium',
    isActive ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface',
  ].join(' ')

const futurePill =
  'shrink-0 cursor-default rounded-full bg-surface-container-high px-3 py-1.5 text-xs text-on-surface-variant dark:bg-zinc-800 dark:text-zinc-500'

export function MobileNav() {
  return (
    <nav
      className="sticky top-0 z-40 flex gap-2 overflow-x-auto border-b border-frame bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm dark:border-zinc-700 md:hidden"
      aria-label="Nawigacja główna"
    >
      {mainNav.map((item) =>
        item.to ? (
          <NavLink key={item.label} to={item.to} end className={pill}>
            {item.label}
          </NavLink>
        ) : (
          <span key={item.label} className={futurePill} title="Wkrótce">
            {item.label}
          </span>
        ),
      )}
    </nav>
  )
}
