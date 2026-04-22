import { NavLink } from 'react-router-dom'
import { MaterialIcon } from '../components/icons/MaterialIcon'
import { mainNav } from './navConfig'

const activeNav =
  'flex items-center gap-3 rounded-lg bg-primary-fixed px-4 py-3 text-sm font-semibold tracking-tight text-primary transition-all duration-200 dark:bg-primary/20 dark:text-primary-fixed'

const idleNav =
  'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium tracking-tight text-secondary transition-all duration-200 hover:bg-surface-container-low hover:text-primary active:scale-[0.98] dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-primary-fixed'

const futureNav =
  'flex cursor-default items-center gap-3 rounded-lg px-4 py-3 text-sm text-on-surface-variant opacity-80 dark:text-zinc-500'

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col gap-2 border-r border-frame bg-white p-4 shadow-[4px_0_16px_rgba(18,20,24,0.08)] dark:border-zinc-700 dark:bg-zinc-950 md:flex">
      <div className="mb-4 flex items-center gap-3 px-4 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary">
          <MaterialIcon name="water_drop" filled className="text-xl text-on-primary" />
        </div>
        <div>
          <p className="text-2xl font-black uppercase leading-none tracking-widest text-primary dark:text-primary-fixed">
            BCMS
          </p>
          <p className="text-xs font-medium tracking-tight text-secondary">
            Bank krwi
          </p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col space-y-1" aria-label="Menu główne">
        {mainNav.map((item) =>
          item.to ? (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? activeNav : idleNav)}
            >
              <MaterialIcon name={item.icon} className="text-[1.35rem]" />
              <span>{item.label}</span>
            </NavLink>
          ) : (
            <div key={item.label} className={futureNav}>
              <MaterialIcon name={item.icon} className="text-[1.35rem] opacity-60" />
              <span>{item.label}</span>
              <span className="ml-auto text-[10px] font-medium uppercase tracking-wide text-on-surface-variant">
                wkrótce
              </span>
            </div>
          ),
        )}
      </nav>

      <div className="mt-auto rounded-xl bg-primary p-4 text-on-primary">
        <h2 className="mb-2 text-sm font-semibold">Potrzebujesz pomocy?</h2>
        <p className="mb-4 text-xs opacity-90">
          Wsparcie dla dawców — skontaktuj się z punktem oddziałów.
        </p>
        <button
          type="button"
          className="w-full rounded-lg bg-white py-2 text-xs font-bold uppercase tracking-wider text-primary"
        >
          Oddaj krew
        </button>
      </div>
    </aside>
  )
}
