export type NavItem = {
  label: string
  icon: string
  /** Brak = pozycja planowana, bez routingu */
  to?: string
}

export const mainNav: NavItem[] = [
  { to: '/', label: 'Pulpit', icon: 'dashboard' },
  { label: 'Mapa oddań', icon: 'map' },
  { label: 'Historia', icon: 'history' },
  { label: 'Profil dawcy', icon: 'person' },
]
