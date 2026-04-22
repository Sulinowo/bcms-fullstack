import { Route, Routes } from 'react-router-dom'
import { ToastProvider } from './components/ui/feedback/Toast'
import { AppLayout } from './layout/AppLayout'
import { AppPlaceholder } from './pages/AppPlaceholder'

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<AppPlaceholder />} />
        </Route>
      </Routes>
    </ToastProvider>
  )
}
